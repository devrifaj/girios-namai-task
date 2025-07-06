const ConstructionTimeline = () => {
  return (
    <section className="pt-10 lg:pt-[68px] pb-10 md:pb-[84px] mb-8 sm:mb-12 lg:mb-20 xl:mb-[135px] bg-white rounded-b-[7px]">
      {/* title */}
      <h4 className="text-[28px] md:text-[36px] lg:text-[42px] font-semibold md:mb-[62px] text-center tracking-[.1px]">
        Statybų eiga
      </h4>
      {/* timeline */}
      <div className="max-w-[1134px] ml-2 sm:ml-10 xl:ml-[109px] mr-2 sm:mr-10 xl:mr-[112px] mt-14 md:mt-[68px]">
        <div>
          {/* timeline top items */}
          <div className="flex gap-10 sm:gap-28 md:gap-[170px] lg:gap-[240px] xl:gap-[340px] ml-8 sm:ml-20 md:ml-20 lg:ml-[110px] xl:ml-[211px] mb-[27px]">
            {/* item 1 */}
            <p className="construction-timeline-text">
              Sklypo formavimo darbai
            </p>
            {/* item 2 */}
            <p className="construction-timeline-text">Fasado darbai</p>
          </div>

          {/* horizontal line */}
          <div className="w-full h-px bg-black"></div>

          {/* timeline bottom items */}
          <div className="flex justify-between mt-[30px]">
            {/* item 1 */}
            <div className="relative">
              <h3 className="construction-timeline-title">
                2024 Q1
              </h3>
              <p className="construction-timeline-text">
                Statybų pradžia
              </p>

              {/* dots 1 */}
              <div className="timeline-dots-active left-0"></div>
              {/* dots 2 */}
              <div className="timeline-dots-active -right-6 sm:-right-14 lg:-right-22 xl:-right-41"></div>
              {/* line */}
              <div className="timeline-line left-0 -right-6 sm:-right-14 lg:-right-22 xl:-right-41"></div>
            </div>

            {/* item 2 */}
            <div className="relative ml-4 lg:ml-8.5">
              <h3 className="construction-timeline-title text-center sm:text-left">
                2025 Q4
              </h3>
              <p className="construction-timeline-text">
                5 Individualus namai
              </p>

              {/* dots 1 */}
              <div className="timeline-dots left-1/2 -translate-x-1/2"></div>
              {/* dots 2 */}
              <div className="timeline-dots -right-6 sm:-right-24 xl:-right-41"></div>
            </div>

            {/* item 3 */}
            <div className="relative -mr-1.5">
              <h3 className="construction-timeline-title text-right sm:text-left">
                2026 Q4
              </h3>
              <p className="construction-timeline-text">
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
