import VideoSection from "@/components/sections/home/video-section";
import PgServiceMockupSection from "@/components/sections/pg-service/pg-service-mockup-section";
import PgServiceBackgroundSection from "@/components/sections/pg-service/pg-service-background-section";
import { pgServiceSections } from "@/data/pg-service-sections";
import PgServiceFeaturesSection from "@/components/sections/pg-service/pg-service-features-section";

const PGServicePage = () => {
  return (
    <main>
      <VideoSection
        videoSrc="/videos/csi-play-background.webm"
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
      <PgServiceMockupSection />
      <PgServiceFeaturesSection />

      {/* PG 서비스 배경 이미지 섹션들 */}
      {pgServiceSections.map((section) => (
        <PgServiceBackgroundSection
          key={section.id}
          imageSrc={section.imageSrc}
          firstLine={section.firstLine}
          secondLine={section.secondLine}
        />
      ))}
    </main>
  );
};

export default PGServicePage;
