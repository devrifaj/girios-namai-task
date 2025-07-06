import { ArrowDownIcon } from "@/icons";
import HeroSlider from "./HeroSlider";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="xl:pt-26 lg:pt-16 pt-10">
      {/* hero heading text */}
      <div className="flex flex-col sm:flex-row gap-4 lg:gap-[27px] items-center mb-[17px]">
        <span className="text-lg sm:text-xl lg:text-3xl font-semibold border border-border-1 rounded-[40px] inline-block pl-[19px] pt-[6px] pr-[18px] pb-[4px] ml-[8px] lg:-mt-[4px] tracking-[.3px]">
          A++
        </span>
        <h1 className="text-[24px] sm:text-[30px] md:text-[40px] lg:text-[57px] font-semibold leading-none">
          Individualių namų kvartalas
        </h1>
      </div>

      {/* hero slider */}
      <HeroSlider />

      {/* hero bottom card */}
      <div className="flex-between flex-col gap-6 lg:gap-0 lg:flex-row md:pl-10 xl:pl-[38px] md:pr-10 xl:pr-[36px] text-primary bg-black pt-[21px] pb-[22px] rounded-b-md">
        <div className="flex items-center sm:justify-start justify-center md:gap-[48px] sm:gap-4 gap-2 flex-wrap sm:flex-nowrap">
          {/* 1 */}
          <div className="hero-bottom-card xl:gap-1.5 gap-1 sm:gap-3">
            <span className="text-[13px] font-medium uppercase tracking-[.9px]">
              kambariAI
            </span>
            <div className="xl:block sm:hidden block w-[10px] h-px bg-primary"></div>
            <span className="text-lg font-bold -tracking-[.8px]">5</span>
          </div>

          {/* 2 */}
          <div className="hero-bottom-card xl:gap-1 gap-1 sm:gap-3">
            <span className="text-[13px] font-medium uppercase tracking-[1.2px]">
              KVADRATURA
            </span>
            <div className="xl:block sm:hidden block w-[10px] h-px bg-primary"></div>
            <span className="text-lg font-bold -tracking-[.8px]">
              121 m<sup className="text-[10px]">2</sup>
            </span>
          </div>

          {/* 3 */}
          <div className="hero-bottom-card xl:gap-1.5 gap-1 sm:gap-3">
            <span className="text-[13px] font-medium uppercase tracking-[1.7px]">
              Kaina
            </span>
            <div className="xl:block sm:hidden block w-[10px] h-px bg-primary"></div>
            <span className="text-lg font-bold -tracking-[.3px]">
              nuo 2.200 Eur/m<sup className="text-[10px]">2</sup>
            </span>
          </div>

          {/* 4 */}
          <div className="hero-bottom-card xl:gap-1.5 gap-1 sm:gap-3">
            <span className="text-[13px] font-medium uppercase tracking-[1.8px]">
              STATYBOS METAI
            </span>
            <div className="xl:block sm:hidden block w-[10px] h-px bg-primary"></div>
            <span className="text-lg font-bold -tracking-[.8px]">
              2025/2026 m.
            </span>
          </div>
        </div>

        {/* bottom link */}
        <Link
          href="#"
          className="flex items-center gap-[12px] rounded-lg pt-[14px] pb-[11px] leading-none pl-[20px] pr-[20px] bg-green text-sm font-medium uppercase tracking-[1.5px]"
        >
          projekto planas <ArrowDownIcon />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
