"use client";

import { useEffect, useState } from "react";
import ScrollIndicator from "@/components/ui/scroll-indicator";
import "@/components/ui/animations.css";

interface BackgroundImageSectionProps {
  imageSrc: string;
  mainTitle: React.ReactNode;
  subTexts: {
    korean: React.ReactNode;
    english?: React.ReactNode;
    author?: React.ReactNode;
  };
}

export default function BackgroundImageSection({
  imageSrc,
  mainTitle,
  subTexts,
}: BackgroundImageSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [subtextVisible, setSubtextVisible] = useState(false);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    timers.push(setTimeout(() => setIsVisible(true), 500));
    timers.push(setTimeout(() => setSubtextVisible(true), 1500));
    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  return (
    <section
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-20 flex flex-col items-center justify-center h-full">
        <h1
          className={`
            text-white text-center font-nanum-human text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
            font-extrabold leading-tight mb-16 sm:mb-20 md:mb-28 lg:mb-36
            ${isVisible ? "fade-in-down" : "opacity-0"}
          `}
          style={
            {
              "--fade-distance": "-60px",
              animationDuration: "1.5s",
            } as React.CSSProperties
          }
        >
          {mainTitle}
        </h1>

        <div
          className={`text-center space-y-4 ${
            subtextVisible ? "fade-in-down" : "opacity-0"
          }`}
          style={
            {
              "--fade-distance": "-30px",
              animationDuration: "2s",
            } as React.CSSProperties
          }
        >
          <div className="text-white text-center font-nanum-human text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight space-y-2">
            {subTexts.korean}
          </div>

          {subTexts.english && (
            <div className="text-white text-center font-nanum-myeongjo-yet-hangul text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal leading-tight pt-6 sm:pt-8 space-y-2">
              {subTexts.english}
            </div>
          )}

          {subTexts.author && (
            <div className="text-white text-center font-nanum-myeongjo-yet-hangul text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal leading-tight pt-3 sm:pt-4">
              {subTexts.author}
            </div>
          )}
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
}
