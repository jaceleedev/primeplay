import ContactUsSection from "@/components/sections/support/contact-us-section";
import LocationSection from "@/components/sections/support/location-section";
import BackgroundImageSection from "@/components/sections/support/background-image-section";

const SupportPage = () => {
  return (
    <main>
      <BackgroundImageSection
        imageSrc="/images/customer-support-background.webp"
        translationKey="SupportPage.BackgroundSection"
      />
      <ContactUsSection />
      <LocationSection />
    </main>
  );
};

export default SupportPage;
