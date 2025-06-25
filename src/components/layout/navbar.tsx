"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Navbar() {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const mobileDetailsRef = useRef<HTMLDetailsElement>(null);

  const handleLinkClick = () => {
    // Close desktop dropdown
    if (detailsRef.current) {
      detailsRef.current.removeAttribute("open");
    }
    // Close mobile dropdown
    if (mobileDetailsRef.current) {
      mobileDetailsRef.current.removeAttribute("open");
    }
    // Close mobile sidebar
    const drawerToggle = document.getElementById(
      "my-drawer-3"
    ) as HTMLInputElement | null;
    if (drawerToggle) {
      drawerToggle.checked = false;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        detailsRef.current &&
        !detailsRef.current.contains(event.target as Node)
      ) {
        detailsRef.current.removeAttribute("open");
      }
      if (
        mobileDetailsRef.current &&
        !mobileDetailsRef.current.contains(event.target as Node)
      ) {
        mobileDetailsRef.current.removeAttribute("open");
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

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
                  <details ref={detailsRef}>
                    <summary className="text-white text-center font-nanum-human text-2xl font-bold leading-normal hover:bg-transparent flex items-center">
                      사업영역
                    </summary>
                    <ul
                      className="menu rounded-box z-[1] w-52 p-2 shadow-lg mt-4"
                      style={{
                        background: "rgba(72, 72, 72, 0.9)",
                        backdropFilter: "blur(4px)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <li>
                        <Link
                          href="/viral-marketing"
                          className="text-white font-nanum-human text-lg font-medium rounded-md"
                          onClick={handleLinkClick}
                        >
                          바이럴 마케팅
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/web-app-dev"
                          className="text-white font-nanum-human text-lg font-medium rounded-md"
                          onClick={handleLinkClick}
                        >
                          Web/App 개발
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-white text-center font-nanum-human text-2xl font-bold leading-normal hover:bg-transparent"
                    onClick={handleLinkClick}
                  >
                    자주 묻는 질문
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-white text-center font-nanum-human text-2xl font-bold leading-normal hover:bg-transparent"
                    onClick={handleLinkClick}
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
              <details ref={mobileDetailsRef}>
                <summary className="text-white font-nanum-human text-2xl font-bold leading-normal flex items-center">
                  사업영역
                </summary>
                <ul className="p-2">
                  <li className="mb-2">
                    <Link
                      href="/viral-marketing"
                      className="text-white text-center font-nanum-human text-lg font-medium"
                      onClick={handleLinkClick}
                    >
                      바이럴 마케팅
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="/web-app-dev"
                      className="text-white text-center font-nanum-human text-lg font-medium"
                      onClick={handleLinkClick}
                    >
                      Web/App 개발
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li className="mb-4">
              <Link
                href="/"
                className="text-white font-nanum-human text-2xl font-bold leading-normal flex"
                onClick={handleLinkClick}
              >
                자주 묻는 질문
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="/"
                className="text-white font-nanum-human text-2xl font-bold leading-normal"
                onClick={handleLinkClick}
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
