export interface PgServiceAdvantageItem {
  id: number;
  text: string;
}

export const pgServiceAdvantages: PgServiceAdvantageItem[] = [
  {
    id: 1,
    text: "5~9일 걸리던 정산 금액을 매출 발생 다음날에 바로 입금받을 수 있습니다.",
  },
  {
    id: 2,
    text: "매출 발생 후 익일 정산으로 빠르고 정확한 자금 관리가 가능합니다.",
  },
  {
    id: 3,
    text: "현금 유동성 증가로 원활한 가맹점 운영을 지원합니다.",
  },
  {
    id: 4,
    text: "제휴 금융기관을 통한 업계 최저 수수료율을 제공합니다.",
  },
];
