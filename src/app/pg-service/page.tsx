import VideoSection from "@/components/sections/home/video-section";

const PGServicePage = () => {
  return (
    <main>
      <VideoSection
        videoSrc="/videos/csi-play-background.webm"
        mainTitle={<>PG 서비스</>}
        subTexts={{
          korean: (
            <>
              <p>비사업자 단말기, 수기 결제용 어플 등</p>
              <p>다양한 서비스를 지원하는 결제 대행사</p>
            </>
          ),
        }}
      />
    </main>
  );
};

export default PGServicePage;
