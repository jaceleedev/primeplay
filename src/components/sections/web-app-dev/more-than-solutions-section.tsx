import MoreThanSolutionsCard from "@/components/ui/more-than-solutions-card";

const services = [
  { title: "모바일 앱 개발" },
  { title: "웹 서비스 개발" },
  { title: "UX/UI 디자인" },
  { title: "서비스 기획" },
];

const MoreThanSolutionsSection = () => {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2
          className="font-paperlogy font-bold text-black text-center text-3xl sm:text-4xl md:text-5xl uppercase mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          style={{ letterSpacing: "7.2px" }}
        >
          More than solutions
        </h2>

        <p className="font-paperlogy font-medium text-black text-center text-lg sm:text-xl md:text-2xl lg:text-3xl mx-auto mb-16 sm:mb-20 md:mb-24">
          암호화폐 비즈니스 도입부터 <br className="min-[540px]:hidden block" />{" "}
          개발, 마케팅, 세무까지 원스톱 솔루션 제공
        </p>

        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.title} className="flex justify-center">
                <MoreThanSolutionsCard title={service.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreThanSolutionsSection;
