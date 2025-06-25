"use client";

import { serviceCards } from "@/data/service-cards";
import ServiceCard from "@/components/ui/service-card";

const ServicesSection = () => {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* 섹션 타이틀 */}
        <h2
          className="
            font-paperlogy font-bold text-black text-center
            text-3xl sm:text-4xl lg:text-5xl
            mb-10 sm:mb-12 md:mb-14 lg:mb-16
          "
        >
          OUR SERVICES
        </h2>

        {/* 섹션 부제 */}
        <p
          className="
            font-paperlogy font-medium text-black text-center
            text-2xl sm:text-3xl md:text-4xl lg:text-[48px]
            mb-16 sm:mb-20 md:mb-24 lg:mb-28 xl:mb-32"
        >
          {"온라인 마케팅 서비스의 "}{" "}
          <br className="max-[520px]:block hidden" />
          다양한 분야를 지원합니다
        </p>

        {/* 서비스 카드 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-32">
          {serviceCards.map((card, index) => (
            <ServiceCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
