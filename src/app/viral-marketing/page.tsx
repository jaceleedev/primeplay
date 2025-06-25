import VideoSection from "@/components/sections/home/video-section";

export default function ViralMarketing() {
  return (
    <main>
      <VideoSection
        videoSrc="/videos/viral-marketing-background.webm"
        mainTitle="디지털 마케팅의 모든 것"
        subTexts={{
          korean: ["세상 모든 디지털 마케팅의 종합 솔루션"],
        }}
      />
    </main>
  );
}
