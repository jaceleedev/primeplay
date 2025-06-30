import VideoSection from "@/components/sections/home/video-section";
import CsiPlayMockupSection from "@/components/sections/csi-play/CsiPlayMockupSection";
const CsiPlayPage = () => {
  return (
    <main>
      <VideoSection
        videoSrc="/videos/csi-play-background.webm"
        mainTitle={<>CSI PLAY</>}
        subTexts={{
          korean: (
            <>
              <p>코인, 주식, 부동산 투자자들이 모여</p>
              <p>정보를 교류하고 실전 경험을 공유하는 투자 커뮤니티</p>
            </>
          ),
        }}
      />
      <CsiPlayMockupSection />
    </main>
  );
};

export default CsiPlayPage;
