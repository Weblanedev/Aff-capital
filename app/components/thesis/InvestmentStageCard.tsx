import { getAssetUrl } from "../../lib/images";

const fintechImage = getAssetUrl("fintech.jpg");
const educationImage = getAssetUrl("education.jpg");
const energyImage = getAssetUrl("energy.jpg");

export type InvestmentStage = {
  number: string;
  title: string;
  description: string;
  tag: string;
  image: string;
  gradient: string;
};

export const investmentStages: InvestmentStage[] = [
  {
    number: "01",
    title: "Define",
    description:
      "A young, mobile-first population and under-penetrated infrastructure create outsized opportunities for software. We help founders define their vision, validate concepts, and build the foundation for scalable solutions.",
    tag: "Fintech & Infrastructure",
    image: fintechImage,
    gradient:
      "linear-gradient(135deg, rgba(43, 212, 167, 0.9), rgba(34, 197, 94, 0.8))",
  },
  {
    number: "02",
    title: "Build",
    description:
      "We target foundational layers: payments, credit, core banking, education enablement, energy generation. Building the digital backbone that powers Africa's growth.",
    tag: "Education & Banking",
    image: educationImage,
    gradient:
      "linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(99, 102, 241, 0.8))",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "Beyond capital, we provide hands-on support with go-to-market strategy, talent acquisition, and regulatory navigation. Launching Africa's next generation of digital leaders.",
    tag: "Energy & Growth",
    image: energyImage,
    gradient:
      "linear-gradient(135deg, rgba(245, 158, 11, 0.9), rgba(239, 68, 68, 0.8))",
  },
];

export function InvestmentStageCard({ stage }: { stage: InvestmentStage }) {
  return (
    <div
      className="stage-card relative overflow-hidden rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all duration-400 cursor-pointer min-h-[380px] lg:min-h-[450px] lg:hover:-translate-y-2.5 lg:hover:shadow-[0_30px_60px_rgba(0,0,0,0.25)]"
    >
      <div
        className="absolute inset-0 bg-cover bg-center brightness-[0.7]"
        style={{ backgroundImage: `url(${stage.image})` }}
      />
      <div
        className="absolute inset-0 mix-blend-multiply"
        style={{ background: stage.gradient }}
      />
      <div className="relative z-[2] flex h-full min-h-[380px] lg:min-h-[450px] flex-col justify-between gap-5 p-8 lg:p-10">
        <div>
          <div className="stage-number mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-base font-bold text-white backdrop-blur-md lg:h-[50px] lg:w-[50px] lg:text-xl">
            {stage.number}
          </div>
          <h4 className="mb-5 text-2xl font-bold text-white drop-shadow-md lg:text-[1.8rem]">
            {stage.title}
          </h4>
          <p className="m-0 text-[0.9rem] leading-relaxed text-white drop-shadow-md lg:text-base">
            {stage.description}
          </p>
        </div>
        <div className="flex items-center gap-2.5 text-sm font-medium text-white">
          <span>{stage.tag}</span>
          <div className="h-0.5 w-5 rounded-sm bg-white" />
        </div>
      </div>
    </div>
  );
}
