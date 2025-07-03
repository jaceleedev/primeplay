import Image from "next/image";
import WorkProcessCard from "@/components/ui/work-process-card";
import { useTranslations } from "next-intl";

const ArrowIcon = () => (
  <Image
    src="/icons/right-arrow.svg"
    alt="오른쪽 화살표 아이콘"
    width={36}
    height={96}
    className="w-full h-full"
  />
);

const WorkProcessSection = () => {
  const t = useTranslations("WebAppDevPage.WorkProcessSection");

  // 스텝 수는 메시지 파일의 steps 배열 길이와 동일
  const stepCount = 5;

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-full mx-auto flex flex-col items-center">
        <h2 className="font-paperlogy font-bold text-black text-center text-3xl sm:text-4xl lg:text-5xl mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          {t("title")}
        </h2>

        <p className="font-paperlogy font-medium text-black text-center text-2xl md:text-3xl lg:text-4xl mb-16 sm:mb-20 md:mb-24 lg:mb-28 xl:mb-32">
          {t.rich("subtitle", {
            br: (chunks) => <br className="min-[470px]:hidden block" />,
          })}
        </p>

        <div className="w-full flex justify-center">
          <div className="grid w-full grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-8 xl:gap-x-8 max-w-screen-2xl">
            {Array.from({ length: stepCount }).map((_, index) => {
              const stepKey = t(`steps.${index}.key`);
              const stepTitle = t(`steps.${index}.title`);

              const isLastInRowSmall = (index + 1) % 2 === 0;
              const isLastInRowMedium = (index + 1) % 3 === 0;
              const isLastItem = index === stepCount - 1;

              return (
                <div key={stepKey} className="relative flex justify-center">
                  <WorkProcessCard title={stepTitle} stepKey={stepKey} />

                  {!isLastItem && (
                    <div
                      className={`
                        absolute top-1/2 -translate-y-1/2 left-full -translate-x-1/2 z-10 
                        w-4 h-8 sm:w-5 sm:h-10 md:w-6 md:h-12 lg:w-7 lg:h-14 xl:w-8 xl:h-16
                        ml-2 sm:ml-3 xl:ml-4
                        ${isLastInRowSmall ? "hidden" : "block"}
                        ${isLastInRowMedium ? "sm:hidden" : "sm:block"}
                        xl:block
                      `}
                    >
                      <ArrowIcon />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;
