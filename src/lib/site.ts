const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const SITE_URL = (configuredSiteUrl || "https://www.parlezhub.com").replace(/\/+$/, "");
export const SITE_NAME = "Parlezhub";

export function absoluteUrl(path: string) {
  return new URL(path, `${SITE_URL}/`).toString();
}

export function plainText(value: string, maxLength = 160) {
  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim().slice(0, maxLength);
}
