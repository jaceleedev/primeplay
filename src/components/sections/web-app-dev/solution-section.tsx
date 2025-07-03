"use client";

import AutoSlider from "@/components/ui/auto-slider";
import SolutionSlide from "@/components/sections/web-app-dev/solution-slide";
import { useTranslations } from "next-intl";

// 각 슬라이드의 이미지 경로는 정적으로 유지합니다.
const slideImages = [
  "/images/shopping-mall-background.webp",
  "/images/payment-module-background.webp",
  "/images/my-office-background.webp",
  "/images/coin-wallet-background.webp",
];

const SolutionSection = () => {
  const t = useTranslations("WebAppDevPage.SolutionSection");

  // JSON 파일에서 슬라이드 데이터를 동적으로 생성합니다.
  const slideData = t.raw("slides" as any).map((slide: any, index: number) => ({
    title: slide.title,
    listItems: slide.listItems,
    imageSrc: slideImages[index], // 정적 이미지 경로 매핑
  }));

  return (
    <section>
      <AutoSlider>
        {slideData.map((slide: any, index: number) => (
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
