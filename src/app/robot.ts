import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/", // API 경로 차단
          "/admin/", // 관리자 페이지 차단 (나중에 생기면)
          "/_next/", // Next.js 내부 파일
          "/private/", // 비공개 폴더 (나중에 생기면)
        ],
      },
      {
        userAgent: "GPTBot", // ChatGPT 봇 차단 (선택사항)
        disallow: "/",
      },
    ],
    sitemap: "https://primeplay.kr/sitemap.xml",
  };
}
