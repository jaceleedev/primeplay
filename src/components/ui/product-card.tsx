export interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradientColors?: {
    from: string;
    to: string;
  };
}

const ProductCard = ({
  icon,
  title,
  description,
  gradientColors = { from: "#c60000", to: "#ff6d00" },
}: ProductCardProps) => {
  const gradientStyle = {
    "--gradient-from": gradientColors.from,
    "--gradient-to": gradientColors.to,
  } as React.CSSProperties;

  return (
    <div className="product-card" style={gradientStyle}>
      <div className="product-card-content">
        {/* 아이콘 */}
        <div className="product-card-icon">{icon}</div>

        {/* 제목 */}
        <h3 className="product-card-title">{title}</h3>

        {/* 설명 */}
        <p className="product-card-description">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
