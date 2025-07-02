import { ReactNode } from "react";

export interface PgServiceFeature {
  iconSrc: string;
  iconAlt: string;
  title: ReactNode;
}

export const pgServiceFeatures: PgServiceFeature[] = [
  {
    iconSrc: "/icons/safe-payment.svg",
    iconAlt: "안전하고 빠른 결제 및 정산",
    title: (
      <>
        안전하고 빠른
        <br className="max-[420px]:block hidden" />
        결제 및 정산
      </>
    ),
  },
  {
    iconSrc: "/icons/easy-integration.svg",
    iconAlt: "간단한 결제 연동",
    title: "간단한 결제 연동",
  },
  {
    iconSrc: "/icons/payment-methods.svg",
    iconAlt: "다양한 결제 수단 및 부가 서비스",
    title: (
      <>
        다양한 결제 수단 및<br className="max-[420px]:block hidden" /> 부가
        서비스
      </>
    ),
  },
  {
    iconSrc: "/icons/unified-payment.svg",
    iconAlt: "온·오프라인 통합 결제",
    title: "온·오프라인 통합 결제",
  },
];
