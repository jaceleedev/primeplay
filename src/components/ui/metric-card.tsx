"use client";

import { useTranslations } from "next-intl";

export interface MetricCardProps {
  id: string;
  defaultText: string;
  hoverColor: string;
}

const MetricCard = ({ id, defaultText, hoverColor }: MetricCardProps) => {
  const t = useTranslations("PlayToPSection");
  const firstChar = defaultText.charAt(0);
  const restOfText = defaultText.slice(1);

  // 모든 카드에 대해 3줄로 통일 (빈 문자열 제외)
  const getHoverText = (cardId: string): string => {
    const lines: string[] = [];

    for (let i = 1; i <= 3; i++) {
      const key = `${cardId}.hoverTextLine${i}` as any;
      const line = t(key);
      if (line && line.trim() !== "") {
        lines.push(line);
      }
    }

    return lines.join("\n");
  };

  const hoverText = getHoverText(id);

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
