import Image from "next/image";

// 아이콘 파일명 매핑
const iconFileMap: { [key: string]: string } = {
  consulting: "consulting.svg",
  planning: "planning.svg",
  design: "design.svg",
  development: "development.svg",
  maintenance: "maintenance.svg",
};

// 배경색 매핑
const backgroundColors: { [key: string]: string } = {
  consulting: "#F7BE6D",
  planning: "#FFB347",
  design: "#FA9C1B",
  development: "#F58216",
  maintenance: "#F05E16",
};

interface WorkProcessCardProps {
  title: string;
  stepKey: string;
}

const WorkProcessCard = ({ title, stepKey }: WorkProcessCardProps) => {
  // stepKey 우선, 없으면 title로 fallback
  const iconFile =
    iconFileMap[stepKey] || iconFileMap[title] || "consulting.svg";
  const backgroundColor =
    backgroundColors[stepKey] || backgroundColors[title] || "#D9D9D9";

  // alt 텍스트 생성
  const altText = `${title} 아이콘`;

  return (
    <div
      className="
        flex flex-col items-center justify-center 
        w-full min-w-36 max-w-[200px]
        aspect-square
        rounded-lg sm:rounded-xl xl:rounded-[20px]
        p-3 sm:p-4
      "
      style={{ backgroundColor }}
    >
      {/* 아이콘 영역 */}
      <div className="flex-grow flex items-center justify-center mb-3 xl:mb-4">
        <div className="w-16 h-16 xl:w-20 xl:h-20 relative">
          <Image
            src={`/icons/${iconFile}`}
            alt={altText}
            fill
            className="object-contain"
            sizes="(max-width: 1280px) 64px, 80px"
          />
        </div>
      </div>

      {/* 텍스트 영역 */}
      <p
        className="
        text-black font-paperlogy font-normal text-center leading-normal
        text-base xl:text-lg
        px-1
      "
      >
        {title}
      </p>
    </div>
  );
};

export default WorkProcessCard;
