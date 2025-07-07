"use client";

import { useTranslations } from "next-intl";

const PgServiceJourneySection = () => {
  const t = useTranslations("PGServicePage.JourneySection");

  // 메인 타이틀 처리 (줄바꿈 지원)
  const titleLine1 = t("titleLine1");
  const titleLine2 = t("titleLine2");

  // 설명 텍스트 처리 (줄바꿈 지원)
  const descriptionLine1 = t("descriptionLine1");
  const descriptionLine2 = t("descriptionLine2");

  return (
    <section className="relative w-full min-h-[400px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] xl:min-h-[900px] overflow-hidden bg-white">
      {/* 모바일 배경 이미지 */}
      <div
        className="absolute inset-0 block md:hidden"
        style={{
          backgroundImage: "url('/images/growth-curve.webp')",
          backgroundPosition: "90% 90%",
          backgroundSize: "80%",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* 데스크톱 배경 이미지 */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: "url('/images/growth-curve.webp')",
          backgroundPosition: "95% 85%", // 오른쪽에 약간의 간격
          backgroundSize: "min(80%, 1024px)", // 최대 1024px로 제한
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* 텍스트 컨테이너 - 왼쪽 간격 증가 */}
      <div className="relative z-10 h-full flex items-start justify-start">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-8 sm:pt-12 md:pt-16 lg:pt-24 xl:pt-40">
          <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl">
            <h2 className="font-paperlogy font-semibold text-black mb-4 sm:mb-6 md:mb-10 lg:mb-14 xl:mb-18">
              <span
                className="block leading-tight"
                style={{ fontSize: "clamp(1.5rem, 6vw, 4rem)" }}
              >
                {titleLine1}
              </span>
              <span
                className="block leading-tight mt-1 sm:mt-2 md:mt-3 lg:mt-4"
                style={{ fontSize: "clamp(1.5rem, 6vw, 4rem)" }}
              >
                {titleLine2}
              </span>
            </h2>

            <div className="font-paperlogy font-normal text-black leading-relaxed">
              <span
                className="block"
                style={{ fontSize: "clamp(1.125rem, 4vw, 2.5rem)" }}
              >
                {descriptionLine1}
              </span>
              <span
                className="block mt-1 sm:mt-2"
                style={{ fontSize: "clamp(1.125rem, 4vw, 2.5rem)" }}
              >
                {descriptionLine2}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PgServiceJourneySection;
