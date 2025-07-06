import { HomeIcon, PercentageIcon } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section className="relative w-full h-full lg:h-[521px] lg:py-0 py-6">
      {/* content */}
      <div className="relative z-10 flex lg:flex-row flex-col gap-6 lg:gap-0 items-center justify-between h-full lg:pl-[78px] lg:pr-[82px]">
        {/* left text block */}
        <div className="xl:max-w-[445px] lg:text-left text-center lg:max-w-[350px] w-full">
          <p className="text-base font-medium tracking-[.4px] text-gray-1 mb-4 lg:mb-[32px] ml-[2px]">
            Rezervacija
          </p>
          <h3 className="text-[28px] sm:text-[36px] lg:text-[40px] font-medium -tracking-[-.5px] leading-[30px] sm:leading-[38px] lg:leading-[47px] text-white mb-4 lg:mb-[40px] lg:mx-0 mx-3 sm:mx-20">
            Galvokite apie savo naujus namus jau šiandien.
          </h3>
          {/* link */}
          <Link
            href="#"
            className="bg-white text-black rounded-[14px] text-[15px] lg:text-[17px] pl-5 lg:pl-[31px] pr-5 lg:pr-[29px] pt-4 lg:pt-[21px] pb-4 lg:pb-[18px] font-semibold inline-flex items-center gap-[11px] border border-green-light tracking-[.6px] mb-[6px]"
          >
            Rinktis namą
            <Image
              src="/icons/home-icon.png"
              width={50}
              height={50}
              className="w-[21px] h-[21px]"
              alt="home-icon"
            />
          </Link>
        </div>

        {/* right floating boxes */}
        <div className="flex xl:flex-row lg:flex-col sm:flex-row flex-col gap-4 xl:gap-[34px] z-10 mx-4 md:mx-0">
          {/* box 1 */}
          <div className="bg-backdrop-bg backdrop-blur-[41.4px] text-white rounded-xl max-w-[311px] w-full h-[230px] xl:h-[284px] border border-border-4 pt-[22px] pb-[26px] pl-[24px] pr-[47px] flex flex-col justify-between">
            <div>
              {/* box header */}
              <div className="flex items-end gap-1 mb-2 md:mb-[4px]">
                <span className="text-[48px] md:text-[69px] font-semibold text-white">5</span>

                <span className="border border-white rounded-[5px] p-[6px] h-full mb-2 md:mb-[11px]">
                  <HomeIcon className="w-[14px] h-[14px]" />
                </span>
              </div>
              {/* box title */}
              <h5 className="font-medium text-base md:text-[19px] leading-[22px] tracking-[.2px]">
                Namai bus įrengti 2025/Q4
              </h5>
            </div>

            {/* box description */}
            <p className="text-sm md:text-[15px] leading-[18px] md:leading-[21px] font-medium tracking-[.4px] mb-px">
              Jau šiais metais isikelkite į naujos kartos, A++ energinės klasės
              namus, Vakaru gatvėje.
            </p>
          </div>

          {/* box 2 */}
          <div className="bg-backdrop-bg backdrop-blur-[41.4px] text-white rounded-xl max-w-[311px] w-full h-[230px] xl:h-[284px] border border-border-4 pt-[22px] pb-[27px] pl-6 pr-[7px] flex flex-col justify-between">
            <div>
              {/* box header */}
              <div className="flex items-end gap-[6px] mb-2 md:mb-[4px] ml-[2px]">
                <span className="text-[48px] md:text-[69px] font-semibold text-white">10</span>

                <span className="border border-white rounded-[5px] p-[6px] h-full mb-2 md:mb-[11px]">
                  <PercentageIcon className="w-[14px] h-[14px]" />
                </span>
              </div>
              {/* box title */}
              <h5 className="font-medium text-base md:text-[19px] leading-[22px] tracking-[.3px] ml-[6px]">
                Rezervacijos mokestis
              </h5>
            </div>

            {/* box description */}
            <p className="text-sm md:text-[15px] leading-[18px] md:leading-[21px] font-medium tracking-[.4px]">
              Rezervuokite ir atraskite savo ateities namus – kur architektūra
              susitinka su tvarumu ir funkcionalumu.
            </p>
          </div>
        </div>
      </div>

      {/* banner image */}
      <Image
        src="/banner-bg.jpg"
        alt="Modern house"
        fill
        className="object-cover rounded-t-lg"
        priority
      />

      {/* overlay */}
      <div className="absolute left-0 top-0 right-0 bottom-0 lg:right-1/2 bg-overlay rounded-tl-lg"></div>
    </section>
  );
};

export default Banner;
