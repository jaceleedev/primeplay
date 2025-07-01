// src/components/sections/csi-play/csi-scroll-features-section.tsx

"use client";

import { useEffect, useRef, useState } from "react";
import IPhoneMockup from "@/components/ui/iphone-mockup";
import { csiFeatureGroups } from "@/data/csi-scroll-features";

const CsiScrollFeaturesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentGroup, setCurrentGroup] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(0);

  // 스크롤 이벤트 throttling을 위한 ref
  const rafRef = useRef<number | null>(null);
  const lastScrollTime = useRef<number>(0);

  useEffect(() => {
    // 초기 뷰포트 높이 설정
    setViewportHeight(window.innerHeight);

    // 리사이즈 이벤트 핸들러
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      const now = Date.now();
      if (now - lastScrollTime.current < 16) return; // 60fps 제한
      lastScrollTime.current = now;

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionHeight = containerRef.current.offsetHeight;

        // 섹션이 뷰포트에 들어왔는지 확인
        const isInView = rect.top <= 0 && rect.bottom >= windowHeight;
        setIsFixed(isInView);

        if (isInView) {
          // 스크롤 진행도 계산 (0 ~ 1)
          const progress = Math.abs(rect.top) / (sectionHeight - windowHeight);
          const clampedProgress = Math.max(0, Math.min(1, progress));
          setScrollProgress(clampedProgress);

          // 현재 활성 그룹 계산 (부드러운 전환을 위해 조정)
          const groupIndex = Math.floor(
            clampedProgress * csiFeatureGroups.length
          );
          const activeGroup = Math.min(groupIndex, csiFeatureGroups.length - 1);
          setCurrentGroup(activeGroup);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // 초기값 설정

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  // 뷰포트 높이에 따른 아이폰 목업 크기 계산 (모바일만)
  const getMobileIPhoneSize = () => {
    if (viewportHeight <= 667) {
      // iPhone SE 크기 (375x667) 이하
      return { width: 140, height: 280 };
    } else if (viewportHeight <= 736) {
      // iPhone 8 Plus 크기 이하
      return { width: 160, height: 320 };
    } else if (viewportHeight <= 800) {
      return { width: 180, height: 360 };
    } else {
      return { width: 200, height: 400 };
    }
  };

  const mobileIPhoneSize = getMobileIPhoneSize();

  return (
    <section
      ref={containerRef}
      className="relative bg-white"
      style={{ height: `${100 * (csiFeatureGroups.length + 1)}vh` }}
    >
      {/* 고정된 콘텐츠 */}
      <div
        className={`${
          isFixed ? "fixed" : "absolute"
        } top-0 left-0 w-full h-screen bg-white z-10`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          {/* 데스크탑 레이아웃 */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center h-full">
            {/* 왼쪽 텍스트 영역 */}
            <div className="relative flex flex-col justify-center">
              {csiFeatureGroups.map((group, index) => {
                // 각 텍스트 그룹의 애니메이션 계산 (더 부드러운 전환)
                const groupProgress =
                  scrollProgress * csiFeatureGroups.length - index;
                const isActive = Math.abs(groupProgress - 0.5) < 0.5;

                // 페이드 인/아웃 계산
                let opacity = 0;
                let translateY = 60;
                let scale = 0.9;

                if (isActive) {
                  const distanceFromCenter = Math.abs(groupProgress - 0.5);
                  opacity = Math.max(0, 1 - distanceFromCenter * 2);
                  translateY = groupProgress * -60;
                  scale = 0.9 + opacity * 0.1;
                }

                return (
                  <div
                    key={group.id}
                    className="absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-out"
                    style={{
                      opacity,
                      transform: `translateY(${translateY}px) scale(${scale})`,
                      pointerEvents: opacity > 0.5 ? "auto" : "none",
                    }}
                  >
                    <h3 className="font-nanum-human text-black text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
                      {group.title}
                    </h3>
                    <p className="font-nanum-human text-black text-lg lg:text-xl xl:text-2xl leading-relaxed whitespace-pre-line">
                      {group.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* 오른쪽 아이폰 목업 */}
            <div className="flex justify-center items-center">
              <div
                className="transition-transform duration-500 ease-out"
                style={{
                  transform: `scale(${
                    0.9 +
                    Math.sin(
                      scrollProgress * Math.PI * csiFeatureGroups.length
                    ) *
                      0.05
                  })`,
                }}
              >
                <IPhoneMockup
                  screenImage={
                    csiFeatureGroups[currentGroup]?.screenImage ||
                    csiFeatureGroups[0].screenImage
                  }
                  alt="CSI Play Features"
                />
              </div>
            </div>
          </div>

          {/* 모바일 레이아웃 - iPhone SE 문제 해결 */}
          <div className="lg:hidden h-full">
            <div
              className="flex flex-col items-center justify-between"
              style={{
                minHeight: "100vh",
                paddingTop: "15vh",
                paddingBottom: "10vh",
              }}
            >
              <div className="text-center mb-6 w-full">
                <h3 className="font-nanum-human text-black text-2xl md:text-3xl font-bold mb-4 leading-tight">
                  {csiFeatureGroups[currentGroup]?.title}
                </h3>
                <p className="font-nanum-human text-black text-lg md:text-xl leading-relaxed whitespace-pre-line">
                  {csiFeatureGroups[currentGroup]?.description}
                </p>
              </div>

              <div className="flex justify-center mb-4">
                <div
                  className="transition-transform duration-300 ease-out"
                  style={{
                    transform: `scale(${0.8 + scrollProgress * 0.2})`,
                  }}
                >
                  <IPhoneMockup
                    screenImage={
                      csiFeatureGroups[currentGroup]?.screenImage ||
                      csiFeatureGroups[0].screenImage
                    }
                    alt="CSI Play Features"
                    width={mobileIPhoneSize.width}
                    height={mobileIPhoneSize.height}
                  />
                </div>
              </div>

              {/* 하단 고정 영역 */}
              <div className="flex flex-col items-center space-y-3">
                {/* 모바일 진행도 인디케이터 */}
                <div className="flex space-x-3">
                  {csiFeatureGroups.map((_, index) => (
                    <div
                      key={index}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentGroup
                          ? "w-8 h-2 bg-black"
                          : "w-2 h-2 bg-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* 모바일 스크롤 힌트 */}
                <div className="text-center text-gray-500 text-sm">
                  <p className="font-nanum-human">
                    스크롤하여 더 많은 기능을 확인하세요
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CsiScrollFeaturesSection;
