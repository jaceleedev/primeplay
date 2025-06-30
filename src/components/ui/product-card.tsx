"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  isExternal: boolean;
  gradientColors?: {
    from: string;
    to: string;
  };
}

const ProductCard = ({
  icon,
  title,
  description,
  href,
  isExternal,
  gradientColors = { from: "#c60000", to: "#ff6d00" },
}: ProductCardProps) => {
  const router = useRouter();

  const gradientStyle = {
    "--gradient-from": gradientColors.from,
    "--gradient-to": gradientColors.to,
  } as React.CSSProperties;

  const handleClick = () => {
    if (isExternal) {
      // 외부 링크는 새 탭에서 열기
      window.open(href, "_blank", "noopener noreferrer");
    } else {
      // 내부 링크는 현재 탭에서 이동
      router.push(href);
    }
  };

  const CardContent = () => (
    <div className="product-card-content">
      {/* 아이콘 */}
      <div className="product-card-icon">{icon}</div>

      {/* 제목 */}
      <h3 className="product-card-title">{title}</h3>

      {/* 설명 */}
      <p className="product-card-description">{description}</p>
    </div>
  );

  // 내부 링크인 경우 Next.js Link 컴포넌트 사용
  if (!isExternal) {
    return (
      <Link href={href} className="block h-full">
        <div
          className="product-card cursor-pointer transition-transform duration-200 hover:scale-105 h-full"
          style={gradientStyle}
        >
          <CardContent />
        </div>
      </Link>
    );
  }

  // 외부 링크인 경우 클릭 이벤트 처리
  return (
    <div
      className="product-card cursor-pointer transition-transform duration-200 hover:scale-105 h-full"
      style={gradientStyle}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <CardContent />
    </div>
  );
};

export default ProductCard;
