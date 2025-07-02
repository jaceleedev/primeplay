import Image from "next/image";
import { pgServiceAdvantages } from "@/data/pg-service-advantages";

// 체크 아이콘 컴포넌트
const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full text-[#FF6D00]"
  >
    <path
      d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PgServiceAdvantagesSection = () => {
  return (
    <section className="w-full pt-20 sm:pt-24 md:pt-28 lg:pt-36 xl:pt-40 pb-24 sm:pb-28 md:pb-32 lg:pb-40 xl:pb-44 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* 메인 제목 */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24 lg:mb-28 xl:mb-32">
          <h2 className="font-paperlogy font-semibold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
            선정산 서비스의 장점
          </h2>
        </div>

        {/* 이미지와 텍스트 레이아웃 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center">
          {/* 왼쪽 이미지 */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <Image
                src="/images/smartphone-creditcard-with-alarm.webp"
                alt="선정산 서비스"
                width={500}
                height={600}
                className="w-full h-auto object-contain"
                priority={false}
              />
            </div>
          </div>

          {/* 오른쪽 텍스트 */}
          <div className="flex flex-col justify-center items-center lg:items-start">
            <div className="space-y-6 sm:space-y-8 w-full max-w-md lg:max-w-none">
              {/* 장점 리스트 */}
              {pgServiceAdvantages.map((advantage) => (
                <div key={advantage.id} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 mt-1">
                    <CheckIcon />
                  </div>
                  <p className="font-paperlogy text-black text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
                    {advantage.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PgServiceAdvantagesSection;
