"use client";

import Image from "next/image";
import { TextReveal } from "@/components/magicui/text-reveal";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const ContactSection = () => {
  const t = useTranslations("ContactSection");

  return (
    <section className="relative w-full pt-16 sm:pt-20 md:pt-24 lg:pt-32 bg-white">
      {/* 텍스트 컨텐츠 */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* 첫 번째 텍스트 */}
          <div className="text-center mb-52 sm:mb-56 md:mb-60 lg:mb-64">
            <p className="font-paperlogy font-medium text-black leading-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px]">
              {t("expertCollaborationLine1")}
              <br />
              {t("expertCollaborationLine2")}
              <br />
              {t("expertCollaborationLine3")}
            </p>
          </div>

          {/* 두 번째 텍스트 */}
          <div className="relative">
            <TextReveal
              className="text-center mb-52 sm:mb-56 md:mb-60 lg:mb-64"
              textClassName="font-paperlogy font-medium text-black leading-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] tracking-[8px] sm:tracking-[12px] md:tracking-[14px] lg:tracking-[16px]"
            >
              {t("playImportance")}
            </TextReveal>
          </div>

          {/* 세 번째 텍스트 */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="font-giants font-bold text-black leading-normal text-2xl sm:text-3xl md:text-4xl lg:text-[44px]">
              {t("contactUsTitle")}
            </h2>
          </div>

          {/* 네 번째 텍스트 */}
          <div className="text-center mb-20 sm:mb-24 md:mb-28 lg:mb-32">
            <p className="font-cafe24-ohsquare-air font-light text-black leading-normal text-base sm:text-lg md:text-xl lg:text-2xl">
              {t("contactDescriptionLine1")}
              <br />
              {t("contactDescriptionLine2")}
            </p>
          </div>
        </div>
      </div>

      {/* 악수 이미지 - 전체 너비 */}
      <div className="relative w-full h-[40vh] sm:h-[45vh] md:h-[50vh] min-h-[400px] max-h-[600px] overflow-hidden">
        <Image
          src="/images/handshake.webp"
          alt="전문가들의 협력을 상징하는 악수 이미지"
          fill
          className="object-cover"
          priority={false}
          sizes="100vw"
        />
      </div>

      {/* 문의하기 버튼 - 이미지 위에 배치 */}
      <div className="absolute inset-0 flex justify-center items-end pb-16">
        <Link href="/support" passHref>
          <button
            className="font-paperlogy flex items-center justify-center gap-4 text-white text-lg sm:text-xl md:text-2xl px-10 py-4 cursor-pointer transition-transform hover:scale-105"
            style={{
              borderRadius: "25px",
              border: "1px solid #FFF",
              background: "rgba(64, 64, 64, 0.33)",
              backdropFilter: "blur(5px)", // 배경 블러 효과 추가
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              color: "#FFFFFF",
            }}
          >
            <span>{t("inquireButton")}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="24"
              viewBox="0 0 42 24"
              fill="none"
              className="w-8 h-auto sm:w-10"
            >
              <path
                d="M29.3542 0.777832C29.5494 0.582602 29.8659 0.582665 30.0612 0.777832L41.5202 12.2368L41.5847 12.314C41.6421 12.401 41.6674 12.5025 41.6647 12.603C41.6676 12.7037 41.6421 12.8049 41.5847 12.8921L41.5202 12.9702L30.7682 23.7222C30.573 23.9172 30.2564 23.9173 30.0612 23.7222C29.8662 23.527 29.8662 23.2104 30.0612 23.0151L39.987 13.0894H1.39618C1.12004 13.0894 0.896179 12.8655 0.896179 12.5894C0.896381 12.3134 1.12016 12.0894 1.39618 12.0894H39.9587L29.3542 1.48486C29.1591 1.28966 29.1592 0.973079 29.3542 0.777832Z"
                fill="white"
              />
            </svg>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;
