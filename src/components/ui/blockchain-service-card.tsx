import Image from "next/image";

interface BlockchainServiceCardProps {
  imageSrc: string;
  imageFit: "cover" | "contain";
  title: string;
  description: string[];
}

const BlockchainServiceCard = ({
  imageSrc,
  imageFit,
  title,
  description,
}: BlockchainServiceCardProps) => {
  return (
    <div className="relative mt-16 w-full max-w-md rounded-[40px] bg-white pb-8 pt-32 shadow-[0px_5px_49.4px_6px_rgba(0,0,0,0.31)] px-5 sm:pb-10 sm:pt-32 lg:px-7 lg:pb-12 lg:pt-32">
      {/* Image Container */}
      <div className="absolute -top-16 left-1/2 flex h-40 w-[90%] -translate-x-1/2 items-center justify-center overflow-hidden rounded-4xl bg-white shadow-[0px_4px_8.3px_0px_rgba(0,0,0,0.25)]">
        <Image
          src={imageSrc}
          alt={title}
          width={200}
          height={200}
          className={`max-h-full max-w-full ${
            imageFit === "cover"
              ? "h-full w-full object-cover"
              : "h-auto w-auto object-contain p-2"
          }`}
          priority
        />
      </div>

      {/* Content */}
      <div className="w-full">
        <h3 className="font-paperlogy text-left text-[22px] font-semibold leading-tight text-black sm:text-[26px] lg:text-[30px]">
          {title}
        </h3>
        <p className="mt-5 whitespace-pre-line text-left font-paperlogy text-sm font-light leading-relaxed text-black sm:mt-6 sm:text-base">
          {description.join("\n")}
        </p>
      </div>
    </div>
  );
};

export default BlockchainServiceCard;
