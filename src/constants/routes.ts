export const appBaseUrl = process.env.NEXT_PUBLIC_LINGUA_APP_URL || "";

export const appLink = (path: string) => `${appBaseUrl}${path}`;
export const APP_ROUTES = {
	HOME: "/",
	FEATURES: "/features",
	CONSULTANTS: "/consultants",
	BLOGS: "/blogs",
	BLOG_DETAIL: (slug: string) => `/blogs/${slug}`,
	SIGN_IN: appLink("/auth/sign-in"),
	SIGN_UP: appLink("/auth/signup"),
	LANGUAGE: appLink("/language"),
};

export const API_ROUTES = {
	BLOGS: "/blogs/view/",
	BLOG_DETAIL: (slug: string) => `/blogs/view/${slug}/`,
	CONSULTANTS: "/accounts/teachers/",
};
