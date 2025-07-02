const PgServiceJourneySection = () => {
  return (
    <section className="relative w-full min-h-[400px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] xl:min-h-[900px] overflow-hidden bg-white">
      {/* 모바일 배경 이미지 */}
      <div
        className="absolute inset-0 block md:hidden"
        style={{
          backgroundImage: "url('/images/growth-curve.webp')",
          backgroundPosition: "90% 90%",
          backgroundSize: "80%",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* 데스크톱 배경 이미지 */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: "url('/images/growth-curve.webp')",
          backgroundPosition: "95% 85%", // 오른쪽에 약간의 간격
          backgroundSize: "min(80%, 1024px)", // 최대 1024px로 제한
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* 텍스트 컨테이너 - 왼쪽에 붙도록 */}
      <div className="relative z-10 h-full flex items-start justify-start">
        <div className="w-full px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-16 lg:pt-24 xl:pt-40">
          <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl">
            <h2 className="font-paperlogy font-semibold text-black mb-4 sm:mb-6 md:mb-10 lg:mb-14 xl:mb-18">
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
                결제 솔루션부터 사업확장까지
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mt-1 sm:mt-2 md:mt-3 lg:mt-4">
                모든 여정을 함께합니다.
              </span>
            </h2>

            <div className="font-paperlogy font-normal text-black leading-relaxed text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              <span className="block">
                여러 업체를 통하지 않아도 국내 및 해외 등
              </span>
              <span className="block mt-1 sm:mt-2">
                다양한 결제 서비스를 활용할 수 있습니다.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PgServiceJourneySection;
