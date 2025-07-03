"use client";

import { Link } from "@/i18n/navigation";
import { ReactNode, CSSProperties } from "react";

export interface ProductCardProps {
  icon: ReactNode;
  title: string;
  description: ReactNode;
  href: string;
  isExternal: boolean;
  gradientColors?: {
    from: string;
    to: string;
  };
  buttonText?: string; // 버튼 텍스트를 prop으로 받도록 추가
}

const ProductCard = ({
  icon,
  title,
  description,
  href,
  isExternal,
  gradientColors = { from: "#c60000", to: "#ff6d00" },
  buttonText = "상세보기", // 기본값 설정 (하위 호환성)
}: ProductCardProps) => {
  const gradientStyle = {
    "--gradient-from": gradientColors.from,
    "--gradient-to": gradientColors.to,
  } as CSSProperties;

  const buttonGradientStyle = {
    background: `linear-gradient(95deg, ${gradientColors.from} 0%, ${gradientColors.to} 100%)`,
  };

  const buttonContent = (
    <button
      className="font-paperlogy text-white py-2 px-6 rounded-[10px] cursor-pointer transition-all duration-200 hover:shadow-lg"
      style={buttonGradientStyle}
    >
      {buttonText}
    </button>
  );

  return (
    <div
      className="product-card transition-transform duration-200 hover:scale-105 h-full cursor-pointer"
      style={gradientStyle}
    >
      <div className="product-card-content">
        {/* 아이콘 */}
        <div className="product-card-icon">{icon}</div>

        {/* 제목 */}
        <h3 className="product-card-title">{title}</h3>

        {/* 설명 */}
        <div className="product-card-description">{description}</div>

        <div className="flex justify-center items-center mt-8">
          {isExternal ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
              aria-label={`${title} - ${buttonText}`}
            >
              {buttonContent}
            </a>
          ) : (
            <Link
              href={href}
              className="inline-block"
              aria-label={`${title} - ${buttonText}`}
            >
              {buttonContent}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
