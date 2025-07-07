"use client";

import { useEffect, useState, useRef } from "react";
import { useTranslations } from "next-intl";
import ScrollIndicator from "@/components/ui/scroll-indicator";
import "@/components/ui/animations.css";

interface VideoSectionProps {
  videoSrc: string;
  translationKey: string; // 번역 키를 받아서 해당 섹션의 텍스트를 가져옴
}

export default function VideoSection({
  videoSrc,
  translationKey,
}: VideoSectionProps) {
  const t = useTranslations(translationKey);
  const [isVisible, setIsVisible] = useState(false);
  const [subtextVisible, setSubtextVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    // 메인 타이틀 애니메이션
    timers.push(setTimeout(() => setIsVisible(true), 500));

    // 서브텍스트 애니메이션
    timers.push(setTimeout(() => setSubtextVisible(true), 1500));

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        // 비디오 자동재생 실패 시 무시
      }
    };

    const handleCanPlayThrough = () => playVideo();

    video.addEventListener("canplaythrough", handleCanPlayThrough);

    if (video.readyState >= 3) playVideo();

    return () =>
      video.removeEventListener("canplaythrough", handleCanPlayThrough);
  }, [videoSrc]);

  // 메인 타이틀 텍스트 처리 (줄바꿈 지원)
  const mainTitle = t("mainTitle");
  const titleLines = mainTitle.split("\n");

  // 서브텍스트 처리 (최대 3줄)
  const subTextLine1 = t("subTextLine1");
  const subTextLine2 = t("subTextLine2");
  const subTextLine3 = t("subTextLine3");

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-5"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
      >
        <source src={videoSrc} type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-20 flex flex-col items-center justify-center h-full bg-gray-600/28">
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
          <div className="text-white font-pretendard font-bold leading-tight space-y-2">
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
