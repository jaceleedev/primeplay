"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "@/components/ui/animations.css";

interface DetailSectionProps {
  lines: string[];
  imageSrc: string;
  imageAlt: string;
  overlay?: string;
}

const DetailSection = ({
  lines,
  imageSrc,
  imageAlt,
  overlay = "rgba(0, 0, 0, 0.39)",
}: DetailSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer 설정
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // 한 번 실행 후 해제
        }
      },
      { threshold: 0.6 } // 60% 보일 때 트리거
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 텍스트를 글자 단위로 분리하여 span으로 감싸는 함수
  const renderAnimatedText = (text: string, lineIndex: number) => {
    return text.split("").map((char, index) => {
      // 각 라인의 시작 지연시간 계산 (라인별로 0.3초씩 지연)
      const lineDelay = lineIndex * 0.3;
      // 글자별 지연시간 (0.05초씩 간격)
      const charDelay = index * 0.05;
      const totalDelay = lineDelay + charDelay;

      return (
        <span
          key={`${lineIndex}-${index}`}
          className={`inline-block ${
            isVisible ? "animated-char" : "opacity-0"
          }`}
          style={{
            animationDelay: isVisible ? `${totalDelay}s` : undefined,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      );
    });
  };

  return (
    <section ref={sectionRef} className="relative w-full">
      {/* 배경 이미지 컨테이너 - 개선된 반응형 높이 설정 */}
      <div className="relative w-full h-[70vh] sm:h-[65vh] md:h-[60vh] lg:h-[70vh] xl:h-[65vh] min-h-[500px] max-h-[800px] overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 1920px) 100vw, 1920px"
        />

        {/* 반투명 오버레이 */}
        <div className="absolute inset-0" style={{ background: overlay }} />

        {/* 텍스트 오버레이 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-5xl mx-auto">
            {lines.map((line, lineIndex) => (
              <div
                key={lineIndex}
                className={`
                  font-paperlogy font-bold last:mb-0
                  ${
                    lineIndex === 0
                      ? "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[4px] sm:tracking-[6px] md:tracking-[8px] lg:tracking-[10px] xl:tracking-[12px] mb-4 sm:mb-6 md:mb-8 lg:mb-10"
                      : "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 sm:mb-6 md:mb-8 lg:mb-10"
                  }
                  ${isVisible ? "text-scale-animation" : "opacity-0"}
                `}
              >
                {renderAnimatedText(line, lineIndex)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailSection;
