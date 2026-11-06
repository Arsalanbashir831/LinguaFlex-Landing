export const appBaseUrl = process.env.NEXT_PUBLIC_LINGUA_APP_URL || "";

export const appLink = (path: string) => `${appBaseUrl}${path}`;
export const APP_ROUTES = {
    HOME: "/",
    FEATURES: "/features",
    CONSULTANTS: "/consultants",
    SIGN_IN: "https://app.parlezhub.com/parlezhub/auth",
    CONSULTANT_CTA: "https://app.parlezhub.com/parlezhub?role=consultant",
    STUDENT_CTA: "https://app.parlezhub.com/parlezhub?role=student",
}

export const API_ROUTES = {
    BLOGS: "/blogs/view/",
    BLOG_DETAIL: (slug: string) => `/blogs/view/${slug}/`,
    CONSULTANTS: "/accounts/teachers/",
}
