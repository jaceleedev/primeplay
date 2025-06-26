"use client";

import { useEffect, useRef, useState, CSSProperties } from "react";
import Image from "next/image";
import "@/components/ui/animations.css";

interface BusinessSolutionSectionProps {
  mainTitle: {
    line1: string;
    line2: string;
  };
  description: {
    line1: string;
    line2: string;
  };
  imageSrc: string;
  imageAlt: string;
  background?: string;
}

const BusinessSolutionSection = ({
  mainTitle,
  description,
  imageSrc,
  imageAlt,
  background = "linear-gradient(270deg, #FFF 0%, rgba(248, 219, 219, 0.74) 100%)",
}: BusinessSolutionSectionProps) => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  // 첫 번째 텍스트 그룹 Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !titleVisible) {
          setTitleVisible(true);
        }
      },
      { threshold: 0.6 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  // 두 번째 텍스트 그룹 Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !descriptionVisible) {
          setDescriptionVisible(true);
        }
      },
      { threshold: 0.7 }
    );

    if (descriptionRef.current) {
      observer.observe(descriptionRef.current);
    }

    return () => {
      if (descriptionRef.current) {
        observer.unobserve(descriptionRef.current);
      }
    };
  }, []);

  return (
    <section
      className="relative w-full h-[75vh] sm:h-[70vh] md:h-[65vh] lg:h-[75vh] xl:h-[70vh] min-h-[550px] max-h-[850px] overflow-hidden"
      style={{
        background: background,
      }}
    >
      {/* 텍스트 컨텐츠 */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* 메인 타이틀 그룹 */}
          <div
            ref={titleRef}
            className={`${titleVisible ? "fade-in-up" : "opacity-0"}`}
            style={
              {
                "--fade-distance": "60px",
                animationDuration: "1.5s",
              } as CSSProperties
            }
          >
            <h2 className="font-s-core-dream font-bold text-black leading-tight">
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
                {mainTitle.line1}
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mt-2 sm:mt-3 md:mt-4">
                {mainTitle.line2}
              </span>
            </h2>
          </div>

          {/* 설명 텍스트 그룹 */}
          <div
            ref={descriptionRef}
            className={`mt-8 sm:mt-10 md:mt-12 lg:mt-16 xl:mt-20 ${
              descriptionVisible ? "fade-in-up" : "opacity-0"
            }`}
            style={
              {
                "--fade-distance": "40px",
                animationDuration: "1.5s",
                animationDelay: "0.2s",
              } as CSSProperties
            }
          >
            <div className="space-y-1 sm:space-y-2">
              <p className="font-s-core-dream text-black leading-relaxed text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                {description.line1}
              </p>
              <p className="font-s-core-dream text-black leading-relaxed text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                {description.line2}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 기하학적 이미지 */}
      <div className="absolute bottom-0 left-0 w-full h-[40%] sm:h-[45%] md:h-[50%] z-5">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-bottom"
          priority={false}
          sizes="(max-width: 1920px) 100vw, 1920px"
        />
      </div>
    </section>
  );
};

export default BusinessSolutionSection;
