import VideoSection from "@/components/sections/home/video-section";
import PgServiceMockupSection from "@/components/sections/pg-service/pg-service-mockup-section";
import PgServiceBackgroundSection from "@/components/sections/pg-service/pg-service-background-section";
import PgServiceFeaturesSection from "@/components/sections/pg-service/pg-service-features-section";
import PgServiceJourneySection from "@/components/sections/pg-service/pg-service-journey-section";
import PgServiceAdvantagesSection from "@/components/sections/pg-service/pg-service-advantage-section";
import PgServiceTypesSection from "@/components/sections/pg-service/pg-service-types-section";
import SimpleFixedButtons from "@/components/ui/simple-fixed-buttons";
import { generatePageMetadata } from "@/lib/metadata";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/json-ld";
import { pgServiceSchema } from "@/lib/json-ld";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(locale, "pgService");
}

// 배경 이미지 경로는 정적으로 유지
const backgroundImages = [
  "/images/pg-service-background-section-1.webp",
  "/images/pg-service-background-section-2.webp",
  "/images/pg-service-background-section-3.webp",
  "/images/pg-service-background-section-4.webp",
];

const PGServicePage = async ({ params }: Props) => {
  const t = await getTranslations("PGServicePage.BackgroundSections");
  const tButtons = await getTranslations("PGServicePage.FixedButtons");

  // 서버에서 배경 섹션 데이터 생성
  const pgServiceSections = backgroundImages.map((imageSrc, index) => ({
    id: index + 1,
    imageSrc,
    firstLine: t(`${index}.firstLine`),
    secondLine: t(`${index}.secondLine`),
  }));

  return (
    <>
      <JsonLd data={pgServiceSchema} />
      <main>
        <VideoSection
          videoSrc="/videos/pg-service-background.webm"
          translationKey="VideoSections.pgService"
        />
        <PgServiceMockupSection />
        <PgServiceTypesSection />
        <PgServiceJourneySection />
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

        <PgServiceAdvantagesSection />

        {/* Fixed PG Service 버튼들 - 항상 표시 */}
        <SimpleFixedButtons
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
        />
      </main>
    </>
  );
};

export default PGServicePage;
