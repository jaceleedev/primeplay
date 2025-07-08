import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

type PageKey =
  | "home"
  | "viralMarketing"
  | "webAppDev"
  | "pgService"
  | "csiPlay"
  | "faq"
  | "support";

interface MetadataConfig {
  title: string;
  description: string;
  keywords?: string;
  openGraph?: {
    images?: string[];
  };
}

export async function generatePageMetadata(
  locale: string,
  pageKey: PageKey,
  customConfig?: Partial<MetadataConfig>
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "metadata" });

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://primeplay.kr";

  // 공통 이미지 사용 (2개 사이즈)
  const ogImageLarge = `${baseUrl}/images/og-image-1200x630.jpg`; // 1200x630
  const ogImageSquare = `${baseUrl}/images/og-image-1200x1200.jpg`; // 1200x1200

  // URL 구조: 한국어는 기본 경로, 다른 언어는 /언어코드
  const getLocalizedUrl = (targetLocale: string, path: string = "") => {
    if (targetLocale === "ko") {
      return `${baseUrl}${path}`;
    }
    return `${baseUrl}/${targetLocale}${path}`;
  };

  // 현재 페이지 URL 생성
  const getCurrentPageUrl = () => {
    let path = "";
    switch (pageKey) {
      case "home":
        path = "";
        break;
      case "viralMarketing":
        path = "/viral-marketing";
        break;
      case "webAppDev":
        path = "/web-app-dev";
        break;
      case "pgService":
        path = "/pg-service";
        break;
      case "csiPlay":
        path = "/csi-play";
        break;
      case "faq":
        path = "/faq";
        break;
      case "support":
        path = "/support";
        break;
    }
    return getLocalizedUrl(locale, path);
  };

  // alternates languages 생성 함수
  const getAlternateLanguages = () => {
    const getPagePath = (key: PageKey) => {
      switch (key) {
        case "home":
          return "";
        case "viralMarketing":
          return "/viral-marketing";
        case "webAppDev":
          return "/web-app-dev";
        case "pgService":
          return "/pg-service";
        case "csiPlay":
          return "/csi-play";
        case "faq":
          return "/faq";
        case "support":
          return "/support";
        default:
          return "";
      }
    };

    const pagePath = getPagePath(pageKey);

    return {
      ko: getLocalizedUrl("ko", pagePath),
      en: getLocalizedUrl("en", pagePath),
      ja: getLocalizedUrl("ja", pagePath),
      zh: getLocalizedUrl("zh", pagePath),
    };
  };

  const metadata: Metadata = {
    title: customConfig?.title || t(`pages.${pageKey}.title`),
    description: customConfig?.description || t(`pages.${pageKey}.description`),
    keywords: customConfig?.keywords || t("default.keywords"),
    openGraph: {
      title: customConfig?.title || t(`pages.${pageKey}.title`),
      description:
        customConfig?.description || t(`pages.${pageKey}.description`),
      url: getCurrentPageUrl(),
      siteName: "Prime Play",
      images: [
        {
          url: ogImageLarge,
          width: 1200,
          height: 630,
          alt: t(`pages.${pageKey}.title`),
        },
        {
          url: ogImageSquare,
          width: 1200,
          height: 1200,
          alt: t(`pages.${pageKey}.title`),
        },
      ],
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: customConfig?.title || t(`pages.${pageKey}.title`),
      description:
        customConfig?.description || t(`pages.${pageKey}.description`),
      images: [ogImageLarge],
    },
    alternates: {
      canonical: getCurrentPageUrl(),
      languages: getAlternateLanguages(),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };

  return metadata;
}
