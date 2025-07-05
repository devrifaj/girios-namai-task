import Image from "next/image";

const Highlight = () => {
  return (
    <section className="flex justify-between pt-[88px] pb-[165px] pl-[65px] pr-[63px]">
      {/* highlight left */}
      <div className="flex items-end gap-[23px] w-full mt-3">
        <div className="max-w-[305px] h-[453px] w-full">
          <Image
            src="/highlight/highlight-img-small.png"
            alt="highlight-1"
            width={500}
            height={500}
            className="rounded-md w-full h-full object-cover"
          />
        </div>
        <p className="text-[15px] font-semibold leading-[21px] tracking-[.4px] text-paragraph max-w-[165px] mb-[6px]">
          Pro atvirus langus namus pasieks <br /> gaivus pušyno aromatas bei
          kartu <br /> bus gera klausytis raminančio <br /> paukštelių
          čiulbėjimo.
        </p>
      </div>

      {/* highlight right */}
      <div className="w-full">
        <div className="max-w-[614px] h-[390px] w-full mb-6">
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
