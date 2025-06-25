export interface MetricCardProps {
  defaultText: string;
  hoverText: string;
  hoverColor?: string;
}

const MetricCard = ({
  defaultText,
  hoverText,
  hoverColor = "#0a3cff",
}: MetricCardProps) => {
  return (
    <div
      className="metric-card"
      style={{ "--hover-color": hoverColor } as React.CSSProperties}
    >
      <div className="metric-top-card">
        <div className="metric-default-content">
          <span className="metric-default-text">{defaultText}</span>
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
