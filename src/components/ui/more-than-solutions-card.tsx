"use client";

import { moreThanSolutionsIcons } from "@/components/icons/more-than-solutions-icons";

interface MoreThanSolutionsCardProps {
  title: string;
  iconIndex: number;
}

const MoreThanSolutionsCard = ({
  title,
  iconIndex,
}: MoreThanSolutionsCardProps) => {
  // 인덱스 기반으로 아이콘 선택
  const IconComponent = moreThanSolutionsIcons[iconIndex];

  return (
    <div
      className="
        box-border 
        w-[150px] h-[195px] 
        sm:w-[160px] sm:h-[220px] 
        md:w-[180px] md:h-[240px]
        lg:w-[220px] lg:h-[280px]
        bg-[rgba(217,217,217,0.58)] 
        border border-white 
        shadow-[12px_17px_51px_rgba(0,0,0,0.22)] 
        backdrop-blur-[6px] 
        rounded-[17px] 
        text-center cursor-pointer 
        transition-all duration-500 
        flex flex-col 
        select-none font-bold text-black
        hover:border-black hover:scale-105
        active:scale-95 active:rotate-[1.7deg]
      "
    >
      {/* 아이콘 영역 - 작은 뷰포트에서 상단 패딩 대폭 증가 */}
      <div className="flex items-center justify-center pt-10 sm:pt-10 md:pt-12 lg:pt-14 pb-6 sm:pb-4 md:pb-3 lg:pb-4">
        <div
          className="
            w-[72px] h-[72px] 
            sm:w-[80px] sm:h-[80px] 
            md:w-[96px] md:h-[96px]
            lg:w-[112px] lg:h-[112px]
            flex items-center justify-center
          "
          style={{ aspectRatio: "1 / 1" }}
        >
          {IconComponent && <IconComponent />}
        </div>
      </div>

      {/* 여유 공간 */}
      <div className="flex-grow"></div>

      {/* 텍스트 영역 - 하단 고정 */}
      <div className="px-2 pb-3 sm:pb-4 md:pb-5 lg:pb-6">
        <p className="text-black font-paperlogy text-xs sm:text-sm md:text-base lg:text-lg font-normal text-center leading-normal">
          {title}
        </p>
      </div>
    </div>
  );
};

export default MoreThanSolutionsCard;
