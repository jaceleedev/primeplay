import Image from "next/image";
import React from "react";

const MobileAppDevIcon = () => (
  <Image
    src="/icons/mobile-app-dev.svg"
    alt="모바일 앱 개발 아이콘"
    width={219}
    height={218}
    style={{ width: "128px", height: "128px" }}
  />
);

const WebServiceDevIcon = () => (
  <Image
    src="/icons/web-service-dev.svg"
    alt="웹 서비스 개발 아이콘"
    width={225}
    height={224}
    style={{ width: "128px", height: "128px" }}
  />
);

const UiUxDesignIcon = () => (
  <Image
    src="/icons/ui-ux-design.svg"
    alt="UX/UI 디자인 아이콘"
    width={217}
    height={217}
    style={{ objectFit: "contain" }}
  />
);

const ServicePlanningIcon = () => (
  <Image
    src="/icons/service-planning.svg"
    alt="서비스 기획 아이콘"
    width={217}
    height={217}
    style={{ objectFit: "contain" }}
  />
);

export const moreThanSolutionsIcons: { [key: string]: React.ComponentType } = {
  "모바일 앱 개발": MobileAppDevIcon,
  "웹 서비스 개발": WebServiceDevIcon,
  "UX/UI 디자인": UiUxDesignIcon,
  "서비스 기획": ServicePlanningIcon,
};
