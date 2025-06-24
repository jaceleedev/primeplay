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

      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4">
        <h1
          className={`
            text-white text-center font-nanum-human text-3xl md:text-4xl lg:text-5xl 
            font-extrabold leading-tight mb-36
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
                className="text-white text-center font-nanum-human text-2xl md:text-3xl lg:text-4xl font-bold leading-tight"
              >
                {text}
              </p>
            ))}
          </div>

          {subTexts.english && subTexts.english.length > 0 && (
            <div className="pt-8 space-y-2">
              {subTexts.english.map((text, index) => (
                <p
                  key={`english-${index}`}
                  className="text-white text-center font-nanum-myeongjo-yet-hangul text-xl md:text-2xl lg:text-3xl font-normal leading-tight"
                >
                  {text}
                </p>
              ))}
            </div>
          )}

          {subTexts.author && (
            <p className="text-white text-center font-nanum-myeongjo-yet-hangul text-xl md:text-2xl lg:text-3xl font-normal leading-tight pt-4">
              {subTexts.author}
            </p>
          )}
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
