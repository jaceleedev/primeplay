import VideoSection from "@/components/sections/home/video-section";
import MoreThanSolutionsSection from "@/components/sections/web-app-dev/more-than-solutions-section";
import SolutionSection from "@/components/sections/web-app-dev/solution-section";
import WorkProcessSection from "@/components/sections/web-app-dev/work-process-section";
import BlockchainServiceSection from "@/components/sections/web-app-dev/blockchain-service-section";
import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/json-ld";
import { webAppDevSchema } from "@/lib/json-ld";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(locale, "webAppDev");
}

const WebAppDevPage = () => {
  return (
    <>
      <JsonLd data={webAppDevSchema} />
      <main>
        <VideoSection
          videoSrc="/videos/web-app-dev-background.webm"
          translationKey="VideoSections.webAppDev"
        />
        <WorkProcessSection />
        <SolutionSection />
        <MoreThanSolutionsSection />
        <BlockchainServiceSection />
      </main>
    </>
  );
};

export default WebAppDevPage;
