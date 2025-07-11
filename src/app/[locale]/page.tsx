import VideoSection from "@/components/sections/home/video-section";
import DetailSection from "@/components/sections/home/detail-section";
import BusinessSolutionSection from "@/components/sections/home/business-solution-section";
import ProductSection from "@/components/sections/home/product-section";
import PlayToPSection from "@/components/sections/home/play-to-p-section";
import ContactSection from "@/components/sections/home/contact-section";
import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/json-ld";
import {
  homepageSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/json-ld";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(locale, "home");
}

export default function Home() {
  return (
    <>
      <JsonLd data={[organizationSchema, websiteSchema, homepageSchema]} />
      <main>
        <VideoSection
          videoSrc="/videos/main-background.webm"
          translationKey="VideoSections.home"
        />
        <DetailSection />
        <BusinessSolutionSection />
        <ProductSection />
        <PlayToPSection />
        <ContactSection />
      </main>
    </>
  );
}
