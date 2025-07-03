import ServiceCard from "@/components/ui/service-card";
import { useTranslations } from "next-intl";
import React from "react";
import {
  SnsSocialMarketingIcon,
  ChannelStoryDdnIcon,
  NaverPerformanceMarketingIcon,
  BrandBlogIcon,
  KeywordUacGdnIcon,
  ExperientialMarketingIcon,
  DigitalKeywordSearchIcon,
  InstagramPerformanceMarketingIcon,
  NewsMediaMarketingIcon,
} from "@/components/icons/service-icons";

// messages.json의 cards 배열에 있는 key값과 아이콘 컴포넌트를 매핑합니다.
const serviceIcons: { [key: string]: React.ReactNode } = {
  "sns-social": <SnsSocialMarketingIcon />,
  "channel-story": <ChannelStoryDdnIcon />,
  "naver-marketing": <NaverPerformanceMarketingIcon />,
  "brand-blog": <BrandBlogIcon />,
  "keyword-uac": <KeywordUacGdnIcon />,
  experiential: <ExperientialMarketingIcon />,
  "digital-keyword": <DigitalKeywordSearchIcon />,
  "instagram-marketing": <InstagramPerformanceMarketingIcon />,
  "news-media": <NewsMediaMarketingIcon />,
};

const ServicesSection = () => {
  const t = useTranslations("ViralMarketingPage.ServicesSection");

  // 서비스 카드의 총 개수 (9개)
  const cardCount = 9;

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* 섹션 타이틀 */}
        <h2
          className="
            font-paperlogy font-bold text-black text-center
            text-3xl sm:text-4xl lg:text-5xl
            mb-10 sm:mb-12 md:mb-14 lg:mb-16
          "
        >
          {t("title")}
        </h2>

        {/* 섹션 부제 */}
        <p
          className="
            font-paperlogy font-medium text-black text-center
            text-2xl sm:text-3xl md:text-4xl lg:text-[48px]
            mb-16 sm:mb-20 md:mb-24 lg:mb-28 xl:mb-32"
        >
          {t.rich("subtitle", {
            br: (chunks) => <br className="max-[520px]:block hidden" />,
          })}
        </p>

        {/* --- 👇 개선된 반복문 적용 부분 --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-32">
          {Array.from({ length: cardCount }).map((_, index) => {
            const key = t(`cards.${index}.key`);
            return (
              <ServiceCard
                key={key}
                icon={serviceIcons[key]}
                title={t(`cards.${index}.title`)}
                description={t(`cards.${index}.description`)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
