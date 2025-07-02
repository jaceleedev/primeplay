"use client";

import { useEffect, useState, RefObject } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

interface ButtonConfig {
  logo: string;
  text: string;
  url: string;
  alt?: string;
  isExternal?: boolean; // 외부 링크 여부를 명시적으로 지정
}

interface FixedButtonsProps {
  observeRefs: RefObject<HTMLDivElement | null>[];
  buttons: ButtonConfig[];
  position?: "bottom" | "top";
  threshold?: number;
}

export default function FixedButtons({
  observeRefs,
  buttons,
  position = "bottom",
  threshold = 0.1,
}: FixedButtonsProps) {
  const [sectionsVisible, setSectionsVisible] = useState<boolean[]>([]);
  const router = useRouter();

  // 하나라도 보이면 버튼들 표시
  const showButtons = sectionsVisible.some((visible) => visible);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    observeRefs.forEach((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setSectionsVisible((prev) => {
            const newVisible = [...prev];
            newVisible[index] = entry.isIntersecting;
            return newVisible;
          });
        },
        { threshold }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [observeRefs, threshold]);

  const handleButtonClick = (button: ButtonConfig) => {
    // isExternal이 명시적으로 false이거나, URL이 /로 시작하는 경우 내부 링크로 처리
    const isInternalLink =
      button.isExternal === false || button.url.startsWith("/");

    if (isInternalLink) {
      router.push(button.url);
    } else {
      window.open(button.url, "_blank", "noopener,noreferrer");
    }
  };

  if (!showButtons) return null;

  const positionClass = position === "bottom" ? "bottom-6" : "top-6";
  const buttonSpacing = buttons.length > 1 ? "gap-4" : "";

  return (
    <AnimatePresence>
      {showButtons && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          // 👇 className 수정: flex와 정렬 클래스 제거
          className={`fixed ${positionClass} left-0 right-0 z-50 px-4`}
        >
          {/* 👇 버튼들을 감싸는 div에 mx-auto를 주어 수평 중앙 정렬 */}
          <div
            className={`mx-auto flex w-fit flex-col sm:flex-row ${buttonSpacing}`}
          >
            {buttons.map((button, index) => (
              <button
                key={index}
                className="cursor-pointer flex items-center gap-4 px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5
                           bg-white rounded-[60px] hover:scale-105 transition-all duration-300
                           min-w-max"
                // 👇 mb-2 sm:mb-0 클래스 제거
                style={{
                  boxShadow: "0px 3.5px 9.5px 5px rgba(0, 0, 0, 0.15)",
                }}
                onClick={() => handleButtonClick(button)}
              >
                <Image
                  src={button.logo}
                  alt={button.alt || button.text}
                  width={32}
                  height={32}
                  className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 flex-shrink-0"
                />
                <span className="text-black font-nanum-human font-normal text-sm md:text-base lg:text-lg xl:text-xl whitespace-nowrap">
                  {button.text}
                </span>
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
