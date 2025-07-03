"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer
      className="text-white p-8 min-h-64"
      style={{ background: "#3B3B3B" }}
    >
      <div className="flex flex-col md:flex-row md:items-start gap-10">
        {/* Logo Section - navbar와 마진 맞춤 */}
        <div className="flex flex-col items-start text-left ml-6 md:ml-12 lg:ml-20 xl:ml-32 2xl:ml-40">
          <Image
            src="/logos/primeplay-footer-logo.svg"
            alt="Primeplay Footer Logo"
            width={110}
            height={110}
            className="mb-3"
          />
          <p className="text-white font-paperlogy text-lg font-bold leading-normal mb-2">
            {t("companyName")}
          </p>
          <p className="text-white font-paperlogy text-sm font-bold leading-normal">
            {t("copyright")}
          </p>
        </div>

        {/* Spacer - only on medium screens and up */}
        <div className="hidden md:block md:flex-1"></div>

        {/* Menu Group - navbar 오른쪽 마진과 맞춤 */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 ml-6 md:ml-0 md:mr-6 lg:mr-8 xl:mr-12 2xl:mr-16">
          <nav>
            <h6 className="text-[#9D9D9D] font-paperlogy text-lg font-bold leading-normal uppercase mb-3">
              {t("serviceInfo")}
            </h6>
            <Link
              href="/"
              className="text-white font-paperlogy text-sm font-normal leading-normal hover:opacity-80 block w-fit mb-2"
            >
              {t("serviceGuide")}
            </Link>
            <Link
              href="/faq"
              className="text-white font-paperlogy text-sm font-normal leading-normal hover:opacity-80 block w-fit mb-2"
            >
              {t("faq")}
            </Link>
            <Link
              href="/support"
              className="text-white font-paperlogy text-sm font-normal leading-normal hover:opacity-80 block w-fit mb-2"
            >
              {t("support")}
            </Link>
            <Link
              href="/"
              className="text-white font-paperlogy text-sm font-normal leading-normal hover:opacity-80 block w-fit"
            >
              {t("privacyPolicy")}
            </Link>
          </nav>

          <nav>
            <h6 className="text-[#9D9D9D] font-paperlogy text-lg font-bold leading-normal uppercase mb-3">
              {t("companyInfo")}
            </h6>
            <p className="text-white font-paperlogy text-sm font-normal leading-normal mb-2">
              {t("businessNumber")}
            </p>
            <p className="text-white font-paperlogy text-sm font-normal leading-normal mb-2">
              {t("phoneNumber")}
            </p>
            <p className="text-white font-paperlogy text-sm font-normal leading-normal mb-1">
              {t("addressLine1")}
            </p>
            <p className="text-white font-paperlogy text-sm font-normal leading-normal">
              {t("addressLine2")}
            </p>
          </nav>
        </div>
      </div>
    </footer>
  );
}
