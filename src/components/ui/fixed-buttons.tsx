"use client";

import { useEffect, useState, RefObject } from "react";
import Image from "next/image";

interface ButtonConfig {
  logo: string;
  text: string;
  url: string;
  alt?: string;
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

  if (!showButtons) return null;

  const positionClass = position === "bottom" ? "bottom-6" : "top-6";
  const buttonSpacing = buttons.length > 1 ? "gap-4" : "";

  return (
    <div
      className={`fixed ${positionClass} left-0 right-0 flex justify-center z-50 px-4`}
    >
      <div className={`flex ${buttonSpacing}`}>
        {buttons.map((button, index) => (
          <button
            key={index}
            className="cursor-pointer flex items-center gap-4 px-8 py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 
                       bg-white rounded-[60px] hover:scale-105 transition-all duration-300"
            style={{
              boxShadow: "0px 3.5px 9.5px 5px rgba(0, 0, 0, 0.15)",
            }}
            onClick={() => window.open(button.url, "_blank")}
          >
            <Image
              src={button.logo}
              alt={button.alt || button.text}
              width={32}
              height={32}
              className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
            />
            <span className="text-black font-nanum-human font-normal text-lg md:text-xl lg:text-2xl">
              {button.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
