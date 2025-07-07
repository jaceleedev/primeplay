"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

// 아이콘 경로는 정적으로 유지
const featureIcons = [
  {
    iconSrc: "/icons/safe-payment.svg",
    iconAlt: "Safe and fast payment processing",
  },
  {
    iconSrc: "/icons/easy-integration.svg",
    iconAlt: "Simple payment integration",
  },
  {
    iconSrc: "/icons/payment-methods.svg",
    iconAlt: "Multiple payment methods and services",
  },
  {
    iconSrc: "/icons/unified-payment.svg",
    iconAlt: "Online and offline integrated payment",
  },
];

const PgServiceFeaturesSection = () => {
  const t = useTranslations("PGServicePage.FeaturesSection");

  return (
    <section className="w-full pt-20 sm:pt-24 md:pt-28 lg:pt-36 xl:pt-40 pb-24 sm:pb-28 md:pb-32 lg:pb-40 xl:pb-44 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* 메인 제목 */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="font-paperlogy font-semibold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
            {t.rich("title", {
              br: (chunks) => <br className="max-[400px]:block hidden" />,
            })}
          </h2>
        </div>

        {/* 서브 제목 */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24 lg:mb-28 xl:mb-32">
          <p className="font-paperlogy font-normal text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* 기능 그리드 */}
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 max-w-4xl mx-auto">
          {featureIcons.map((feature, index) => {
            const featureData = t.raw(`features.${index}`);

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {/* 아이콘 */}
                <div className="mb-4 sm:mb-5 md:mb-6">
                  <Image
                    src={feature.iconSrc}
                    alt={feature.iconAlt}
                    width={64}
                    height={64}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"
                  />
                </div>

                {/* 텍스트 */}
                <p className="font-paperlogy font-normal text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed whitespace-pre-line">
                  {featureData.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PgServiceFeaturesSection;
