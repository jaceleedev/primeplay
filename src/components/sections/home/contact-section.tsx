"use client";

import Image from "next/image";
import { TextReveal } from "@/components/magicui/text-reveal";

interface ContactSectionProps {
  imageSrc: string;
  imageAlt: string;
}

const ContactSection = ({ imageSrc, imageAlt }: ContactSectionProps) => {
  return (
    <section className="relative w-full pt-16 sm:pt-20 md:pt-24 lg:pt-32 bg-white">
      {/* 텍스트 컨텐츠 */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* 첫 번째 텍스트 */}
          <div className="text-center mb-52 sm:mb-56 md:mb-60 lg:mb-64">
            <p className="font-paperlogy font-medium text-black leading-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px]">
              다양한 분야의 전문가들이
              <br />
              함께 머리를 맞대고 아이디어를 내며
              <br />
              서로 소통하고 의견을 존중합니다.
            </p>
          </div>

          {/* 두 번째 텍스트 */}
          <TextReveal
            className="text-center mb-52 sm:mb-56 md:mb-60 lg:mb-64"
            textClassName="font-paperlogy font-medium text-black leading-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] tracking-[8px] sm:tracking-[12px] md:tracking-[14px] lg:tracking-[16px]"
          >
            가장 중요한 것은 PLAY!
          </TextReveal>

          {/* 세 번째 텍스트 */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="font-giants font-bold text-black leading-normal text-2xl sm:text-3xl md:text-4xl lg:text-[44px]">
              Contact Us
            </h2>
          </div>

          {/* 네 번째 텍스트 */}
          <div className="text-center mb-20 sm:mb-24 md:mb-28 lg:mb-32">
            <p className="font-cafe24-ohsquare-air font-light text-black leading-normal text-base sm:text-lg md:text-xl lg:text-2xl">
              궁금하신 내용은 언제든 문의주세요.
              <br />
              고객의 입장에서 생각하는 파트너가 되어드립니다.
            </p>
          </div>
        </div>
      </div>

      {/* 악수 이미지 - 전체 너비 */}
      <div className="relative w-full h-[40vh] sm:h-[45vh] md:h-[50vh] min-h-[300px] max-h-[600px] overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          priority={false}
          sizes="100vw"
        />
      </div>
    </section>
  );
};

export default ContactSection;
