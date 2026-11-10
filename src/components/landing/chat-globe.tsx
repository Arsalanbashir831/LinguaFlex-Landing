"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { isLand } from "@/components/landing/world-mask";

type City = {
  name: string;
  lat: number;
  lon: number;
  text: string;
  lang: string;
  pinOnly?: boolean;
  left?: boolean;
};

const CITIES: City[] = [
  {
    name: "Paris",
    lat: 48.85,
    lon: 2.35,
    text: "Bonjour, ça va ?",
    lang: "FR",
  },
  {
    name: "Madrid",
    lat: 40.42,
    lon: -3.7,
    text: "¡Hola! ¿Qué tal?",
    lang: "ES",
    left: true,
  },
  {
    name: "New York",
    lat: 40.71,
    lon: -74.0,
    text: "Let's practice!",
    lang: "EN",
  },
  {
    name: "São Paulo",
    lat: -23.55,
    lon: -46.63,
    text: "Olá, tudo bem?",
    lang: "PT",
  },
  {
    name: "Berlin",
    lat: 52.52,
    lon: 13.4,
    text: "Guten Tag!",
    lang: "DE",
    pinOnly: true,
  },
  { name: "Dubai", lat: 25.2, lon: 55.27, text: "مرحبا بك", lang: "AR" },
  { name: "Delhi", lat: 28.61, lon: 77.2, text: "नमस्ते", lang: "HI" },
  { name: "Tokyo", lat: 35.68, lon: 139.69, text: "こんにちは", lang: "JA" },
  { name: "Seoul", lat: 37.57, lon: 126.98, text: "안녕하세요", lang: "KO" },
  { name: "Lagos", lat: 6.52, lon: 3.38, text: "Hello, friend!", lang: "EN" },
  {
    name: "Mexico City",
    lat: 19.43,
    lon: -99.13,
    text: "¿Practicamos?",
    lang: "ES",
  },
  {
    name: "Rome",
    lat: 41.9,
    lon: 12.5,
    text: "Ciao a tutti!",
    lang: "IT",
    pinOnly: true,
  },
];

// Conversations linking learners and tutors across the world
const ARCS: [number, number][] = [
  [2, 0],
  [0, 7],
  [1, 10],
  [3, 1],
  [4, 6],
  [5, 8],
  [9, 11],
  [6, 7],
  [10, 2],
  [11, 5],
];

const TILT = 0.38; // radians — tilts the north pole toward the viewer

type Vec3 = [number, number, number];

function latLonToVec(lat: number, lon: number): Vec3 {
  const phi = (lat * Math.PI) / 180;
  const lambda = (lon * Math.PI) / 180;
  return [
    Math.cos(phi) * Math.sin(lambda),
    Math.sin(phi),
    Math.cos(phi) * Math.cos(lambda),
  ];
}

function rotate([x, y, z]: Vec3, rotY: number): Vec3 {
  const cy = Math.cos(rotY);
  const sy = Math.sin(rotY);
  const x1 = x * cy + z * sy;
  const z1 = -x * sy + z * cy;
  const ct = Math.cos(TILT);
  const st = Math.sin(TILT);
  return [x1, y * ct - z1 * st, y * st + z1 * ct];
}

function slerp(a: Vec3, b: Vec3, t: number): Vec3 {
  const dot = Math.min(
    1,
    Math.max(-1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2]),
  );
  const omega = Math.acos(dot);
  if (omega < 1e-4) return a;
  const so = Math.sin(omega);
  const k1 = Math.sin((1 - t) * omega) / so;
  const k2 = Math.sin(t * omega) / so;
  return [a[0] * k1 + b[0] * k2, a[1] * k1 + b[1] * k2, a[2] * k1 + b[2] * k2];
}

function fibonacciSphere(n: number): Vec3[] {
  const pts: Vec3[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    pts.push([Math.cos(theta) * r, y, Math.sin(theta) * r]);
  }
  return pts;
}

const ORBIT_CHIPS = [
  { label: "🇫🇷 Français", ring: 0, angle: 20 },
  { label: "🇪🇸 Español", ring: 0, angle: 200 },
  { label: "🇯🇵 日本語", ring: 1, angle: 110 },
  { label: "🇩🇪 Deutsch", ring: 1, angle: 290 },
];

export function ChatGlobe({ className }: { className?: string }) {
  const root = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubbleRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const canvas = canvasRef.current;
      const wrap = root.current;
      if (!canvas || !wrap) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      // Dense dots on land, sparse faint dots on oceans
      const land: Vec3[] = [];
      const ocean: Vec3[] = [];
      fibonacciSphere(9000).forEach((p, i) => {
        const lat = (Math.asin(p[1]) * 180) / Math.PI;
        const lon = (Math.atan2(p[0], p[2]) * 180) / Math.PI;
        if (isLand(lat, lon)) land.push(p);
        else if (i % 7 === 0) ocean.push(p);
      });
      const cityVecs = CITIES.map((c) => latLonToVec(c.lat, c.lon));

      const state = {
        rot: -0.55,
        velocity: reduceMotion ? 0 : 0.0028,
        intro: 0,
      };
      let size = 0;
      let dpr = 1;
      let visible = true;
      let dragging = false;
      let lastX = 0;
      let dragVelocity = 0;

      const resize = () => {
        const rect = canvas.getBoundingClientRect();
        size = rect.width;
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.round(size * dpr);
        canvas.height = Math.round(size * dpr);
      };
      resize();
      const ro = new ResizeObserver(resize);
      ro.observe(canvas);

      const io = new IntersectionObserver(
        ([entry]) => (visible = entry.isIntersecting),
        {
          rootMargin: "100px",
        },
      );
      io.observe(wrap);

      // Intro: globe scales/fades up, bubbles pop in staggered
      gsap.fromTo(
        state,
        { intro: 0 },
        { intro: 1, duration: reduceMotion ? 0 : 1.8, ease: "expo.out" },
      );

      const draw = (time: number) => {
        if (!visible || !size) return;
        const R = size * 0.38 * (0.86 + 0.14 * state.intro);
        const cx = size / 2;
        const cy = size / 2;

        if (!dragging) {
          state.rot += state.velocity + dragVelocity;
          dragVelocity *= 0.94;
        }

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, size, size);
        ctx.globalAlpha = state.intro;

        // Atmosphere glow
        const glow = ctx.createRadialGradient(
          cx,
          cy,
          R * 0.75,
          cx,
          cy,
          R * 1.28,
        );
        glow.addColorStop(0, "rgba(140, 76, 252, 0.18)");
        glow.addColorStop(1, "rgba(140, 76, 252, 0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(cx, cy, R * 1.28, 0, Math.PI * 2);
        ctx.fill();

        // Sphere body
        const body = ctx.createRadialGradient(
          cx - R * 0.35,
          cy - R * 0.4,
          R * 0.1,
          cx,
          cy,
          R,
        );
        body.addColorStop(0, "#ffffff");
        body.addColorStop(0.7, "#f7f3ff");
        body.addColorStop(1, "#e9e0ff");
        ctx.fillStyle = body;
        ctx.beginPath();
        ctx.arc(cx, cy, R, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "rgba(120, 48, 240, 0.18)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Dot field: oceans faint, continents bold
        const dot = Math.max(1.1, size / 380);
        for (let i = 0; i < ocean.length; i++) {
          const [x, y, z] = rotate(ocean[i], state.rot);
          if (z < 0) continue;
          ctx.fillStyle = `rgba(120, 60, 230, ${0.08 + z * 0.14})`;
          ctx.fillRect(cx + x * R - dot / 2, cy - y * R - dot / 2, dot, dot);
        }
        for (let i = 0; i < land.length; i++) {
          const [x, y, z] = rotate(land[i], state.rot);
          if (z < 0) continue;
          const s = dot * (0.75 + z * 0.65);
          ctx.fillStyle = `rgba(104, 36, 232, ${0.22 + z * 0.68})`;
          ctx.beginPath();
          ctx.arc(cx + x * R, cy - y * R, s, 0, Math.PI * 2);
          ctx.fill();
        }

        // Conversation arcs with travelling pulses
        const t = time * 0.00022;
        ARCS.forEach(([ia, ib], k) => {
          const a = cityVecs[ia];
          const b = cityVecs[ib];
          const steps = 48;
          const pts: { x: number; y: number; z: number }[] = [];
          for (let j = 0; j <= steps; j++) {
            const u = j / steps;
            const v = slerp(a, b, u);
            const lift = 1 + Math.sin(Math.PI * u) * 0.22;
            const [x, y, z] = rotate(
              [v[0] * lift, v[1] * lift, v[2] * lift],
              state.rot,
            );
            pts.push({ x: cx + x * R, y: cy - y * R, z });
          }
          ctx.lineWidth = 1.4;
          for (let j = 1; j < pts.length; j++) {
            const p0 = pts[j - 1];
            const p1 = pts[j];
            if (p0.z < 0 && p1.z < 0) continue;
            ctx.strokeStyle = `rgba(150, 70, 250, ${0.12 + Math.max(0, p1.z) * 0.35})`;
            ctx.beginPath();
            ctx.moveTo(p0.x, p0.y);
            ctx.lineTo(p1.x, p1.y);
            ctx.stroke();
          }
          const head = (t + k * 0.13) % 1;
          const idx = Math.floor(head * steps);
          const p = pts[idx];
          if (p && p.z > 0) {
            const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 7);
            g.addColorStop(0, "rgba(255,255,255,1)");
            g.addColorStop(0.35, "rgba(176, 76, 246, 0.9)");
            g.addColorStop(1, "rgba(176, 76, 246, 0)");
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 7, 0, Math.PI * 2);
            ctx.fill();
          }
        });

        // City pins + HTML chat bubbles anchored to them
        const pulse = (Math.sin(time * 0.004) + 1) / 2;
        CITIES.forEach((city, i) => {
          const [x, y, z] = rotate(cityVecs[i], state.rot);
          const px = cx + x * R;
          const py = cy - y * R;
          if (z > 0) {
            ctx.fillStyle = `rgba(122, 47, 247, ${0.18 * (1 - pulse) * z})`;
            ctx.beginPath();
            ctx.arc(px, py, 5 + pulse * 9, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#7a2ff7";
            ctx.beginPath();
            ctx.arc(px, py, 3.2, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = "#fff";
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }

          const el = bubbleRefs.current[i];
          if (el) {
            // Fade bubbles near the limb; hide behind the globe
            const vis =
              Math.min(1, Math.max(0, (z - 0.22) / 0.25)) * state.intro;
            el.style.opacity = vis.toFixed(3);
            const shiftX = city.left ? "-88%" : "-12%";
            el.style.transform = `translate3d(${px}px, ${py}px, 0) translate(${shiftX}, -100%) translateY(-10px) scale(${(0.85 + vis * 0.15).toFixed(3)})`;
            el.style.zIndex = String(Math.round(z * 100));
          }
        });
        ctx.globalAlpha = 1;
      };

      const tick = () => draw(performance.now());
      gsap.ticker.add(tick);

      // Drag to spin
      const onDown = (e: PointerEvent) => {
        dragging = true;
        lastX = e.clientX;
        dragVelocity = 0;
        canvas.setPointerCapture(e.pointerId);
      };
      const onMove = (e: PointerEvent) => {
        if (!dragging) return;
        const dx = e.clientX - lastX;
        lastX = e.clientX;
        const delta = (dx / Math.max(size, 1)) * 3;
        state.rot += delta;
        dragVelocity = delta;
      };
      const onUp = () => (dragging = false);
      canvas.addEventListener("pointerdown", onDown);
      canvas.addEventListener("pointermove", onMove);
      canvas.addEventListener("pointerup", onUp);
      canvas.addEventListener("pointercancel", onUp);

      // Orbit rings with counter-rotating language chips
      if (!reduceMotion) {
        gsap.utils
          .toArray<HTMLElement>("[data-orbit]", wrap)
          .forEach((ring, i) => {
            const dir = i % 2 === 0 ? 1 : -1;
            const dur = 38 + i * 14;
            gsap.to(ring, {
              rotate: 360 * dir,
              duration: dur,
              repeat: -1,
              ease: "none",
            });
            gsap.to(ring.querySelectorAll("[data-orbit-chip]"), {
              rotate: -360 * dir,
              duration: dur,
              repeat: -1,
              ease: "none",
            });
          });
      }

      return () => {
        gsap.ticker.remove(tick);
        ro.disconnect();
        io.disconnect();
        canvas.removeEventListener("pointerdown", onDown);
        canvas.removeEventListener("pointermove", onMove);
        canvas.removeEventListener("pointerup", onUp);
        canvas.removeEventListener("pointercancel", onUp);
      };
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      className={cn("relative aspect-square w-full select-none", className)}
    >
      {/* Orbit rings */}
      {[0, 1].map((ring) => (
        <div
          key={ring}
          data-orbit
          aria-hidden="true"
          className="pointer-events-none absolute hidden rounded-full border border-dashed border-primary-300/50 sm:block"
          style={{ inset: ring === 0 ? "3%" : "-6%" }}
        >
          {ORBIT_CHIPS.filter((c) => c.ring === ring).map((chip) => {
            const rad = (chip.angle * Math.PI) / 180;
            return (
              <div
                key={chip.label}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${50 + 50 * Math.cos(rad)}%`,
                  top: `${50 + 50 * Math.sin(rad)}%`,
                }}
              >
                <div
                  data-orbit-chip
                  className="whitespace-nowrap rounded-full border border-white/80 bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#2a2148] shadow-[0_8px_24px_-10px_rgb(76_29_149/0.45)] backdrop-blur"
                >
                  {chip.label}
                </div>
              </div>
            );
          })}
        </div>
      ))}

      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full cursor-grab touch-pan-y active:cursor-grabbing"
        role="img"
        aria-label="A rotating globe showing learners and tutors chatting in different languages around the world"
      />

      {/* Chat bubbles pinned to cities */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {CITIES.map((city, i) =>
          city.pinOnly ? null : (
            <div
              key={city.name}
              ref={(el) => {
                bubbleRefs.current[i] = el;
              }}
              className="absolute left-0 top-0 origin-bottom-left opacity-0 will-change-transform"
            >
              <div
                className={`flex items-center gap-1.5 whitespace-nowrap rounded-2xl ${city.left ? "rounded-br-sm" : "rounded-bl-sm"} border border-white bg-white/95 py-1.5 pl-1.5 pr-3 text-[11px] font-medium text-[#231b3d] shadow-[0_10px_30px_-12px_rgb(76_29_149/0.55)] sm:text-xs`}
              >
                <span className="bg-brand-gradient rounded-full px-1.5 py-0.5 text-[9px] font-bold tracking-wide text-white">
                  {city.lang}
                </span>
                <span dir="auto">{city.text}</span>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
