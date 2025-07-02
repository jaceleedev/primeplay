import { ReactNode } from "react";

export interface PgServiceSectionData {
  id: number;
  imageSrc: string;
  firstLine: ReactNode;
  secondLine: ReactNode;
}

export const pgServiceSections: PgServiceSectionData[] = [
  {
    id: 1,
    imageSrc: "/images/pg-service-background-section-1.webp",
    firstLine: <>결제, 관리, 정산을</>,
    secondLine: <>웹과 모바일에서 통합 관리합니다.</>,
  },
  {
    id: 2,
    imageSrc: "/images/pg-service-background-section-2.webp",
    firstLine: (
      <>
        신용카드, 계좌이체, <br className="min-[450px]:hidden block" />{" "}
        가상계좌, 현금영수증을
      </>
    ),
    secondLine: (
      <>
        웹, 앱, 결제 기기에 <br className="min-[450px]:hidden block" />{" "}
        최적화하여 제공합니다.
      </>
    ),
  },
  {
    id: 3,
    imageSrc: "/images/pg-service-background-section-3.webp",
    firstLine: <>온·오프라인 통합 결제 서비스를</>,
    secondLine: <>고객 맞춤형으로 제공합니다.</>,
  },
  {
    id: 4,
    imageSrc: "/images/pg-service-background-section-4.webp",
    firstLine: <>PC 웹과 모바일 웹 연동 가이드로</>,
    secondLine: <>손쉬운 결제 연동이 가능합니다.</>,
  },
];
