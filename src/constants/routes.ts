export const APP_ROUTES = {
    HOME: "/",
    FEATURES: "/features",
    CONSULTANTS: "/consultants",
    SIGN_IN: "/sign-in",
    SIGN_UP: "/sign-up"
}

export const API_ROUTES = {
    BLOGS: "/blogs/view/",
    BLOG_DETAIL: (slug: string) => `/blogs/view/${slug}`,
    CONSULTANTS: "/consultants",
}