import VideoSection from "@/components/sections/home/video-section";

const WebAppDevPage = () => {
  return (
    <main>
      <VideoSection
        videoSrc="/videos/web-app-dev-background.webm"
        mainTitle="성과로 검증된 Web,App 개발 솔루션"
        subTexts={{
          korean: [
            "기획부터 디자인, 개발까지 한 번에",
            "아이디어를 성공으로 이끄는 가장 확실한 파트너",
          ],
        }}
      />
    </main>
  );
};

export default WebAppDevPage;
