"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { EffectFade, Navigation } from "swiper/modules";
import { useCallback, useRef } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@/icons";
import Image from "next/image";

// swiper styles css
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const HeroSlider = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  // handle prev function
  const handlePrev = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  }, []);

  // handle next function
  const handleNext = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  }, []);

  const baseButtonStyles =
    "flex-center w-[61px] h-[61px] rounded-[5px] bg-[#FAFAFA] backdrop-blur-[64.30000305175781px] focus:outline-none border-0";

  return (
    <div className="relative group w-full">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[EffectFade, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        className="w-full h-[670px]"
      >
        {/* slider item */}
        <SwiperSlide>
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/slider-img/slider-img-1.jpg"
              width={1000}
              height={700}
              alt="slider-img"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              src="/slider-img/slider-img-1.jpg"
              width={1000}
              height={700}
              alt="slider-img"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              src="/slider-img/slider-img-1.jpg"
              width={1000}
              height={700}
              alt="slider-img"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* slider control */}
      <div className="absolute top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 w-full hidden md:block">
        <div className="flex items-center justify-between mx-[34px]">
          {/* previous button */}
          <button
            type="button"
            onClick={handlePrev}
            className={`${baseButtonStyles} group/slide`}
            aria-label="Previous slide"
          >
            <ArrowLeftIcon />
          </button>

          {/* next button */}
          <button
            type="button"
            onClick={handleNext}
            className={`${baseButtonStyles} group/slide`}
            aria-label="Next slide"
          >
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
