"use client";

import MetricCard, { MetricCardProps } from "@/components/ui/metric-card";

interface PlayToPSectionProps {
  cards: MetricCardProps[];
}

const PlayToPSection = ({ cards }: PlayToPSectionProps) => {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Play to P 메인 타이틀 */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="font-giants text-black text-center font-bold leading-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[86px]">
            Play to P
          </h1>
        </div>

        {/* 부제목 */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <h2 className="font-paperlogy text-black text-center font-medium leading-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px]">
            프라임 플레이의 핵심 지표
          </h2>
        </div>

        {/* 카드 그리드 */}
        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
          {cards.map((card, index) => (
            <div key={index} className="w-full flex justify-center">
              <MetricCard
                defaultText={card.defaultText}
                hoverText={card.hoverText}
                hoverColor={card.hoverColor}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlayToPSection;
