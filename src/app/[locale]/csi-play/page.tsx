"use client";

import { useRef } from "react";
import VideoSection from "@/components/sections/home/video-section";
import CsiMockupSection from "@/components/sections/csi-play/csi-mockup-section";
import CsiScrollFeaturesSection from "@/components/sections/csi-play/csi-scroll-features-section";
import FixedButtons from "@/components/ui/fixed-buttons";

const CsiPlayPage = () => {
  const mockupSectionRef = useRef<HTMLDivElement>(null);
  const scrollSectionRef = useRef<HTMLDivElement>(null);

  return (
    <main>
      <VideoSection
        videoSrc="/videos/csi-play-background.webm"
        mainTitle={<>CSI PLAY</>}
        subText={
          <>
            <p>코인, 주식, 부동산 투자자들이 모여</p>
            <p>정보를 교류하고 실전 경험을 공유하는 투자 커뮤니티</p>
          </>
        }
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
            text: "CSI-PLAY로 이동하기",
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
