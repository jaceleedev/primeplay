import type { Metadata } from "next";
import { Inter, Gothic_A1 } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "../globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ScrollToTopButton from "@/components/ui/scroll-to-top-button";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

// 폰트 설정
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const gothicA1 = Gothic_A1({
  subsets: ["latin"],
  variable: "--font-gothic-a1",
  display: "swap",
  preload: true,
  weight: ["700", "800", "900"],
});

const pretendard = localFont({
  src: "../../../public/fonts/Pretendard/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
  weight: "45 920",
});

const paperlogy = localFont({
  src: [
    {
      path: "../../../public/fonts/Paperlogy/Paperlogy-1Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Paperlogy/Paperlogy-2ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Paperlogy/Paperlogy-3Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Paperlogy/Paperlogy-4Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Paperlogy/Paperlogy-5Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Paperlogy/Paperlogy-6SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Paperlogy/Paperlogy-7Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Paperlogy/Paperlogy-8ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Paperlogy/Paperlogy-9Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-paperlogy",
  display: "swap",
  preload: true,
});

const sCoreDream = localFont({
  src: [
    {
      path: "../../../public/fonts/S-Core_Dream/SCDream1.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../../public/fonts/S-Core_Dream/SCDream2.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../../public/fonts/S-Core_Dream/SCDream3.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/S-Core_Dream/SCDream4.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/S-Core_Dream/SCDream5.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/S-Core_Dream/SCDream6.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../public/fonts/S-Core_Dream/SCDream7.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/S-Core_Dream/SCDream8.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../../public/fonts/S-Core_Dream/SCDream9.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-s-core-dream",
  display: "swap",
  preload: true,
});

const cafe24OhsquareAir = localFont({
  src: [
    {
      path: "../../../public/fonts/Cafe24OhsquareAir/Cafe24OhsquareAir-v2.0.woff2",
      weight: "normal",
      style: "normal",
    },
  ],
  variable: "--font-cafe24-ohsquare-air",
  display: "swap",
  preload: true,
});

const giants = localFont({
  src: [
    {
      path: "../../../public/fonts/Giants/Giants-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Giants/Giants-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-giants",
  display: "swap",
  preload: true,
});

// 메타데이터 생성
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://primeplay.kr";

  // PNG 이미지 사용
  const ogImageLarge = `${baseUrl}/images/og-image-1200x630.png`;
  const ogImageSquare = `${baseUrl}/images/og-image-1200x1200.png`;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t("default.title"),
      template: "%s | Prime Play",
    },
    description: t("default.description"),
    keywords: t("default.keywords"),

    // 기본 정보
    authors: [{ name: "Prime Play" }],
    creator: "Prime Play",
    publisher: "Prime Play",

    // Open Graph
    openGraph: {
      type: "website",
      locale: locale,
      url: locale === "ko" ? baseUrl : `${baseUrl}/${locale}`,
      siteName: "Prime Play",
      title: t("default.title"),
      description: t("default.description"),
      images: [
        {
          url: ogImageLarge,
          width: 1200,
          height: 630,
          alt: t("default.title"),
        },
        {
          url: ogImageSquare,
          width: 1200,
          height: 1200,
          alt: t("default.title"),
        },
      ],
    },

    // Twitter
    twitter: {
      card: "summary_large_image",
      title: t("default.title"),
      description: t("default.description"),
      images: [ogImageLarge],
    },

    // 다국어 설정
    alternates: {
      canonical: locale === "ko" ? baseUrl : `${baseUrl}/${locale}`,
      languages: {
        ko: baseUrl,
        en: `${baseUrl}/en`,
        ja: `${baseUrl}/ja`,
        zh: `${baseUrl}/zh`,
      },
    },

    // 크롤링 설정
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

    // 추가 설정
    category: "technology",
    referrer: "origin-when-cross-origin",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
}

// 레이아웃 컴포넌트
export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&autoload=false`}
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${inter.variable} ${gothicA1.variable} ${pretendard.variable} ${paperlogy.variable} ${sCoreDream.variable} ${cafe24OhsquareAir.variable} ${giants.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <Navbar />
          {children}
          <Footer />
          <ScrollToTopButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
