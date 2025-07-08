// lib/json-ld.ts - 완전한 JSON-LD 스키마 모음

// 기본 Organization 스키마 (기존 유지 + 확장)
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Prime Play",
  alternateName: "프라임플레이",
  url: "https://primeplay.kr",
  logo: "https://primeplay.kr/logos/primeplay-navbar-logo.svg",
  description:
    "마케팅, 결제대행, web/app 기획부터 제작까지 종합 디지털 솔루션 대행사",
  foundingDate: "2022",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "466, Gangseo-ro, Gangseo-gu, 7th Floor, 702 (Deungchon-dong, Woori Venture Town)",
    addressLocality: "Seoul",
    addressCountry: "KR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+82-2-6095-2685",
    contactType: "customer service",
    availableLanguage: ["Korean", "English", "Japanese", "Chinese"],
  },
  sameAs: ["https://csi-play.com", "https://ty-play.com"],
  areaServed: "KR",
  knowsAbout: [
    "Digital Marketing",
    "Payment Gateway",
    "Web Development",
    "App Development",
    "Viral Marketing",
    "Blockchain Services",
  ],
};

// 기본 WebSite 스키마 (기존 유지 + 확장)
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Prime Play",
  url: "https://primeplay.kr",
  description: "종합 디지털 솔루션 대행사",
  inLanguage: ["ko-KR", "en-US", "ja-JP", "zh-CN"],
  publisher: {
    "@type": "Organization",
    name: "Prime Play",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://primeplay.kr/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

// 기본 Service 스키마 (기존 유지)
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "디지털 마케팅 및 결제 솔루션",
  provider: {
    "@type": "Organization",
    name: "Prime Play",
  },
  serviceType: [
    "Digital Marketing",
    "Payment Gateway",
    "Web Development",
    "App Development",
  ],
  areaServed: "KR",
};

// === 페이지별 스키마 ===

// 홈페이지용 스키마
export const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Prime Play - 종합 디지털 솔루션 대행사",
  description: "마케팅부터 결제, 개발까지 원스톱 디지털 솔루션",
  url: "https://primeplay.kr",
  mainEntity: {
    "@type": "Organization",
    "@id": "https://primeplay.kr/#organization",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://primeplay.kr",
      },
    ],
  },
};

// 바이럴 마케팅 페이지용 스키마
export const viralMarketingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "바이럴 마케팅 서비스",
  description:
    "SNS 마케팅, 네이버 마케팅, 브랜드 블로그 등 검증된 바이럴 마케팅 서비스",
  provider: {
    "@type": "Organization",
    name: "Prime Play",
  },
  serviceType: "Digital Marketing",
  category: "Marketing Services",
  areaServed: "KR",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "바이럴 마케팅 서비스",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SNS 소셜 마케팅",
          description: "SNS 광고를 통해 브랜드 인지도 및 인게이지먼트 개선",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "네이버 퍼포먼스 마케팅",
          description: "네이버 키워드, 블로그, 카페, 이미지, 플레이스 노출",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "브랜드 블로그",
          description: "브랜드 전용 블로그 제작 및 콘텐츠 전략",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "인스타그램 마케팅",
          description: "Instagram 계정 성장 및 최적화 관리",
        },
      },
    ],
  },
};

// 웹/앱 개발 페이지용 스키마
export const webAppDevSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "웹/앱 개발 서비스",
  description: "기획부터 디자인, 개발, 유지보수까지 웹과 앱 개발의 모든 과정",
  provider: {
    "@type": "Organization",
    name: "Prime Play",
  },
  serviceType: "Software Development",
  category: "Web Development",
  areaServed: "KR",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "웹/앱 개발 서비스",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "웹사이트 개발",
          description: "반응형 웹사이트 및 웹 애플리케이션 개발",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "모바일 앱 개발",
          description: "iOS 및 Android 모바일 애플리케이션 개발",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "UX/UI 디자인",
          description: "사용자 경험 및 인터페이스 디자인",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "블록체인 서비스",
          description: "코인 월렛 및 OTC 거래소 개발",
        },
      },
    ],
  },
  offers: {
    "@type": "Offer",
    description: "웹사이트 및 모바일 앱 개발 서비스",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "KRW",
      price: "협의",
    },
  },
};

// PG 서비스 페이지용 스키마
export const pgServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "PG 결제 서비스",
  description: "국내외 결제 대행 서비스와 빠른 정산 시스템",
  provider: {
    "@type": "Organization",
    name: "Prime Play",
  },
  serviceType: "Payment Processing",
  category: "Financial Services",
  areaServed: "KR",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "PG 결제 서비스",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "국내 결제 대행",
          description: "빠른 정산 및 POS, 단말기 지원",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "해외 결제 대행",
          description: "간편 API 연동 및 글로벌 단말기 지원",
        },
      },
    ],
  },
  feesAndCommissionsSpecification: "업종별 상이",
};

// CSI-PLAY 페이지용 스키마
export const csiPlaySchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CSI-PLAY",
  description:
    "주식, 코인, 부동산 투자자들을 위한 정보 공유 및 자동매매 커뮤니티 플랫폼",
  url: "https://csi-play.com",
  provider: {
    "@type": "Organization",
    name: "Prime Play",
  },
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "KRW",
  },
  featureList: [
    "투자 정보 공유 커뮤니티",
    "포인트 시스템 및 이벤트",
    "실시간 시장 데이터",
    "자동매매 프로그램",
  ],
};

// FAQ 페이지용 스키마
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "비사업자도 카드결제 서비스 이용 가능한가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "네. 사업자가 없어도 가능합니다. 노점상 샵인샵 등 전부 가능합니다.",
      },
    },
    {
      "@type": "Question",
      name: "웹사이트와 앱 개발 중 어느 것을 먼저 시작해야 하나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "타깃 사용자가 누구인지에 따라 다릅니다. 정보 중심이면 웹 우선, 푸시알림·위치기반 서비스 등 모바일 특화 기능이 필요하면 앱이 우선입니다. 일반적으로는 웹 → 반응형 → 앱 순으로 제작합니다.",
      },
    },
    {
      "@type": "Question",
      name: "블로그 마케팅으로 실제 매출이 증가하나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "블로그 운영은 장기적 관점에서 고객 신뢰 구축 후 매출로 연결된다고 평가되고 있습니다. 프라임플레이에서는 상담을 통하여 적절한 방식과 성과 가능성이 높은 매체를 선별 후 전략적으로 운영하고 있습니다.",
      },
    },
    {
      "@type": "Question",
      name: "개발 비용은 어느 정도 예상해야 하나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "기능에 따라 다릅니다. 인력과 기간 및 기타 상세기준에 따라 다르며, 상세한 내용을 상담을 통해 확답드릴 수 있습니다.",
      },
    },
    {
      "@type": "Question",
      name: "카드결제 입금은 언제 정산되나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "국내 PG사는 통상적으로 영업일 기준으로 D+3 정산되고 있지만, 프라임플레이에서는 수수료와 조건에 따라 즉시 또는 다음날에 정산을 진행하고 있습니다.",
      },
    },
  ],
};

// 고객지원 페이지용 스키마
export const supportSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "고객지원 - Prime Play",
  description: "Prime Play 고객지원 및 문의 페이지",
  url: "https://primeplay.kr/support",
  mainEntity: {
    "@type": "Organization",
    name: "Prime Play",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://primeplay.kr",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "고객지원",
        item: "https://primeplay.kr/support",
      },
    ],
  },
};

// LocalBusiness 스키마 (지역 비즈니스용)
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Prime Play",
  image: "https://primeplay.kr/logos/primeplay-navbar-logo.svg",
  "@id": "https://primeplay.kr",
  url: "https://primeplay.kr",
  telephone: "+82-2-6095-2685",
  address: {
    "@type": "PostalAddress",
    streetAddress: "466, Gangseo-ro, Gangseo-gu, 7th Floor, 702",
    addressLocality: "Seoul",
    addressRegion: "Seoul",
    postalCode: "07548",
    addressCountry: "KR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.5668657,
    longitude: 126.8413718,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
};
