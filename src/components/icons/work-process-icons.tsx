import Image from "next/image";
import React from "react";

const ConsultingIcon = () => (
  <Image
    src="/icons/consulting.svg"
    alt="컨설팅 아이콘"
    width={109}
    height={123}
    style={{ width: "128px", height: "auto" }}
  />
);

const PlanningIcon = () => (
  <Image
    src="/icons/planning.svg"
    alt="기획 아이콘"
    width={121}
    height={126}
    style={{ width: "128px", height: "auto" }}
  />
);

const DesignIcon = () => (
  <Image
    src="/icons/design.svg"
    alt="디자인 아이콘"
    width={128}
    height={129}
    style={{ objectFit: "contain" }}
  />
);

const DevelopmentIcon = () => (
  <Image
    src="/icons/development.svg"
    alt="개발 아이콘"
    width={128}
    height={128}
    style={{ objectFit: "contain" }}
  />
);

const OperationsIcon = () => (
  <Image
    src="/icons/operations.svg"
    alt="유지보수 아이콘"
    width={128}
    height={128}
    style={{ objectFit: "contain" }}
  />
);

export const workProcessIcons: { [key: string]: React.ComponentType } = {
  컨설팅: ConsultingIcon,
  기획: PlanningIcon,
  디자인: DesignIcon,
  개발: DevelopmentIcon,
  유지보수: OperationsIcon,
};
