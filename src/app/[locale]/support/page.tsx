import ContactUsSection from "@/components/sections/support/contact-us-section";
import LocationSection from "@/components/sections/support/location-section";
import BackgroundImageSection from "@/components/sections/support/background-image-section";
import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/json-ld";
import { supportSchema } from "@/lib/json-ld";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(locale, "support");
}

const SupportPage = () => {
  return (
    <>
      <JsonLd data={supportSchema} />
      <main>
        <BackgroundImageSection
          imageSrc="/images/customer-support-background.webp"
          translationKey="SupportPage.BackgroundSection"
        />
        <ContactUsSection />
        <LocationSection />
      </main>
    </>
  );
};

export default SupportPage;
