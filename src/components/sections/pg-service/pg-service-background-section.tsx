import { ReactNode } from "react";

interface PgServiceBackgroundSectionProps {
  imageSrc: string;
  firstLine: ReactNode;
  secondLine: ReactNode;
}

const PgServiceBackgroundSection = ({
  imageSrc,
  firstLine,
  secondLine,
}: PgServiceBackgroundSectionProps) => {
  return (
    <section className="relative w-full">
      <div
        className="relative w-full aspect-[3/2] min-h-[400px] md:min-h-[500px] max-h-[1024px] overflow-hidden"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundPosition: "50%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* 오버레이 배경 */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(64, 64, 64, 0.33)" }}
        />

        {/* 텍스트 콘텐츠 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-0 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
            <p
              className="font-paperlogy font-semibold leading-normal mb-4"
              style={{
                fontSize: "clamp(1.5rem, 5vw, 3rem)",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              {firstLine}
            </p>
            <p
              className="font-paperlogy font-semibold leading-normal"
              style={{
                fontSize: "clamp(1.5rem, 5vw, 3rem)",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              {secondLine}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PgServiceBackgroundSection;
