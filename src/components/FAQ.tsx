import { faqData } from "@/constants";
import Image from "next/image";
import FAQItem from "./FAQItem";

const FAQ = () => {
  return (
    <section className="flex lg:flex-row flex-col xl:gap-[151px] gap-10 md:gap-[80px] pl-[20px] xl:pl-[65px] items-center">
      {/* faq image */}
      <div className="max-w-[515px] w-full lg:w-auto lg:max-w-[612px]">
        <Image
          src="/faq-img.png"
          width={800}
          height={600}
          alt="faq-img"
          className="w-full h-full object-cover"
        />
      </div>

      {/* faq question */}
      <div className="xl:max-w-[465px] lg:max-w-[390px] max-w-[500px]">
        {/* faq header */}
        <div className="mb-5 md:mb-[36px] flex mr-[7.5px]">
          <h3 className="text-[26px] sm:text-[32px] md:text-[40px] font-medium -tracking-[-.5px] leading-[30px] sm:leading-[38px] md:leading-[47px]">
            Funkcionalumas ir ilgamžiškumas
          </h3>

          <div className="hidden md:block border-border-3 border-2 rounded-[14px] bg-tertiary-black h-full px-4 lg:px-[24px] py-3 lg:py-[18.5px]">
            <Image
              src="/icons/logo-icon.png"
              width={50}
              height={50}
              className="w-14 h-11 md:w-[57px] md:h-[44px]"
              alt="logo-icon"
            />
          </div>
        </div>

        {/* faq description */}
        <p className="text-sm sm:text-base sm:leading-[27px] leading-[20px] tracking-[.5px] ml-1 font-medium">
          <span className="font-semibold">Girios</span> namuose atsivers visų
          pojūčių gama: akys džiaugsis, klaidžiodamos po iškalbingą būsto
          dizainą, pro atvirus langus namus pasieks gaivus pušyno aromatas bei
          kartu bus gera klausytis raminančio paukštelių čiulbėjimo.
        </p>
        {/* faq items */}
        <div className="bg-white rounded-[7px] mt-5 md:mt-[30px] mb-[14px] pt-2.5 flex flex-col gap-[7px] pr-2">
          {faqData.map((item, index) => (
            <FAQItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
