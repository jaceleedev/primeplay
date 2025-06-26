import BlockchainServiceCard from "@/components/ui/blockchain-service-card";
import { blockchainServiceCards } from "@/data/blockchain-service-cards";

const BlockchainServiceSection = () => {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2
          className="font-paperlogy font-bold text-black text-center text-3xl sm:text-4xl md:text-5xl uppercase mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          style={{ letterSpacing: "7.2px" }}
        >
          Block Chain Service
        </h2>

        <p className="font-paperlogy font-medium text-black text-center text-lg sm:text-xl md:text-2xl lg:text-3xl mx-auto mb-16 sm:mb-20 md:mb-24">
          어디서도 볼 수 없는
          <br className="min-[540px]:hidden block" /> Prime Play의 자체 제작
          서비스
        </p>

        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-28">
            {blockchainServiceCards.map((service) => (
              <div key={service.title} className="flex justify-center">
                <BlockchainServiceCard
                  imageSrc={service.imageSrc}
                  imageFit={service.imageFit}
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockchainServiceSection;
