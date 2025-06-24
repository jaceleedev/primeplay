import VideoSection from "@/components/sections/video-section";

export default function Home() {
  return (
    <main>
      <VideoSection
        videoSrc="/videos/main-background.webm"
        mainTitle="세상에 없던 새로운 연결고리"
        subTexts={{
          korean: [
            "자신을 변화시키는 가장 빠른 방법은,",
            "자신이 되고 싶은 사람들과 많은 시간을 보내는 것이다.",
          ],
          english: [
            "The fastest way to change yourself is to hang out",
            "with people who are already the way you want to be.",
          ],
          author: "Reid Hoffman",
        }}
      />
      {/* 여기에 다른 섹션들을 추가하시면 됩니다 */}
    </main>
  );
}
