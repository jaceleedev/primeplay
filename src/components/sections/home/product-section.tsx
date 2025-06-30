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
              text-center sm:text-left
              inline-block
            "
            style={{
              fontSize: "clamp(3rem, 10vw, 5.375rem)", // 48px to 86px
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
        <div className="grid auto-rows-fr grid-cols-1 justify-items-center gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <ProductCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
