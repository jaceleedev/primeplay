import Image from "next/image";

const icons = [
  { name: "Instagram", src: "/icons/instagram.svg" },
  { name: "Google", src: "/icons/google.svg" },
  { name: "Naver", src: "/icons/naver.svg" },
  { name: "Facebook", src: "/icons/facebook.svg" },
  { name: "Telegram", src: "/icons/telegram.svg" },
  { name: "KakaoTalk", src: "/icons/kakaotalk.svg" },
  { name: "YouTube", src: "/icons/youtube.svg" },
  { name: "TikTok", src: "/icons/tiktok.svg" },
];

const ChannelSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-black text-center text-3xl sm:text-4xl md:text-[48px] font-medium font-paperlogy leading-normal">
          다양한 채널과 함께합니다
        </h2>
        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 max-w-4xl mx-auto grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-3 justify-items-center gap-y-8 sm:gap-y-12 md:gap-y-16 gap-x-2 sm:gap-x-4 md:gap-x-6 lg:gap-x-8">
          {icons.map((icon) => (
            <div
              key={icon.name}
              className="relative w-32 h-32 md:w-[150px] md:h-[150px] flex items-center justify-center p-2"
            >
              <Image
                src={icon.src}
                alt={`${icon.name} logo`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChannelSection;
