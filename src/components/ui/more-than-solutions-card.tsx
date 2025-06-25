"use client";

import { moreThanSolutionsIcons } from "@/components/icons/more-than-solutions-icons";

const MoreThanSolutionsCard = ({ title }: { title: string }) => {
  const Icon = moreThanSolutionsIcons[title];
  return (
    <div
      className="
        box-border w-[190px] h-[254px] 
        bg-[rgba(217,217,217,0.58)] 
        border border-white 
        shadow-[12px_17px_51px_rgba(0,0,0,0.22)] 
        backdrop-blur-[6px] 
        rounded-[17px] 
        text-center cursor-pointer 
        transition-all duration-500 
        flex flex-col items-center justify-center 
        select-none font-bold text-black
        hover:border-black hover:scale-105
        active:scale-95 active:rotate-[1.7deg]
      "
    >
      <div className="flex-grow flex items-center justify-center pb-4">
        <div className="w-32 h-32">{Icon && <Icon />}</div>
      </div>
      <p className="text-black font-paperlogy text-xl font-normal text-center leading-normal px-2">
        {title}
      </p>
    </div>
  );
};

export default MoreThanSolutionsCard;
