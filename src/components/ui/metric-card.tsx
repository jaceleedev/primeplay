export interface MetricCardProps {
  defaultText: string;
  hoverText: string;
  hoverColor: string;
}

const MetricCard = ({
  defaultText,
  hoverText,
  hoverColor,
}: MetricCardProps) => {
  const firstChar = defaultText.charAt(0);
  const restOfText = defaultText.slice(1);

  return (
    <div
      className="metric-card"
      style={{ "--hover-color": hoverColor } as React.CSSProperties}
    >
      <div className="metric-top-card">
        <div className="metric-default-content">
          <span className="metric-default-text">
            <span style={{ color: hoverColor }}>{firstChar}</span>
            {restOfText}
          </span>
        </div>
      </div>
      <div className="metric-bottom-card">
        <div className="metric-card-content">
          <p className="metric-hover-text">{hoverText}</p>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
