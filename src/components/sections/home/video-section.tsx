"use client";

import { useEffect, useState, useRef } from "react";
import ScrollIndicator from "@/components/ui/scroll-indicator";
import "@/components/ui/animations.css";

interface VideoSectionProps {
  videoSrc: string;
  mainTitle: string;
  subTexts: {
    korean: string[];
    english?: string[];
    author?: string;
  };
}

export default function VideoSection({
  videoSrc,
  mainTitle,
  subTexts,
}: VideoSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [subtextVisible, setSubtextVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
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
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 400);
    };

    // 초기 체크
    checkScreenSize();

    // resize 이벤트 리스너 등록
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
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

  // 작은 화면에서 텍스트 줄바꿈 처리
  const formatTextForSmallScreen = (
    text: string,
    language: "korean" | "english"
  ) => {
    if (!isSmallScreen) return text;

    if (language === "korean") {
      if (
        text.includes("자신이 되고 싶은 사람들과 많은 시간을 보내는 것이다.")
      ) {
        return text.replace(
          "자신이 되고 싶은 사람들과 많은 시간을 보내는 것이다.",
          "자신이 되고 싶은 사람들과\n많은 시간을 보내는 것이다."
        );
      }
    } else if (language === "english") {
      if (text.includes("The fastest way to change yourself is to hang out")) {
        return text.replace(
          "The fastest way to change yourself is to hang out",
          "The fastest way to change yourself\nis to hang out"
        );
      }
      if (
        text.includes("with people who are already the way you want to be.")
      ) {
        return text.replace(
          "with people who are already the way you want to be.",
          "with people who are already\nthe way you want to be."
        );
      }
    }

    return text;
  };

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

      <div className="relative z-20 flex flex-col items-center justify-center h-full">
        <h1
          className={`
            text-white text-center font-nanum-human text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
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
          <div className="space-y-2">
            {subTexts.korean.map((text, index) => (
              <p
                key={`korean-${index}`}
                className="text-white text-center font-nanum-human text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight whitespace-pre-line"
              >
                {formatTextForSmallScreen(text, "korean")}
              </p>
            ))}
          </div>

          {subTexts.english && subTexts.english.length > 0 && (
            <div className="pt-6 sm:pt-8 space-y-2">
              {subTexts.english.map((text, index) => (
                <p
                  key={`english-${index}`}
                  className="text-white text-center font-nanum-myeongjo-yet-hangul text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal leading-tight whitespace-pre-line"
                >
                  {formatTextForSmallScreen(text, "english")}
                </p>
              ))}
            </div>
          )}

          {subTexts.author && (
            <p className="text-white text-center font-nanum-myeongjo-yet-hangul text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal leading-tight pt-3 sm:pt-4">
              {subTexts.author}
            </p>
          )}
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
