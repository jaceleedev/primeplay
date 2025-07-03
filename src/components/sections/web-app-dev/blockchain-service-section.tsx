import BlockchainServiceCard from "@/components/ui/blockchain-service-card";
import { useTranslations } from "next-intl";

// 정적 카드 데이터 (이미지와 스타일 정보만)
const cardStaticData = [
  {
    imageSrc: "/images/pg-payment.webp",
    imageFit: "cover" as const,
  },
  {
    imageSrc: "/images/over-the-counter.webp",
    imageFit: "contain" as const,
  },
];

const BlockchainServiceSection = () => {
  const t = useTranslations("WebAppDevPage.BlockchainServiceSection");

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-28">
            {cardStaticData.map((staticData, index) => {
              const cardTitle = t(`cards.${index}.title`);
              const cardDescription = t.raw(
                `cards.${index}.description`
              ) as string[];

              return (
                <div key={index} className="flex justify-center">
                  <BlockchainServiceCard
                    imageSrc={staticData.imageSrc}
                    imageFit={staticData.imageFit}
                    title={cardTitle}
                    description={cardDescription}
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

export default BlockchainServiceSection;
