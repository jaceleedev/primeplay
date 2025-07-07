"use client";

import ProductCard, { ProductCardProps } from "@/components/ui/product-card";
import { useTranslations } from "next-intl";
import {
  PGPaymentIcon,
  ViralMarketingIcon,
  WebAppDevelopmentIcon,
  SNSPlayIcon,
  CSIPlayIcon,
  TYPlayIcon,
} from "@/components/icons/product-icons";

interface ProductData {
  key: string;
  icon: React.ReactNode;
  href: string;
  isExternal: boolean;
  gradientColors: {
    from: string;
    to: string;
  };
}

const ProductSection = () => {
  const t = useTranslations("HomePage.ProductSection");

  // Static product data that doesn't change between languages
  const productData: ProductData[] = [
    {
      key: "pgPayment",
      icon: <PGPaymentIcon />,
      href: "/pg-service",
      isExternal: false,
      gradientColors: { from: "#C60000", to: "#FF6D00" },
    },
    {
      key: "viralMarketing",
      icon: <ViralMarketingIcon />,
      href: "/viral-marketing",
      isExternal: false,
      gradientColors: { from: "#3300ED", to: "#00FF62" },
    },
    {
      key: "webAppDev",
      icon: <WebAppDevelopmentIcon />,
      href: "/web-app-dev",
      isExternal: false,
      gradientColors: { from: "#6C00AA", to: "#FF2684" },
    },
    {
      key: "snsPlay",
      icon: <SNSPlayIcon />,
      href: "/",
      isExternal: false,
      gradientColors: { from: "#FF6D00", to: "#C60000" },
    },
    {
      key: "csiPlay",
      icon: <CSIPlayIcon />,
      href: "https://csi-play.com",
      isExternal: true,
      gradientColors: { from: "#00FF62", to: "#3300ED" },
    },
    {
      key: "tyPlay",
      icon: <TYPlayIcon />,
      href: "https://ty-play.com",
      isExternal: true,
      gradientColors: { from: "#FF2684", to: "#6C00AA" },
    },
  ];

  // Generate product cards with translated content
  const getProductCards = (): ProductCardProps[] => {
    return productData.map((product) => {
      const productKey = `products.${product.key}` as any;

      return {
        icon: product.icon,
        title: t(`${productKey}.title`),
        description: (
          <>
            {t(`${productKey}.description`)
              .split("\n")
              .map((line, index, array) => (
                <span key={index}>
                  {line}
                  {index < array.length - 1 && <br />}
                </span>
              ))}
          </>
        ),
        href: product.href,
        isExternal: product.isExternal,
        gradientColors: product.gradientColors,
        buttonText: t("viewDetails"), // 다국어 지원 버튼 텍스트 추가
      };
    });
  };

  const productCards = getProductCards();

  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* 제목 - 다국어 지원 */}
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
              whiteSpace: "pre-line", // 줄바꿈 지원
            }}
          >
            {t("title")}
          </h2>
        </div>

        {/* 카드 그리드 */}
        <div className="grid auto-rows-fr grid-cols-1 justify-items-center gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {productCards.map((card, index) => (
            <ProductCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
