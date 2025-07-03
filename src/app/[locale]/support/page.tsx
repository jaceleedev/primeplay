import ContactUsSection from "@/components/sections/support/contact-us-section";
import LocationSection from "@/components/sections/support/location-section";
import BackgroundImageSection from "@/components/sections/background-image-section";

const SupportPage = () => {
  return (
    <main>
      <BackgroundImageSection
        imageSrc="/images/customer-support-background.webp"
        mainTitle={<>고객지원</>}
        subTexts={{
          korean: (
            <>
              <p>궁금한 사항이 있으신가요?</p>
              <p>다양한 문의 내용을 남겨주세요</p>
            </>
          ),
        }}
      />
      <ContactUsSection />
      <LocationSection />
    </main>
  );
};

export default SupportPage;
