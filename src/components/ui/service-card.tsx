import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="flex flex-col items-center gap-y-6">
      {/* 아이콘 */}
      <div>{icon}</div>

      {/* 제목 */}
      <h3 className="font-paperlogy text-2xl font-bold text-center text-black">
        {title}
      </h3>

      {/* 설명 */}
      <p className="font-paperlogy text-2xl font-normal text-center text-black px-8 sm:px-12">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
