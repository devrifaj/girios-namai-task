import Image from "next/image";

const Highlight = () => {
  return (
    <section className="flex flex-col sm:flex-row justify-between gap-4 md:gap-0 pt-14 md:pt-[88px] pb-14 md:pb-20 lg:pb-[100px] xl:pb-[164px] pl-5 lg:pl-[65px] pr-5 lg:pr-[63px]">
      {/* highlight left */}
      <div className="xl:flex items-end gap-[23px] w-full xl:mt-3">
        <div className="max-w-[305px] h-[200px] sm:h-[453px] w-full mb-6 xl:mb-0">
          <Image
            src="/highlight/highlight-img-small.png"
            alt="highlight-1"
            width={500}
            height={500}
            className="rounded-md w-full h-full object-cover"
          />
        </div>
        <p className="text-[15px] font-semibold leading-[21px] tracking-[.4px] text-paragraph xl:max-w-[165px] mb-[6px]">
          Pro atvirus langus namus pasieks <br /> gaivus pušyno aromatas bei
          kartu <br /> bus gera klausytis raminančio <br /> paukštelių
          čiulbėjimo.
        </p>
      </div>

      {/* highlight right */}
      <div className="w-full">
        <div className="max-w-[614px] h-[200px] sm:h-[453px] xl:h-[390px] w-full mb-6">
          <Image
            src="/highlight/highlight-img-large.jpg"
            alt="highlight-1"
            width={800}
            height={500}
            className="rounded-md w-full h-full object-cover"
          />
        </div>

        <p className="text-[15px] font-semibold leading-[23.5px] tracking-[.3px] text-paragraph max-w-[335px] ml-[1px]">
          Atraskite savo pojūčių gamą – leiskite gamtai Jūs įkvėpti.
        </p>
      </div>
    </section>
  );
};

export default Highlight;
