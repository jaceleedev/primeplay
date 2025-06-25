import VideoSection from "@/components/sections/home/video-section";
import ServicesSection from "@/components/sections/viral-marketing/services-section";

const ViralMarketingPage = () => {
  return (
    <main>
      <VideoSection
        videoSrc="/videos/viral-marketing-background.webm"
        mainTitle="결과로 증명하는 바이럴 마케팅"
        subTexts={{
          korean: [
            "수많은 성공 사례를 통해 입증된 전문가 그룹이",
            "가장 효과적인 마케팅 전략을 제시합니다.",
          ],
        }}
      />
      <ServicesSection />
    </main>
  );
};

export default ViralMarketingPage;
