import { ProductCardProps } from "@/components/ui/product-card";
import {
  PGPaymentIcon,
  ViralMarketingIcon,
  WebAppDevelopmentIcon,
  SNSPlayIcon,
  CSIPlayIcon,
  TYPlayIcon,
} from "@/components/icons/product-icons";

export const productCards: ProductCardProps[] = [
  {
    icon: <PGPaymentIcon />,
    title: "PG 결제 대행",
    description: (
      <>
        결제대행사 (PG)사를 통하여 <br /> 빠른 정산과 안정적인 서비스를 <br />
        제공합니다.
      </>
    ),
    href: "/pg-service",
    isExternal: false,
    gradientColors: { from: "#C60000", to: "#FF6D00" },
  },
  {
    icon: <ViralMarketingIcon />,
    title: "바이럴 마케팅",
    description: (
      <>
        실사용 경험을 토대로 한 정보 공유로
        <br /> 높은 신뢰성을 구축합니다.
      </>
    ),
    href: "/viral-marketing",
    isExternal: false,
    gradientColors: { from: "#3300ED", to: "#00FF62" },
  },
  {
    icon: <WebAppDevelopmentIcon />,
    title: "Web/App 개발",
    description: (
      <>
        최신 기술과 노하우를 바탕으로 <br /> 고품질의 서비스를 제공합니다.
      </>
    ),
    href: "/web-app-dev",
    isExternal: false,
    gradientColors: { from: "#6C00AA", to: "#FF2684" },
  },
  {
    icon: <SNSPlayIcon />,
    title: "SNS PLAY",
    description: (
      <>
        SNS에서 적용 가능한 <br /> 마케팅 전용 프로그램을 제공합니다.
      </>
    ),
    href: "/",
    isExternal: false,
    gradientColors: { from: "#FF6D00", to: "#C60000" },
  },
  {
    icon: <CSIPlayIcon />,
    title: "CSI PLAY",
    description: (
      <>
        투자자들이 주식, 코인 정보를 <br /> 공유하고 소통하는 커뮤니티 사이트
      </>
    ),
    href: "https://csi-play.com",
    isExternal: true,
    gradientColors: { from: "#00FF62", to: "#3300ED" },
  },
  {
    icon: <TYPlayIcon />,
    title: "TY PLAY",
    description: (
      <>
        사업자 뿐 아니라 개인도 사용 가능한 <br /> 종합 결제 PG 솔루션
      </>
    ),
    href: "https://ty-play.com",
    isExternal: true,
    gradientColors: { from: "#FF2684", to: "#6C00AA" },
  },
];
