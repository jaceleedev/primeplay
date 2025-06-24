import VideoSection from "@/components/sections/home/video-section";
import DetailSection from "@/components/sections/home/detail-section";

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
      <DetailSection
        lines={[
          "사소한 것부터 세심하게",
          "작은 부분에서부터 큰 부분까지",
          "우리는 모든 것에서 즐거움을 찾아갑니다",
        ]}
        imageSrc="/images/detail-background.webp"
        imageAlt="세심한 디테일을 표현하는 배경 이미지"
      />
      {/* 여기에 다른 섹션들을 추가하시면 됩니다 */}
    </main>
  );
}
