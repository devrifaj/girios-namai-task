const ConstructionTimeline = () => {
  return (
    <section className="pt-[68px] pb-[86px] mb-[201px] bg-white rounded-b-[7px]">
      {/* title */}
      <h4 className="text-[42px] font-semibold mb-[62px] text-center tracking-[.1px]">
        Statybų eiga
      </h4>
      {/* timeline */}
      <div className="max-w-[1134px] ml-[109px] mr-[109px] mt-[62px]">
        <div>
          {/* timeline top items */}
          <div className="flex justify-center mb-[33px]">
            <p className="text-lg font-medium ">Sklypo formavimo darbai</p>
            <p className="text-lg font-medium ">Fasado darbai</p>
          </div>

          {/* horizontal line */}
          <div className="w-full h-px bg-black"></div>

          {/* timeline bottom items */}
          <div>
            <div>
              <h5>2024 Q1</h5>
              <p>Statybų pradžia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionTimeline;
