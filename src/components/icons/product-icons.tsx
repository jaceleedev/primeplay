import Image from "next/image";

const iconClassName = "w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32";

export const PGPaymentIcon = () => (
  <Image
    src="/icons/pg-payment.svg"
    alt="PG 결제 대행"
    width={130}
    height={130}
    className={iconClassName}
    style={{
      width: "128px",
      height: "128px",
    }}
  />
);

export const ViralMarketingIcon = () => (
  <Image
    src="/icons/viral-marketing.svg"
    alt="바이럴 마케팅"
    width={130}
    height={130}
    className={iconClassName}
    style={{
      width: "128px",
      height: "128px",
    }}
  />
);

export const WebAppDevelopmentIcon = () => (
  <Image
    src="/icons/web-app-development.svg"
    alt="Web/App 개발"
    width={121}
    height={124}
    className={iconClassName}
    style={{
      width: "128px",
      height: "128px",
    }}
  />
);

export const SNSPlayIcon = () => (
  <Image
    src="/icons/sns-play.svg"
    alt="SNS PLAY"
    width={129}
    height={139}
    className={iconClassName}
    style={{
      width: "128px",
      height: "128px",
    }}
    priority={false}
  />
);

export const CSIPlayIcon = () => (
  <Image
    src="/icons/csi-play.svg"
    alt="CSI PLAY"
    width={128}
    height={141}
    className={iconClassName}
    style={{
      width: "auto",
      height: "100%",
    }}
  />
);

export const TYPlayIcon = () => (
  <Image
    src="/icons/ty-play.png"
    alt="TY PLAY"
    width={170}
    height={170}
    className={iconClassName}
    style={{ objectFit: "contain" }}
  />
);
