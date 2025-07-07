"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import VideoSection from "@/components/sections/home/video-section";
import PgServiceMockupSection from "@/components/sections/pg-service/pg-service-mockup-section";
import PgServiceBackgroundSection from "@/components/sections/pg-service/pg-service-background-section";
import PgServiceFeaturesSection from "@/components/sections/pg-service/pg-service-features-section";
import PgServiceJourneySection from "@/components/sections/pg-service/pg-service-journey-section";
import PgServiceAdvantagesSection from "@/components/sections/pg-service/pg-service-advantage-section";
import PgServiceTypesSection from "@/components/sections/pg-service/pg-service-types-section";
import FixedButtons from "@/components/ui/fixed-buttons";

// 배경 이미지 경로는 정적으로 유지
const backgroundImages = [
  "/images/pg-service-background-section-1.webp",
  "/images/pg-service-background-section-2.webp",
  "/images/pg-service-background-section-3.webp",
  "/images/pg-service-background-section-4.webp",
];

const PGServicePage = () => {
  const t = useTranslations("PGServicePage.BackgroundSections");
  const tButtons = useTranslations("PGServicePage.FixedButtons");
  const mockupSectionRef = useRef<HTMLDivElement>(null);
  const typesSectionRef = useRef<HTMLDivElement>(null);
  const journeySectionRef = useRef<HTMLDivElement>(null);
  const featuresSectionRef = useRef<HTMLDivElement>(null);
  const backgroundSectionsRef = useRef<HTMLDivElement>(null);
  const advantagesSectionRef = useRef<HTMLDivElement>(null);

  // 다국어 지원 배경 섹션 데이터 생성
  const pgServiceSections = backgroundImages.map((imageSrc, index) => ({
    id: index + 1,
    imageSrc,
    firstLine: t.rich(`${index}.firstLine`, {
      br: (chunks) => <br className="min-[450px]:hidden block" />,
    }),
    secondLine: t.rich(`${index}.secondLine`, {
      br: (chunks) => <br className="min-[450px]:hidden block" />,
    }),
  }));

  return (
    <main>
      <VideoSection
        videoSrc="/videos/pg-service-background.webm"
        mainTitle={<>PG 서비스</>}
        subText={
          <>
            <p>비사업자 단말기, 수기 결제용 어플 등</p>
            <p>다양한 서비스를 지원하는 결제 대행사</p>
          </>
        }
      />
      <div ref={mockupSectionRef}>
        <PgServiceMockupSection />
      </div>
      <div ref={typesSectionRef}>
        <PgServiceTypesSection />
      </div>
      <div ref={journeySectionRef}>
        <PgServiceJourneySection />
      </div>
      <div ref={featuresSectionRef}>
        <PgServiceFeaturesSection />
      </div>

      {/* PG 서비스 배경 이미지 섹션들 */}
      <div ref={backgroundSectionsRef}>
        {pgServiceSections.map((section) => (
          <PgServiceBackgroundSection
            key={section.id}
            imageSrc={section.imageSrc}
            firstLine={section.firstLine}
            secondLine={section.secondLine}
          />
        ))}
      </div>
      <div ref={advantagesSectionRef}>
        <PgServiceAdvantagesSection />
      </div>

      {/* Fixed PG Service 버튼들 */}
      <FixedButtons
        observeRefs={[
          mockupSectionRef,
          typesSectionRef,
          journeySectionRef,
          featuresSectionRef,
          backgroundSectionsRef,
          advantagesSectionRef,
        ]}
        buttons={[
          {
            logo: "/logos/ty-play-logo.svg",
            text: tButtons("visitTyPlay"),
            url: "https://ty-play.com",
            alt: "TY PLAY Logo",
            isExternal: true,
          },
          {
            logo: "/logos/sk-play-logo.svg",
            text: tButtons("contactPaymentService"),
            url: "/support",
            alt: "SK PLAY Logo",
            isExternal: false,
          },
        ]}
        position="bottom"
        threshold={0.1}
      />
    </main>
  );
};

export default PGServicePage;
