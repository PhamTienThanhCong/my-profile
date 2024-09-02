import { APP_URL } from "@/constants/AppConfig";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/"
    },
    sitemap: `${APP_URL}/sitemap.xml`
  };
}
