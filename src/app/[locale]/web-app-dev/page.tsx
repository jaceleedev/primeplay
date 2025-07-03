import VideoSection from "@/components/sections/home/video-section";
import MoreThanSolutionsSection from "@/components/sections/web-app-dev/more-than-solutions-section";
import SolutionSection from "@/components/sections/web-app-dev/solution-section";
import WorkProcessSection from "@/components/sections/web-app-dev/work-process-section";
import BlockchainServiceSection from "@/components/sections/web-app-dev/blockchain-service-section";

const WebAppDevPage = () => {
  return (
    <main>
      <VideoSection
        videoSrc="/videos/web-app-dev-background.webm"
        mainTitle={
          <>
            성과로 검증된 <br className="max-[500px]:block hidden" /> Web, App
            개발 솔루션
          </>
        }
        subTexts={{
          korean: (
            <>
              <p>기획부터 디자인, 개발까지 한 번에</p>
              <p>아이디어를 성공으로 이끄는 가장 확실한 파트너</p>
            </>
          ),
        }}
      />
      <WorkProcessSection />
      <SolutionSection />
      <MoreThanSolutionsSection />
      <BlockchainServiceSection />
    </main>
  );
};

export default WebAppDevPage;
