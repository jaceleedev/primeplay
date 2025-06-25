interface SolutionSlideProps {
  imageSrc: string;
  title: string;
  listItems: string[];
}

const SolutionSlide = ({ imageSrc, title, listItems }: SolutionSlideProps) => {
  return (
    <div
      className="relative w-full aspect-[16/9] min-h-[450px] md:min-h-[550px] max-h-[720px] overflow-hidden"
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(113deg, rgba(2, 2, 2, 0.62) 20.59%, rgba(104, 104, 104, 0.00) 79.41%)",
        }}
      ></div>
      <div className="relative z-10 flex flex-col justify-start p-8 sm:p-12 md:p-16 lg:p-20 pt-16 sm:pt-20 md:pt-24 lg:pt-28">
        <div className="relative pl-4 sm:pl-8">
          <h2
            className="font-paperlogy font-semibold text-[#FF6D00] text-[40px] sm:text-[60px] lg:text-[80px] leading-normal mb-6 lg:mb-8"
            style={{
              textShadow: "0px 2px 5.7px rgba(0, 0, 0, 0.51)",
              WebkitTextStroke: "1px #FFF",
            }}
          >
            {title}
          </h2>
          <ul
            className="space-y-3 lg:space-y-4 ml-[0.5em]" // space-y로 리스트 아이템 간 간격 추가
          >
            {listItems.map((item, index) => (
              <li
                key={index}
                className="font-paperlogy font-semibold text-[#E3E3E3] text-[18px] sm:text-[24px] lg:text-[32px] leading-normal"
                style={{
                  textShadow: "0px 2px 5.7px rgba(0, 0, 0, 0.51)",
                  WebkitTextStroke: "1px #FFF",
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SolutionSlide;
