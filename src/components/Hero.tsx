import { ArrowDownIcon } from "@/icons";
import HeroSlider from "./HeroSlider";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="pt-26">
      {/* hero heading text */}
      <div className="flex gap-[29px] items-center mb-4">
        <span className="text-3xl font-semibold border border-[#707070] rounded-[40px] inline-block pl-5 pt-[7px] pr-[17px] pb-1 ml-2">
          A++
        </span>
        <h1 className="text-[57px] font-semibold">
          Individualių namų kvartalas
        </h1>
      </div>

      {/* hero slider */}
      <HeroSlider />

      {/* hero bottom card */}
      <div className="flex-between px-[38px] text-[#FAFAFA] bg-foreground pt-[22px] pb-5 rounded-b-md">
        <div className="flex items-center gap-[48px]">
          {/* 1 */}
          <div className="flex items-center gap-1.5">
            <span className="text-[13px] font-medium uppercase tracking-[.9px]">
              kambariAI
            </span>
            <div className="w-[10px] h-px bg-[#FAFAFA]"></div>
            <span className="text-lg font-bold -tracking-[.8px]">5</span>
          </div>

          {/* 2 */}
          <div className="flex items-center gap-1">
            <span className="text-[13px] font-medium uppercase tracking-[1.2px]">
              KVADRATURA
            </span>
            <div className="w-[10px] h-px bg-[#FAFAFA]"></div>
            <span className="text-lg font-bold -tracking-[.8px]">
              121 m<sup className="text-[10px]">2</sup>
            </span>
          </div>

          {/* 3 */}
          <div className="flex items-center gap-1.5">
            <span className="text-[13px] font-medium uppercase tracking-[1.7px]">
              Kaina
            </span>
            <div className="w-[10px] h-px bg-[#FAFAFA]"></div>
            <span className="text-lg font-bold -tracking-[.3px]">
              nuo 2.200 Eur/m<sup className="text-[10px]">2</sup>
            </span>
          </div>

          {/* 4 */}
          <div className="flex items-center gap-1.5">
            <span className="text-[13px] font-medium uppercase tracking-[1.8px]">
              STATYBOS METAI
            </span>
            <div className="w-[10px] h-px bg-[#FAFAFA]"></div>
            <span className="text-lg font-bold -tracking-[.8px]">
              2025/2026 m.
            </span>
          </div>
        </div>

        {/* bottom link */}
        <Link
          href="#"
          className="flex items-center gap-[12px] rounded-lg pt-[14px] pb-[11px] leading-none pl-4 pr-5 bg-[#39AB65] text-sm font-medium uppercase tracking-[1.5px]"
        >
          projekto planas <ArrowDownIcon />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
