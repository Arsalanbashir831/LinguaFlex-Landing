"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/common/logo";
import { APP_ROUTES } from "@/constants/routes";

const navigation = [
  { name: "Home", href: APP_ROUTES.HOME },
  { name: "Features", href: APP_ROUTES.FEATURES },
  { name: "Consultants", href: APP_ROUTES.CONSULTANTS },
];

export function Navigation() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === APP_ROUTES.HOME) {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary-100/60 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
              <Logo />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-1 text-sm font-medium transition-colors rounded-full overflow-hidden relative ${
                    active
                      ? "text-primary-700 bg-primary-50 font-semibold"
                      : "text-gray-600 hover:text-primary-700 focus:text-primary-700"
                  }`}
                >
                  {item.name}
                  {active && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-primary-500 rounded-full"></div>
                  )}
                </Link>
              );
            })}
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link href={APP_ROUTES.SIGN_IN}>
              <Button variant="ghost" className="text-primary-700 hover:bg-primary-50">
                Sign In
              </Button>
            </Link>
            <Link href={APP_ROUTES.CONSULTANT_CTA} className="hidden lg:block">
              <Button variant="outline" className="border-primary-200 text-primary-700 hover:bg-primary-50">
                Join as Consultant
              </Button>
            </Link>
            <Link href={APP_ROUTES.STUDENT_CTA}>
              <Button className="bg-primary-600 hover:bg-primary-700 text-white">
                I Want to Learn
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
