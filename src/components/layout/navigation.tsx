"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/common/logo";
import { APP_ROUTES } from "@/constants/routes";
import {
	SidebarProvider,
	Sidebar,
	SidebarTrigger,
	useSidebar,
} from "@/components/ui/sidebar";

const navigation = [
	{ name: "Home", href: APP_ROUTES.HOME },
	{ name: "Features", href: APP_ROUTES.FEATURES },
	{ name: "Consultants", href: APP_ROUTES.CONSULTANTS },
	{ name: "Blogs", href: APP_ROUTES.BLOGS },
];

export function Navigation() {
	const pathname = usePathname();

	// Mobile menu child that closes the sidebar when a link is clicked.
	function MobileMenu() {
		const { setOpenMobile } = useSidebar();

		return (
			<div className="flex h-full w-full flex-col">
				<div className="flex items-center justify-between p-4 border-b">
					<div className="flex items-center">
						<Logo />
					</div>
					<button
						aria-label="Close menu"
						onClick={() => setOpenMobile(false)}
						className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:text-primary-700 hover:bg-primary-50">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2}
							stroke="currentColor"
							aria-hidden>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>

				<nav className="p-4 space-y-2">
					{navigation.map((item) => {
						const active = isActive(item.href);
						return (
							<Link
								key={item.name}
								href={item.href}
								onClick={() => setOpenMobile(false)}
								className={`block rounded-md px-3 py-2 text-base font-medium ${
									{
										true: "text-primary-700 bg-primary-50 font-semibold",
										false:
											"text-gray-600 hover:text-primary-700 focus:text-primary-700",
									}[String(active)]
								}`}>
								{item.name}
							</Link>
						);
					})}
				</nav>

				<div className="p-4 mt-auto border-t">
					<div className="flex flex-col space-y-2">
						<Link
							href={APP_ROUTES.SIGN_IN}
							onClick={() => setOpenMobile(false)}>
							<Button
								variant="ghost"
								className="w-full text-primary-700 hover:bg-primary-50">
								Sign In
							</Button>
						</Link>
						<Link
							href={APP_ROUTES.LANGUAGE}
							onClick={() => setOpenMobile(false)}>
							<Button className="w-full bg-primary-600 hover:bg-primary-700 text-white">
								Get Started
							</Button>
						</Link>
					</div>
				</div>
			</div>
		);
	}

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
									}`}>
									{item.name}
									{active && (
										<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-primary-500 rounded-full"></div>
									)}
								</Link>
							);
						})}
					</nav>

					{/* Mobile menu trigger (uses shadcn SidebarTrigger) */}
					<div className="flex items-center md:hidden">
						<SidebarTrigger className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:text-primary-700 hover:bg-primary-50" />
					</div>

					<div className="hidden md:flex items-center space-x-4">
						<Link href={APP_ROUTES.SIGN_IN}>
							<Button
								variant="ghost"
								className="text-primary-700 hover:bg-primary-50">
								Sign In
							</Button>
						</Link>
						<Link href={APP_ROUTES.LANGUAGE}>
							<Button className="bg-primary-600 hover:bg-primary-700 text-white">
								Get Started
							</Button>
						</Link>
					</div>
				</div>
			</div>

			{/* Mobile Sidebar (uses shadcn Sidebar -> renders a Sheet on mobile) */}
			<Sidebar side="right" className="md:hidden">
				<MobileMenu />
			</Sidebar>
		</header>
	);
}
