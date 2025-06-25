import AutoSlider from "@/components/ui/auto-slider";
import SolutionSlide from "@/components/sections/web-app-dev/solution-slide";

const slideData = [
  {
    title: "쇼핑몰",
    listItems: [
      "임대 쇼핑몰이 아닌 독립형 쇼핑몰",
      "포인트로 결제 및 배송지 지원",
      "마이오피스 회원 연동 서비스 지원",
    ],
    imageSrc: "/images/shopping-mall-background.webp",
  },
  {
    title: "결제 모듈",
    listItems: [
      "가상 계좌를 발급하여 고객에게 1:1 지원",
      "PG사 연동 및 카드 연동 지원",
      "카드, 현금 입금 및 NFT 결제 지원",
      "결제 내역 등 필요 한 자료 제공",
    ],
    imageSrc: "/images/payment-module-background.webp",
  },
  {
    title: "마이 오피스",
    listItems: [
      "자동화 정산 프로그램 제작 지원",
      "회원계보도 및 산하 회원 검색 및 관리 서비스",
      "네트워크 방문 판매 정산 솔루션",
      "조건에 따른 쇼핑몰, NFT 사이트 지원",
    ],
    imageSrc: "/images/my-office-background.webp",
  },
  {
    title: "코인 월렛",
    listItems: [
      "NFT, 코인 생성, 대량 전송, 지갑 관리",
      "NFT 결제 사용 가능",
      "추가 수당 및 코인 수량 등 맞춤형 월렛 제작",
      "코인 수당 지급 시 대량 전송 기능 구현",
    ],
    imageSrc: "/images/coin-wallet-background.webp",
  },
];

const SolutionSection = () => {
  return (
    <section>
      <AutoSlider>
        {slideData.map((slide, index) => (
          <SolutionSlide
            key={index}
            title={slide.title}
            listItems={slide.listItems}
            imageSrc={slide.imageSrc}
          />
        ))}
      </AutoSlider>
    </section>
  );
};

export default SolutionSection;
