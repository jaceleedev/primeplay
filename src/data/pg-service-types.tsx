// data/pg-service-types.ts
export interface PgServiceTypeItem {
  id: number;
  title: string;
  logoPath: string;
  features: [string, string]; // 정확히 2개의 문장
}

export const pgServiceTypes: PgServiceTypeItem[] = [
  {
    id: 1,
    title: "국내 결제 대행사",
    logoPath: "/logos/sk-play-logo.svg",
    features: ["선정산 시스템 지원", "포스, 단말기, 수기 결제 지원"],
  },
  {
    id: 2,
    title: "해외 결제 대행사",
    logoPath: "/logos/ty-play-logo.svg",
    features: ["api 연동 간편 지원", "해외 결제 단말기 지원"],
  },
];
