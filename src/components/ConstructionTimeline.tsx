const ConstructionTimeline = () => {
  return (
    <section className="pt-[68px] pb-[84px] mb-[135px] bg-white rounded-b-[7px]">
      {/* title */}
      <h4 className="text-[42px] font-semibold mb-[62px] text-center tracking-[.1px]">
        Statybų eiga
      </h4>
      {/* timeline */}
      <div className="max-w-[1134px] ml-[109px] mr-[112px] mt-[68px]">
        <div>
          {/* timeline top items */}
          <div className="flex gap-[340px] ml-[211px] mb-[27px]">
            {/* item 1 */}
            <p className="text-lg font-medium tracking-[.2px]">
              Sklypo formavimo darbai
            </p>
            {/* item 2 */}
            <p className="text-lg font-medium tracking-[.2px]">Fasado darbai</p>
          </div>

          {/* horizontal line */}
          <div className="w-full h-px bg-black"></div>

          {/* timeline bottom items */}
          <div className="flex justify-between mt-[30px]">
            {/* item 1 */}
            <div className="relative">
              <h3 className="text-[40px] leading-[47px] font-medium tracking-[.5px] mb-[3px]">
                2024 Q1
              </h3>
              <p className="text-lg font-medium tracking-[.2px]">
                Statybų pradžia
              </p>

              {/* dots 1 */}
              <div className="timeline-dots-active left-0"></div>
              {/* dots 2 */}
              <div className="timeline-dots-active -right-41"></div>
              {/* line */}
              <div className="timeline-line left-0 -right-41"></div>
            </div>

            {/* item 2 */}
            <div className="relative ml-8.5">
              <h3 className="text-[40px] leading-[47px] font-medium tracking-[.5px] mb-[3px]">
                2025 Q4
              </h3>
              <p className="text-lg font-medium tracking-[.2px]">
                5 Individualus namai
              </p>

              {/* dots 1 */}
              <div className="timeline-dots left-1/2 -translate-x-1/2"></div>
              {/* dots 2 */}
              <div className="timeline-dots -right-41"></div>
            </div>

            {/* item 3 */}
            <div className="relative -mr-1.5">
              <h3 className="text-[40px] leading-[47px] font-medium tracking-[.5px] mb-[3px]">
                2026 Q4
              </h3>
              <p className="text-lg font-medium tracking-[.2px]">
                Statybų pradžia
              </p>

              {/* dots */}
              <div className="timeline-dots right-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionTimeline;
