import Image from "next/image";
import WorkProcessCard from "@/components/ui/work-process-card";

const steps = [
  { title: "컨설팅" },
  { title: "기획" },
  { title: "디자인" },
  { title: "개발" },
  { title: "유지보수" },
];

const ArrowIcon = () => (
  <Image
    src="/icons/right-arrow.svg"
    alt="오른쪽 화살표 아이콘"
    width={24}
    height={44}
  />
);

const WorkProcessSection = () => {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-full mx-auto flex flex-col items-center">
        <h2
          className="
            font-paperlogy font-bold text-black text-center
            text-3xl sm:text-4xl lg:text-5xl
            mb-10 sm:mb-12 md:mb-14 lg:mb-16
          "
        >
          Work Process
        </h2>

        <p
          className="
            font-paperlogy font-medium text-black text-center
            text-2xl sm:text-3xl md:text-4xl lg:text-[48px]
            mb-16 sm:mb-20 md:mb-24 lg:mb-28 xl:mb-32"
        >
          프로젝트의 진행 단계에 <br className="min-[470px]:hidden block" />{" "}
          상관없이 구현합니다.
        </p>

        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-16 gap-y-8 max-w-screen-2xl">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="work-process-item relative flex justify-center"
              >
                <WorkProcessCard title={step.title} />
                {index < steps.length - 1 && (
                  <div className="arrow-container absolute top-1/2 -translate-y-1/2 -right-11 h-full items-center justify-center hidden sm:flex">
                    <ArrowIcon />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;
