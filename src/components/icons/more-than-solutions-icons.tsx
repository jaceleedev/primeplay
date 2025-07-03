import Image from "next/image";
import React from "react";

const MobileAppDevIcon = () => (
  <Image
    src="/icons/mobile-app-dev.svg"
    alt="모바일 앱 개발 아이콘"
    width={219}
    height={218}
    className="w-full h-full object-contain"
  />
);

const WebServiceDevIcon = () => (
  <Image
    src="/icons/web-service-dev.svg"
    alt="웹 서비스 개발 아이콘"
    width={225}
    height={224}
    className="w-full h-full object-contain"
  />
);

const UiUxDesignIcon = () => (
  <Image
    src="/icons/ui-ux-design.svg"
    alt="UX/UI 디자인 아이콘"
    width={217}
    height={217}
    className="w-full h-full object-contain"
  />
);

const ServicePlanningIcon = () => (
  <Image
    src="/icons/service-planning.svg"
    alt="서비스 기획 아이콘"
    width={217}
    height={217}
    className="w-full h-full object-contain"
  />
);

// 인덱스 기반 아이콘 배열 (서비스 순서와 동일)
export const moreThanSolutionsIcons: React.ComponentType[] = [
  MobileAppDevIcon, // 0: 모바일 앱 개발 / Mobile App Dev
  WebServiceDevIcon, // 1: 웹 서비스 개발 / Web Service Dev
  UiUxDesignIcon, // 2: UX/UI 디자인 / UX/UI Design
  ServicePlanningIcon, // 3: 서비스 기획 / Service Planning
];

// 하위 호환성을 위한 레거시 객체 (필요시 제거 가능)
export const moreThanSolutionsIconsLegacy: {
  [key: string]: React.ComponentType;
} = {
  "모바일 앱 개발": MobileAppDevIcon,
  "웹 서비스 개발": WebServiceDevIcon,
  "UX/UI 디자인": UiUxDesignIcon,
  "서비스 기획": ServicePlanningIcon,
};
