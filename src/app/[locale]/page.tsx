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
        mainTitle={
          <>
            세상에 없던 새로운 <br className="max-[400px]:block hidden" />
            연결고리
          </>
        }
        subText={
          <>
            <p>자신을 변화시키는 가장 빠른 방법은,</p>
            <p>
              자신이 되고 싶은 사람들과{" "}
              <br className="max-[400px]:block hidden" />
              많은 시간을 보내는 것이다.
            </p>
          </>
        }
      />
      <DetailSection
        lines={[
          "사소한 것부터 세심하게",
          "작은 부분에서부터 큰 부분까지",
          "우리는 모든 것에서 즐거움을 찾아갑니다",
        ]}
        imageSrc="/images/detail-background.webp"
        imageAlt="세심한 디테일을 표현하는 배경 이미지"
      />
      <BusinessSolutionSection />
      <ProductSection />
      <PlayToPSection />
      <ContactSection />
    </main>
  );
}
