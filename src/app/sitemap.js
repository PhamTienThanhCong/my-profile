import { APP_URL } from "@/constants/AppConfig";

export default function sitemap() {
  return [
    {
      url: APP_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
