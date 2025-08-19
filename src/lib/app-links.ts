export const appBaseUrl = process.env.NEXT_PUBLIC_LINGUA_APP_URL || "";

export const appLink = (path: string) => `${appBaseUrl}${path}`;

export const appLinks = {
  signIn: appLink("/auth/sign-in"),
  language: appLink("/language"),
  signup: appLink("/auth/signup"),
};


