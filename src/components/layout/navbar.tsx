import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full z-50">
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div
            className="navbar w-full h-[100px]"
            style={{
              background: "rgba(72, 72, 72, 0.34)",
              backdropFilter: "blur(2px)",
            }}
          >
            <div className="flex-none md:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            {/* Logo */}
            <div className="ml-10 md:ml-20 lg:ml-40 xl:ml-60 2xl:ml-80">
              <Link href="/">
                <Image
                  src="/logos/primeplay-navbar-logo.svg"
                  alt="Primeplay Logo"
                  width={69}
                  height={42}
                  className="cursor-pointer"
                  priority
                />
              </Link>
            </div>

            {/* Spacer */}
            <div className="flex-1"></div>

            {/* Desktop Menu */}
            <div className="hidden md:block mr-8 md:mr-10 lg:mr-16 xl:mr-30 2xl:mr-40">
              <ul className="menu menu-horizontal space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-16 2xl:space-x-20">
                <li>
                  <Link
                    href="/business"
                    className="text-white text-center font-nanum-human text-2xl font-bold leading-normal hover:bg-transparent"
                  >
                    사업영역
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-white text-center font-nanum-human text-2xl font-bold leading-normal hover:bg-transparent"
                  >
                    자주 묻는 질문
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="text-white text-center font-nanum-human text-2xl font-bold leading-normal hover:bg-transparent"
                  >
                    고객지원
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul
            className="menu min-h-full w-80 p-4"
            style={{
              background: "rgba(72, 72, 72, 0.34)",
              backdropFilter: "blur(2px)",
            }}
          >
            <li className="mb-4">
              <Link
                href="/business"
                className="text-white text-center font-nanum-human text-2xl font-bold leading-normal"
              >
                사업영역
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="/faq"
                className="text-white text-center font-nanum-human text-2xl font-bold leading-normal"
              >
                자주 묻는 질문
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="/support"
                className="text-white text-center font-nanum-human text-2xl font-bold leading-normal"
              >
                고객지원
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
