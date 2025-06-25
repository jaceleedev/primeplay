"use client";

import ProductCard, { ProductCardProps } from "@/components/ui/product-card";

interface ProductSectionProps {
  cards: ProductCardProps[];
}

const ProductSection = ({ cards }: ProductSectionProps) => {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* OUR PRODUCT 타이틀 */}
        <div className="mb-16 sm:mb-20 md:mb-24 lg:mb-32 flex justify-center sm:justify-start">
          <h2
            className="
              font-paperlogy font-bold leading-normal text-black
              text-[28px] sm:text-[40px] md:text-[56px] lg:text-[72px] xl:text-[86px]
              text-center sm:text-left
              inline-block
            "
            style={{
              background: "linear-gradient(90deg, #C60000 0%, #FF6D00 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              width: "fit-content",
            }}
          >
            OUR
            <br />
            PRODUCT
          </h2>
        </div>

        {/* 카드 그리드 */}
        <div className="grid gap-x-5 gap-y-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-start">
          <div className="w-full flex justify-center sm:justify-start">
            <ProductCard {...cards[0]} />
          </div>
          {cards.slice(1).map((card, index) => (
            <div
              key={index + 1}
              className="w-full flex justify-center sm:justify-start"
            >
              <ProductCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
