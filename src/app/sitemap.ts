import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://primeplay.kr";
  const locales = ["ko", "en", "ja", "zh"];
  const pages = [
    { path: "", priority: 1.0, changeFreq: "monthly" as const },
    { path: "/viral-marketing", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/web-app-dev", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/pg-service", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/csi-play", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/faq", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/support", priority: 0.8, changeFreq: "monthly" as const },
  ];

  const urls: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    pages.forEach((page) => {
      const url =
        locale === "ko"
          ? `${baseUrl}${page.path}`
          : `${baseUrl}/${locale}${page.path}`;

      urls.push({
        url,
        lastModified: new Date(),
        changeFrequency: page.changeFreq,
        priority: page.priority,
        alternates: {
          languages: {
            ko: `${baseUrl}${page.path}`,
            en: `${baseUrl}/en${page.path}`,
            ja: `${baseUrl}/ja${page.path}`,
            zh: `${baseUrl}/zh${page.path}`,
          },
        },
      });
    });
  });

  return urls;
}
