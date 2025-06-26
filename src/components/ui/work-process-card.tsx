import { workProcessIcons } from "@/components/icons/work-process-icons";

const backgroundColors: { [key: string]: string } = {
  컨설팅: "#F7BE6D",
  기획: "#FFB347",
  디자인: "#FA9C1B",
  개발: "#F58216",
  유지보수: "#F05E16",
};

const WorkProcessCard = ({ title }: { title: string }) => {
  const Icon = workProcessIcons[title];
  const backgroundColor = backgroundColors[title] || "#D9D9D9";

  return (
    <div
      className="flex flex-col items-center justify-center w-[230px] min-h-70 rounded-[20px] p-4"
      style={{ backgroundColor }}
    >
      <div className="flex-grow flex items-center justify-center pt-4 pb-4 md:pb-5 lg:pb-6">
        <div className="w-32 h-32">{Icon && <Icon />}</div>
      </div>
      <p className="text-black font-paperlogy text-xl md:text-2xl xl:text-3xl font-normal text-center leading-normal mt-2">
        {title}
      </p>
    </div>
  );
};

export default WorkProcessCard;
