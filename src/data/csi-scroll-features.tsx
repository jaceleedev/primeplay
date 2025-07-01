export interface CsiFeatureGroup {
  id: number;
  title: string;
  description: string;
  screenImage: string;
}

export const csiFeatureGroups: CsiFeatureGroup[] = [
  {
    id: 1,
    title: "커뮤니티 중심의 정보 공유",
    description:
      "사용자들이 직접 참여하는 커뮤니티 게시판으로\n실시간 의견 교환과 정보 공유가 가능합니다.",
    screenImage: "/images/community-website-screen.webp",
  },
  {
    id: 2,
    title: "포인트 시스템 및 이벤트 운영",
    description:
      "룰렛 이벤트, 포인트 적립 시스템 등\n정보 뿐만 아니라 재미 요소를 갖추고 있습니다.",
    screenImage: "/images/points-website-screen.webp",
  },
  {
    id: 3,
    title: "다양한 투자 정보 제공",
    description:
      "주식, 암호화폐, 부동산 등 여러 분야의\n실시간 시세와 뉴스를 한 눈에 볼 수 있습니다.",
    screenImage: "/images/real-estate-website-screen.webp",
  },
  {
    id: 4,
    title: "코인 상장 정보 및 시세 제공",
    description:
      "업비트, 빗썸, 바이낸스 등 주요 거래소의\n상장 코인 정보를 통합적으로 제공합니다.",
    screenImage: "/images/coin-website-screen.webp",
  },
  {
    id: 5,
    title: "자체 개발 자동매매 프로그램",
    description:
      "2세대 듀얼 AI 자동매매 시스템을 구현하여\n1:1 담당자 매칭 및 사용법까지 제공합니다.",
    screenImage: "/images/csi-bot.webp",
  },
];
