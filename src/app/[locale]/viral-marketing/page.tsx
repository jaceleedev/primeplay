import VideoSection from "@/components/sections/home/video-section";
import ServicesSection from "@/components/sections/viral-marketing/services-section";
import BackgroundImageSection from "@/components/sections/viral-marketing/background-image-section";
import ChannelSection from "@/components/sections/viral-marketing/channel-section";
import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/json-ld";
import { viralMarketingSchema } from "@/lib/json-ld";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(locale, "viralMarketing");
}

const ViralMarketingPage = () => {
  return (
    <>
      <JsonLd data={viralMarketingSchema} />
      <main>
        <VideoSection
          videoSrc="/videos/viral-marketing-background.webm"
          translationKey="VideoSections.viralMarketing"
        />
        <ServicesSection />
        <BackgroundImageSection
          imageSrc="/images/channel-growth-background.webp"
          translationKey="ViralMarketingPage.BackgroundSections.channelGrowth"
        />
        <BackgroundImageSection
          imageSrc="/images/casting-background.webp"
          translationKey="ViralMarketingPage.BackgroundSections.casting"
        />
        <BackgroundImageSection
          imageSrc="/images/video-production-background.webp"
          translationKey="ViralMarketingPage.BackgroundSections.videoProduction"
        />
        <ChannelSection />
      </main>
    </>
  );
};

export default ViralMarketingPage;
