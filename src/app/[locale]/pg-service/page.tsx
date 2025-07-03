"use client";

import { useRef } from "react";
import VideoSection from "@/components/sections/home/video-section";
import PgServiceMockupSection from "@/components/sections/pg-service/pg-service-mockup-section";
import PgServiceBackgroundSection from "@/components/sections/pg-service/pg-service-background-section";
import { pgServiceSections } from "@/data/pg-service-sections";
import PgServiceFeaturesSection from "@/components/sections/pg-service/pg-service-features-section";
import PgServiceJourneySection from "@/components/sections/pg-service/pg-service-journey-section";
import PgServiceAdvantagesSection from "@/components/sections/pg-service/pg-service-advantage-section";
import PgServiceTypesSection from "@/components/sections/pg-service/pg-service-types-section";
import FixedButtons from "@/components/ui/fixed-buttons";

const PGServicePage = () => {
  const mockupSectionRef = useRef<HTMLDivElement>(null);
  const typesSectionRef = useRef<HTMLDivElement>(null);
  const journeySectionRef = useRef<HTMLDivElement>(null);
  const featuresSectionRef = useRef<HTMLDivElement>(null);
  const backgroundSectionsRef = useRef<HTMLDivElement>(null);
  const advantagesSectionRef = useRef<HTMLDivElement>(null);

  return (
    <main>
      <VideoSection
        videoSrc="/videos/pg-service-background.webm"
        mainTitle={<>PG 서비스</>}
        subTexts={{
          korean: (
            <>
              <p>비사업자 단말기, 수기 결제용 어플 등</p>
              <p>다양한 서비스를 지원하는 결제 대행사</p>
            </>
          ),
        }}
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
            text: "TY-PLAY로 이동하기",
            url: "https://ty-play.com",
            alt: "TY PLAY Logo",
            isExternal: true,
          },
          {
            logo: "/logos/sk-play-logo.svg",
            text: "결제 대행 서비스 문의하기",
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
