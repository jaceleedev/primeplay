"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

// 로고 경로는 정적으로 유지
const serviceTypeLogos = ["/logos/sk-play-logo.svg", "/logos/ty-play-logo.svg"];

const PgServiceTypesSection = () => {
  const t = useTranslations("PGServicePage.TypesSection");

  return (
    <section className="w-full py-20 sm:py-24 md:py-28 lg:py-36 xl:py-40 px-2 sm:px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* 1x2 그리드 레이아웃 - 모바일에서도 2열 유지 */}
        <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-8 lg:gap-12 xl:gap-16 mb-16 sm:mb-20 md:mb-24 lg:mb-28">
          {serviceTypeLogos.map((logoPath, index) => {
            const serviceType = t.raw(`types.${index}`);

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 px-1 sm:px-4 md:px-6 lg:px-8"
              >
                {/* 제목 */}
                <h3 className="font-paperlogy font-semibold text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-tight">
                  {serviceType.title}
                </h3>

                {/* 로고 */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 flex-shrink-0">
                  <Image
                    src={logoPath}
                    alt={`${serviceType.title} 로고`}
                    width={112}
                    height={112}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* 특징 텍스트 2줄 */}
                <div className="space-y-1 sm:space-y-2 md:space-y-3">
                  {serviceType.features.map(
                    (feature: string, featureIndex: number) => (
                      <p
                        key={featureIndex}
                        className="font-paperlogy text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed break-keep"
                      >
                        {feature}
                      </p>
                    )
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* 하단 메인 텍스트 */}
        <div className="text-center">
          <h2 className="font-paperlogy font-semibold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
            {t("title")}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default PgServiceTypesSection;
