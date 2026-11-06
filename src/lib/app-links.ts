import { APP_ROUTES } from "@/constants/routes";

export const appBaseUrl = process.env.NEXT_PUBLIC_LINGUA_APP_URL || "";

export const appLink = (path: string) => `${appBaseUrl}${path}`;

export const appLinks = {
  signIn: APP_ROUTES.SIGN_IN,
  language: APP_ROUTES.STUDENT_CTA,
  signup: APP_ROUTES.CONSULTANT_CTA,
};


