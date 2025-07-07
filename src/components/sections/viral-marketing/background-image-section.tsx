"use client";

import { useTranslations } from "next-intl";

interface BackgroundImageSectionProps {
  imageSrc: string;
  translationKey: string; // 번역 키를 받아서 해당 섹션의 텍스트를 가져옴
}

const BackgroundImageSection = ({
  imageSrc,
  translationKey,
}: BackgroundImageSectionProps) => {
  const t = useTranslations(translationKey);

  // 텍스트 처리 (줄바꿈 지원)
  const text = t("text");
  const textLines = text.split("\n");

  return (
    <section className="relative w-full">
      <div
        className="relative w-full aspect-[4096/2731] min-h-[400px] md:min-h-[500px] max-h-[1024px] overflow-hidden"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundPosition: "50%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundColor: "lightgray",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p
              className="font-paperlogy font-semibold leading-normal"
              style={{
                fontSize: "clamp(1.5rem, 5vw, 3rem)", // 1단계 업 (24px ~ 48px)
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              {textLines.map((line, index) => (
                <span key={index} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundImageSection;
