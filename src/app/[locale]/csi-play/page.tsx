import VideoSection from "@/components/sections/home/video-section";
import CsiMockupSection from "@/components/sections/csi-play/csi-mockup-section";
import CsiScrollFeaturesSection from "@/components/sections/csi-play/csi-scroll-features-section";
import SimpleFixedButtons from "@/components/ui/simple-fixed-buttons";
import { generatePageMetadata } from "@/lib/metadata";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { csiPlaySchema } from "@/lib/json-ld";
import JsonLd from "@/components/seo/json-ld";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(locale, "csiPlay");
}

const CsiPlayPage = async ({ params }: Props) => {
  const { locale } = await params;
  const t = await getTranslations("CsiPlayPage.FixedButtons");

  return (
    <>
      <JsonLd data={csiPlaySchema} />
      <main>
        <VideoSection
          videoSrc="/videos/csi-play-background.webm"
          translationKey="VideoSections.csiPlay"
        />
        <CsiMockupSection />
        <CsiScrollFeaturesSection />

        {/* Fixed CSI-PLAY 이동 버튼 - 항상 표시 */}
        <SimpleFixedButtons
          buttons={[
            {
              logo: "/logos/csi-play-logo.svg",
              text: t("visitCsiPlay"),
              url: "https://csi-play.com",
              alt: "CSI PLAY Logo",
              isExternal: true,
            },
          ]}
          position="bottom"
        />
      </main>
    </>
  );
};

export default CsiPlayPage;
