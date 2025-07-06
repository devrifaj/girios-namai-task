const ProjectTagline = () => {
  return (
    <section className="pl-5 lg:pl-[64px] pr-5 lg:pr-[65px] pt-10 md:pt-[81px] pb-[64px] flex flex-col sm:flex-row justify-between">
      {/* left */}
      <div className="xl:max-w-[825px] lg:max-w-[600px] sm:max-w-[515px] w-full">
        <h3 className="text-[28px] sm:text-[32px] md:text-[40px] font-medium -tracking-[-.4px] leading-[30px] sm:leading-[36px] md:leading-[47px]">
          {" "}
          <span className="text-secondary">Tobulas derinys tarp</span> gamtos,
          išmanumo ir patogumo.
        </h3>

        <div className="flex flex-col sm:flex-row xl:gap-[64px] gap-5 md:gap-[48px] mt-[29px] text-secondary-black">
          <p className="sm:text-base text-sm leading-[18px] sm:leading-[27px] tracking-[.5px] max-w-[480px] ml-[2px]">
            Statomas modernus NT projektas, subalansuosiantis modernią
            architektūrą su artima gamta infrastruktūra, besikuriantis Vakaru
            gatveje.
          </p>
          <p className="sm:text-base text-sm leading-[18px] sm:leading-[27px] tracking-[.5px]">
            Namai dideliais langais, pro kuriuos atsiveria nuostabūs gamtos
            vaizdai.
          </p>
        </div>
      </div>

      {/* right */}
      <div className="max-w-[120px] w-full mt-[19px]">
        <p className="sm:text-base text-sm font-medium leading-[17px] tracking-[.2px]">
          Informacija apie projekta
        </p>
      </div>
    </section>
  );
};

export default ProjectTagline;
