"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import VideoSection from "@/components/sections/home/video-section";
import CsiMockupSection from "@/components/sections/csi-play/csi-mockup-section";
import CsiScrollFeaturesSection from "@/components/sections/csi-play/csi-scroll-features-section";
import FixedButtons from "@/components/ui/fixed-buttons";

const CsiPlayPage = () => {
  const t = useTranslations("CsiPlayPage.FixedButtons");
  const mockupSectionRef = useRef<HTMLDivElement>(null);
  const scrollSectionRef = useRef<HTMLDivElement>(null);

  return (
    <main>
      <VideoSection
        videoSrc="/videos/csi-play-background.webm"
        translationKey="VideoSections.csiPlay"
      />
      <div ref={mockupSectionRef}>
        <CsiMockupSection />
      </div>
      <div ref={scrollSectionRef}>
        <CsiScrollFeaturesSection />
      </div>

      {/* Fixed CSI-PLAY 이동 버튼 */}
      <FixedButtons
        observeRefs={[mockupSectionRef, scrollSectionRef]}
        buttons={[
          {
            logo: "/logos/csi-play-logo.svg",
            text: t("visitCsiPlay"),
            url: "https://csi-play.com",
            alt: "CSI PLAY Logo",
          },
        ]}
        position="bottom"
        threshold={0.1}
      />
    </main>
  );
};

export default CsiPlayPage;
