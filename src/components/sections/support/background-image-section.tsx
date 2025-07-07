"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import ScrollIndicator from "@/components/ui/scroll-indicator";
import "@/components/ui/animations.css";

interface BackgroundImageSectionProps {
  imageSrc: string;
  translationKey: string; // 번역 키를 받아서 해당 섹션의 텍스트를 가져옴
}

export default function BackgroundImageSection({
  imageSrc,
  translationKey,
}: BackgroundImageSectionProps) {
  const t = useTranslations(translationKey);
  const [isVisible, setIsVisible] = useState(false);
  const [subtextVisible, setSubtextVisible] = useState(false);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    timers.push(setTimeout(() => setIsVisible(true), 500));
    timers.push(setTimeout(() => setSubtextVisible(true), 1500));
    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  // 메인 타이틀 텍스트 처리 (줄바꿈 지원)
  const mainTitle = t("mainTitle");
  const titleLines = mainTitle.split("\n");

  // 서브텍스트 처리 (최대 3줄)
  const subTextLine1 = t("subTextLine1");
  const subTextLine2 = t("subTextLine2");
  const subTextLine3 = t("subTextLine3");

  return (
    <section
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-20 flex flex-col items-center justify-center h-full">
        {/* 메인 타이틀 - clamp 활용한 반응형 폰트 */}
        <h1
          className={`
            text-white text-center font-pretendard font-extrabold leading-tight
            mb-16 sm:mb-20 md:mb-28 lg:mb-36
            ${isVisible ? "fade-in-down" : "opacity-0"}
          `}
          style={
            {
              fontSize: "clamp(2rem, 8vw, 4.5rem)", // 32px ~ 72px
              "--fade-distance": "-60px",
              animationDuration: "1.5s",
            } as React.CSSProperties
          }
        >
          {titleLines.map((line, index) => (
            <span key={index} className="block">
              {line}
            </span>
          ))}
        </h1>

        {/* 서브텍스트 - clamp 활용한 반응형 폰트 */}
        <div
          className={`text-center ${
            subtextVisible ? "fade-in-down" : "opacity-0"
          }`}
          style={
            {
              "--fade-distance": "-30px",
              animationDuration: "2s",
            } as React.CSSProperties
          }
        >
          <div className="text-white text-center font-pretendard font-bold leading-tight space-y-2">
            <p style={{ fontSize: "clamp(1.125rem, 4vw, 2.25rem)" }}>
              {subTextLine1}
            </p>
            <p style={{ fontSize: "clamp(1.125rem, 4vw, 2.25rem)" }}>
              {subTextLine2}
            </p>
            {subTextLine3 && (
              <p style={{ fontSize: "clamp(1.125rem, 4vw, 2.25rem)" }}>
                {subTextLine3}
              </p>
            )}
          </div>
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
}
