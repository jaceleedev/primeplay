import type { Metadata } from "next";
import { Inter, Gothic_A1 } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

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

const nanumHuman = localFont({
  src: [
    {
      path: "../../public/fonts/NanumHuman/NanumHumanEL.woff",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/NanumHuman/NanumHumanLight.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/NanumHuman/NanumHumanRegular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/NanumHuman/NanumHumanBold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/NanumHuman/NanumHumanEB.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/NanumHuman/NanumHumanHeavy.woff",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-nanum-human",
  display: "swap",
  preload: true,
});

const nanumMyeongjoYetHangul = localFont({
  src: [
    {
      path: "../../public/fonts/NanumMyeongjoYetHangul/NanumMyeongjo-YetHangul.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-nanum-myeongjo-yet-hangul",
  display: "swap",
  preload: true,
});

const paperlogy = localFont({
  src: [
    {
      path: "../../public/fonts/Paperlogy/Paperlogy-1Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Paperlogy/Paperlogy-2ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Paperlogy/Paperlogy-3Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Paperlogy/Paperlogy-4Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Paperlogy/Paperlogy-5Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Paperlogy/Paperlogy-6SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Paperlogy/Paperlogy-7Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Paperlogy/Paperlogy-8ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Paperlogy/Paperlogy-9Black.ttf",
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
      path: "../../public/fonts/S-Core_Dream/SCDream1.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/S-Core_Dream/SCDream2.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/S-Core_Dream/SCDream3.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/S-Core_Dream/SCDream4.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/S-Core_Dream/SCDream5.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/S-Core_Dream/SCDream6.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/S-Core_Dream/SCDream7.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/S-Core_Dream/SCDream8.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/S-Core_Dream/SCDream9.otf",
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
      path: "../../public/fonts/Cafe24OhsquareAir/Cafe24OhsquareAir-v2.0.woff2",
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
      path: "../../public/fonts/Giants/Giants-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Giants/Giants-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-giants",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "프라임플레이 - Prime Play",
  description:
    "마케팅, 결제대행, web/app 기획부터 제작, 실행, 분석까지 책임집니다. 다양한 분야의 디테일을 모두 챙길 수 있는 종합 솔루션 대행사.",
  keywords: [
    "바이럴 마케팅",
    "퍼포먼스 마케팅",
    "SNS 마케팅",
    "디지털 마케팅",
    "콘텐츠 마케팅",
    "퍼포먼스 마케팅",
    "언론 홍보",
    "TY플레이",
    "SNS플레이",
    "결제대행사",
    "디지털 마케팅 에이전시",
    "프라임플레이",
    "웹 개발",
    "앱 개발",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&autoload=false`}
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${inter.variable} ${gothicA1.variable} ${nanumHuman.variable} ${nanumMyeongjoYetHangul.variable} ${paperlogy.variable} ${sCoreDream.variable} ${cafe24OhsquareAir.variable} ${giants.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
