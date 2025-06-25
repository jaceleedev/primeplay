import { workProcessIcons } from "@/components/icons/work-process-icons";

const WorkProcessCard = ({ title }: { title: string }) => {
  const Icon = workProcessIcons[title];
  return (
    <div className="flex flex-col items-center justify-center w-[230px] min-h-70 rounded-[20px] bg-[#D9D9D9] p-4">
      <div className="flex-grow flex items-center justify-center pb-8 md:pb-10 lg:pb-12">
        <div className="w-32 h-32">{Icon && <Icon />}</div>
      </div>
      <p className="text-black font-paperlogy text-xl md:text-2xl xl:text-3xl font-normal text-center leading-normal mt-4">
        {title}
      </p>
    </div>
  );
};

export default WorkProcessCard;
