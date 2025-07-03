import VideoSection from "@/components/sections/home/video-section";
import ServicesSection from "@/components/sections/viral-marketing/services-section";
import BackgroundImageSection from "@/components/sections/viral-marketing/background-image-section";
import ChannelSection from "@/components/sections/viral-marketing/channel-section";

const ViralMarketingPage = () => {
  return (
    <main>
      <VideoSection
        videoSrc="/videos/viral-marketing-background.webm"
        mainTitle={
          <>
            결과로 증명하는 <br className="max-[400px]:block hidden" /> 바이럴
            마케팅
          </>
        }
        subTexts={{
          korean: (
            <>
              <p>수많은 성공 사례를 통해 입증된 전문가 그룹이</p>
              <p>가장 효과적인 마케팅 전략을 제시합니다.</p>
            </>
          ),
        }}
      />
      <ServicesSection />
      <BackgroundImageSection imageSrc="/images/channel-growth-background.webp">
        효과적으로 원하는 <br className="max-[500px]:block hidden" /> 채널을
        성장 시키고,
      </BackgroundImageSection>
      <BackgroundImageSection imageSrc="/images/casting-background.webp">
        <>
          인플루언서, 연예인, <br className="min-[400px]:hidden block" /> 모델,
          쇼 호스트 등 <br className="min-[1420px]:hidden block" /> 기획에
          필요한 <br className="min-[400px]:hidden block" /> 출연진을 섭외하고,
        </>
      </BackgroundImageSection>
      <BackgroundImageSection imageSrc="/images/video-production-background.webp">
        각종 홍보 영상,
        <br className="min-[400px]:hidden block" /> 라이브 영상 등{" "}
        <br className="xl:hidden block" /> 영상 기획부터{" "}
        <br className="min-[400px]:hidden block" /> 촬영 편집까지.
      </BackgroundImageSection>
      <ChannelSection />
    </main>
  );
};

export default ViralMarketingPage;
