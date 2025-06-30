"use client";

import Image from "next/image";

const CsiPlayMockupSection = () => {
  return (
    <section className="py-24 sm:py-28 md:py-32 lg:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* 로고와 타이틀 */}
        <div className="flex items-center gap-x-4 md:gap-x-6 mb-16 sm:mb-20 md:mb-24">
          <Image
            src="/logos/csi-play-logo.svg"
            alt="CSI Play Logo"
            width={80}
            height={80}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
          />
          <h2 className="font-bold text-5xl sm:text-6xl md:text-7xl text-[#DF6E33]">
            CSI-PLAY
          </h2>
        </div>
        {/* --- 목업 이미지 섹션 (맥북+아이폰 그룹) --- */}
        <div className="relative w-full max-w-5xl mx-auto flex justify-center">
          {/* 맥북+아이폰 통합 컨테이너 - 같은 스케일링 적용 */}
          <div className="relative w-full pt-[52.87%] sm:left-[-1%]">
            {/* 레이어 1: 맥북 프레임 (z-10) */}
            <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
              <Image
                src="/images/macbook-mockup.svg"
                alt="Macbook Mockup"
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-contain"
                priority
              />
            </div>

            {/* 레이어 2: 맥북 스크린 (z-20) */}
            <div className="absolute z-20 w-[80%] h-[86%] top-[6%] left-1/2 -translate-x-1/2">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/macbook-website-screen.webp"
                  alt="CSI Play on Macbook"
                  fill
                  sizes="(min-width: 1024px) 820px, 80vw"
                  className="object-contain"
                />
              </div>
            </div>

            {/* 레이어 3: 아이폰 목업 (z-30) - 맥북과 같은 스케일링 */}
            <div className="absolute z-30 w-[18%] h-[68%] -bottom-[10%] right-0 sm:right-[-2%]">
              <Image
                src="/images/iphone-mockup.svg"
                alt="iPhone Mockup"
                fill
                sizes="(min-width: 1024px) 184px, 18vw"
                className="object-contain"
              />

              {/* 아이폰 스크린 영역 */}
              <div
                className="absolute w-[90%] h-[96%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden"
                style={{
                  maskImage: "url('/images/iphone-screen-mask.svg')",
                  WebkitMaskImage: "url('/images/iphone-screen-mask.svg')",
                  maskSize: "100% 100%",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/images/iphone-website-screen.webp"
                    alt="CSI Play on iPhone"
                    fill
                    sizes="(min-width: 1024px) 166px, 16vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CsiPlayMockupSection;
