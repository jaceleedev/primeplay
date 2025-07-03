import MoreThanSolutionsCard from "@/components/ui/more-than-solutions-card";
import { useTranslations } from "next-intl";

const MoreThanSolutionsSection = () => {
  const t = useTranslations("WebAppDevPage.MoreThanSolutionsSection");

  // 서비스 개수 (메시지 파일의 services 배열 길이와 동일)
  const serviceCount = 4;

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2
          className="font-paperlogy font-bold text-black text-center text-3xl sm:text-4xl md:text-5xl uppercase mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          style={{ letterSpacing: "7.2px" }}
        >
          {t("title")}
        </h2>

        <p className="font-paperlogy font-medium text-black text-center text-lg sm:text-xl md:text-2xl lg:text-3xl mx-auto mb-16 sm:mb-20 md:mb-24">
          {t("subtitle")}
        </p>

        <div className="w-full flex justify-center">
          {/* 반응형 그리드: 350px부터 2x2, 큰 화면에서 1x4 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {Array.from({ length: serviceCount }).map((_, index) => {
              const serviceTitle = t(`services.${index}`);

              return (
                <div key={index} className="flex justify-center">
                  <MoreThanSolutionsCard
                    title={serviceTitle}
                    iconIndex={index}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreThanSolutionsSection;
