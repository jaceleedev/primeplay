import Image from "next/image";

const iconClassName = "w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32";

export const PGPaymentIcon = () => (
  <Image
    src="/icons/pg-payment.svg"
    alt="PG 결제 대행"
    width={128}
    height={128}
    className={iconClassName}
  />
);

export const ViralMarketingIcon = () => (
  <Image
    src="/icons/viral-marketing.svg"
    alt="바이럴 마케팅"
    width={128}
    height={128}
    className={iconClassName}
  />
);

export const WebAppDevelopmentIcon = () => (
  <Image
    src="/icons/web-app-development.svg"
    alt="Web/App 개발"
    width={128}
    height={128}
    className={iconClassName}
  />
);

export const SNSPlayIcon = () => (
  <Image
    src="/icons/sns-play.svg"
    alt="SNS PLAY"
    width={128}
    height={128}
    className={iconClassName}
  />
);

export const CSIPlayIcon = () => (
  <Image
    src="/icons/csi-play.svg"
    alt="CSI PLAY"
    width={128}
    height={128}
    className={iconClassName}
  />
);

export const TYPlayIcon = () => (
  <Image
    src="/icons/ty-play.png"
    alt="TY PLAY"
    width={128}
    height={128}
    className={iconClassName}
  />
);
