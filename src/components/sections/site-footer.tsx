import Link from "next/link";
import { Logo } from "@/components/common/logo";
import { APP_ROUTES } from "@/constants/routes";

const footerLinks = {
  Product: [
    { name: "Features", href: "/features" },
    { name: "Consultants", href: "/consultants" },
    { name: "Start Learning", href: APP_ROUTES.STUDENT_CTA },
    { name: "Become a Consultant", href: APP_ROUTES.CONSULTANT_CTA },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ],
  Support: [
    { name: "Help Center", href: "/help" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-black/[0.06] bg-white">
      <div className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="col-span-2 space-y-4 md:col-span-1">
            <Logo size="sm" />
            <p className="max-w-xs text-sm leading-relaxed text-[#6d6787]">
              Learn, teach and earn with voice AI. Your AI-powered language tutor and a global marketplace for
              teachers and consultants.
            </p>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-sm font-semibold text-ink">{group}</h3>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-[#6d6787] transition-colors hover:text-primary-700">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-black/[0.06] py-6 text-sm text-[#8a84a3] sm:flex-row">
          <p>© {new Date().getFullYear()} ParlezHub. All rights reserved.</p>
          <p>Made for curious minds everywhere 🌍</p>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="pointer-events-none -mb-[0.22em] select-none text-center text-[22vw] font-semibold leading-none tracking-[-0.06em] text-transparent md:text-[15vw]"
        style={{
          backgroundImage: "linear-gradient(180deg, rgb(137 76 252 / 0.14), rgb(137 76 252 / 0))",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
        }}
      >
        ParlezHub
      </p>
    </footer>
  );
}
