"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/common/logo";
import { APP_ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: APP_ROUTES.HOME },
  { name: "Features", href: APP_ROUTES.FEATURES },
  { name: "Consultants", href: APP_ROUTES.CONSULTANTS },
];

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const raf = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const isActive = (href: string) =>
    href === APP_ROUTES.HOME ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-3 sm:px-6">
      <div
        className={cn(
          "glass-capsule relative mx-auto flex h-[68px] max-w-6xl items-center justify-between rounded-full px-2.5 pl-5 transition-[box-shadow,background-color,transform] duration-500",
          (scrolled || open) && "glass-capsule--raised",
        )}
      >
        <Link href="/" aria-label="ParlezHub home" className="shrink-0">
          <Logo size="sm" />
        </Link>

        <nav
          aria-label="Primary"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-white/70 bg-white/35 p-1 shadow-[inset_0_1px_2px_rgb(76_29_149/0.08)] md:flex"
        >
          {navigation.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                  active
                    ? "bg-white text-primary-700 shadow-[0_1px_0_rgb(255_255_255)_inset,0_4px_14px_-6px_rgb(76_29_149/0.35)]"
                    : "text-[#4b4566] hover:bg-white/60 hover:text-primary-700",
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={APP_ROUTES.CONSULTANT_CTA}
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-[#4b4566] transition-colors hover:text-primary-700 lg:inline-flex"
          >
            Become a Consultant
          </Link>
          <Link
            href={APP_ROUTES.SIGN_IN}
            className="btn-brand group !hidden !h-11 !px-5 sm:!inline-flex"
          >
            Sign In
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/70 bg-white/50 text-[#140d2b] hover:bg-white md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="glass-capsule glass-capsule--raised relative mx-auto mt-2 max-w-6xl rounded-[28px] p-3 md:hidden"
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block rounded-2xl px-4 py-3 text-base font-medium",
                isActive(item.href) ? "bg-primary-50 text-primary-700" : "text-[#2a2440]",
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-2 grid grid-cols-2 gap-2">
            <Link href={APP_ROUTES.CONSULTANT_CTA} className="btn-ghost-light h-11 px-4">
              Teach & Earn
            </Link>
            <Link href={APP_ROUTES.SIGN_IN} className="btn-brand h-11 px-4">
              Sign In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
