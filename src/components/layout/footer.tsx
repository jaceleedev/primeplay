import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="text-white p-10 min-h-72"
      style={{ background: "#3B3B3B" }}
    >
      <div className="flex flex-col md:flex-row md:items-start gap-12">
        {/* Logo Section */}
        <div className="flex flex-col items-start text-left ml-10 md:ml-20 lg:ml-40 xl:ml-60 2xl:ml-80">
          <Image
            src="/logos/primeplay-footer-logo.svg"
            alt="Primeplay Footer Logo"
            width={132}
            height={132}
            className="mb-4"
          />
          <p className="text-white font-paperlogy text-xl font-bold leading-normal mb-2">
            Prime Play Co., Ltd.
          </p>
          <p className="text-white font-paperlogy text-sm font-bold leading-normal">
            © 2022 PRIMEPLAY. All rights reserved.
          </p>
        </div>

        {/* Spacer - only on medium screens and up */}
        <div className="hidden md:block md:flex-1"></div>

        {/* Menu Group - aligned with logo margin on mobile, right-aligned on desktop */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 ml-10 md:ml-0 md:mr-8 lg:mr-10 xl:mr-16 2xl:mr-20">
          <nav>
            <h6 className="text-[#9D9D9D] font-paperlogy text-xl font-bold leading-normal uppercase mb-4">
              SERVICE INFO
            </h6>
            <Link
              href="/"
              className="text-white font-paperlogy text-sm font-normal leading-normal hover:opacity-80 block w-fit mb-2"
            >
              서비스 안내
            </Link>
            <Link
              href="/"
              className="text-white font-paperlogy text-sm font-normal leading-normal hover:opacity-80 block w-fit mb-2"
            >
              자주 묻는 질문
            </Link>
            <Link
              href="/"
              className="text-white font-paperlogy text-sm font-normal leading-normal hover:opacity-80 block w-fit mb-2"
            >
              고객지원
            </Link>
            <Link
              href="/"
              className="text-white font-paperlogy text-sm font-normal leading-normal hover:opacity-80 block w-fit"
            >
              개인정보처리방침
            </Link>
          </nav>

          <nav>
            <h6 className="text-[#9D9D9D] font-paperlogy text-xl font-bold leading-normal uppercase mb-4">
              COMPANY INFO
            </h6>
            <p className="text-white font-paperlogy text-sm font-normal leading-normal mb-2">
              357-86-00725
            </p>
            <p className="text-white font-paperlogy text-sm font-normal leading-normal mb-2">
              02-6095-2685
            </p>
            <p className="text-white font-paperlogy text-sm font-normal leading-normal mb-1">
              서울특별시 강서구 강서로 466,
            </p>
            <p className="text-white font-paperlogy text-sm font-normal leading-normal">
              7층 702호(등촌동, 우리벤처타운)
            </p>
          </nav>
        </div>
      </div>
    </footer>
  );
}
