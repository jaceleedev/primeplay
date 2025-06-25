import React from "react";

interface BackgroundImageSectionProps {
  imageSrc: string;
  children: React.ReactNode;
}

const BackgroundImageSection = ({
  imageSrc,
  children,
}: BackgroundImageSectionProps) => {
  return (
    <section className="relative w-full">
      <div
        className="relative w-full aspect-[4096/2731] min-h-[400px] md:min-h-[500px] max-h-[1024px] overflow-hidden"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundPosition: "50%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundColor: "lightgray",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <p
              className="font-paperlogy font-semibold leading-normal text-2xl sm:text-3xl md:text-4xl lg:text-[48px]"
              style={{
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              {children}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundImageSection;
