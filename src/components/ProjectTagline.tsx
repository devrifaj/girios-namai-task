const ProjectTagline = () => {
  return (
    <section className="pl-[64px] pr-[65px] pt-[81px] pb-[64px] flex justify-between">
      {/* left */}
      <div className="max-w-[825px] w-full">
        <h3 className="text-[40px] font-medium -tracking-[-.4px] leading-[47px]">
          {" "}
          <span className="text-secondary">Tobulas derinys tarp</span> gamtos,
          išmanumo ir patogumo.
        </h3>

        <div className="flex gap-[64px] mt-[29px] text-secondary-black">
          <p className="leading-[27px] tracking-[.5px] max-w-[480px] ml-[2px]">
            Statomas modernus NT projektas, subalansuosiantis modernią
            architektūrą su artima gamta infrastruktūra, besikuriantis Vakaru
            gatveje.
          </p>
          <p className="leading-[27px] tracking-[.5px]">
            Namai dideliais langais, pro kuriuos atsiveria nuostabūs gamtos
            vaizdai.
          </p>
        </div>
      </div>

      {/* right */}
      <div className="max-w-[120px] w-full mt-[19px]">
        <p className="text-base font-medium leading-[17px] tracking-[.2px]">
          Informacija apie projekta
        </p>
      </div>
    </section>
  );
};

export default ProjectTagline;
