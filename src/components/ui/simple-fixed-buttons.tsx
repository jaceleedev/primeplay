"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface ButtonConfig {
  logo: string;
  text: string;
  url: string;
  alt?: string;
  isExternal?: boolean;
}

interface SimpleFixedButtonsProps {
  buttons: ButtonConfig[];
  position?: "bottom" | "top";
}

export default function SimpleFixedButtons({
  buttons,
  position = "bottom",
}: SimpleFixedButtonsProps) {
  const router = useRouter();

  const handleButtonClick = (button: ButtonConfig) => {
    const isInternalLink =
      button.isExternal === false || button.url.startsWith("/");

    if (isInternalLink) {
      router.push(button.url);
    } else {
      window.open(button.url, "_blank", "noopener,noreferrer");
    }
  };

  const positionClass = position === "bottom" ? "bottom-6" : "top-6";

  return (
    <div className={`fixed ${positionClass} left-0 right-0 z-50 px-4`}>
      <div className="mx-auto flex w-fit flex-col sm:flex-row gap-4">
        {buttons.map((button, index) => (
          <button
            key={index}
            className="cursor-pointer flex items-center gap-4 px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5
                       bg-white rounded-[60px] hover:scale-105 transition-all duration-300
                       min-w-max"
            style={{
              boxShadow: "0px 3.5px 9.5px 5px rgba(0, 0, 0, 0.15)",
            }}
            onClick={() => handleButtonClick(button)}
          >
            <Image
              src={button.logo}
              alt={button.alt || button.text}
              width={32}
              height={32}
              className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 flex-shrink-0"
            />
            <span className="text-black font-pretendard font-normal text-sm md:text-base lg:text-lg xl:text-xl whitespace-nowrap">
              {button.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
