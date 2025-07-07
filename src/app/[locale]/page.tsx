import VideoSection from "@/components/sections/home/video-section";
import DetailSection from "@/components/sections/home/detail-section";
import BusinessSolutionSection from "@/components/sections/home/business-solution-section";
import ProductSection from "@/components/sections/home/product-section";
import PlayToPSection from "@/components/sections/home/play-to-p-section";
import ContactSection from "@/components/sections/home/contact-section";

export default function Home() {
  return (
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
  );
}
