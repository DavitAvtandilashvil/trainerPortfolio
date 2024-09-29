import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Slide_1 from '/images/slide1.png';
import Slide_2 from '/images/slide2.png';
import Slide_3 from '/images/slide3.png';
import Slide_4 from '/images/slide4.png';
import Slide_5 from '/images/slide5.png';
import Slide_6 from '/images/slide6.png';

export default function JourneyScroll() {
  const sliderBreakpoints = {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 19,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 19,
    },
  };
  return (
    <div className="p-20 bg-[#111111] max-lg:pt-16 max-lg:pb-16 max-lg:px-20 max-sm:p-10">
      <h2 className="font-[700] uppercase text-3xl text-[#7E7E7E] mb-6 max-lg:text-2xl max-sm:text-sm">
        Your Fitness Journey Starts Here
      </h2>
      <Swiper
        spaceBetween={19}
        slidesPerView={1}
        grabCursor={true}
        breakpoints={sliderBreakpoints}
      >
        <SwiperSlide
          className="flex flex-col gap-4 pt-5 pb-7 px-5 rounded-2xl border-[0.063rem] 
        border-[#4D4D4D] max-sm:pt-5 max-sm:pr-5 max-sm:pl-5 max-sm:pb-14"
        >
          <img className="w-full" src={Slide_1} alt="" />
          <h4 className="font-[700] text-xl text-white max-sm:text-sm">
            Weight Loss
          </h4>
        </SwiperSlide>
        <SwiperSlide
          className="flex flex-col gap-4 pt-5 pb-7 px-5 rounded-2xl border-[0.063rem] 
        border-[#4D4D4D] max-sm:pt-5 max-sm:pr-5 max-sm:pl-5 max-sm:pb-14"
        >
          <img className="w-full" src={Slide_2} alt="" />
          <h4 className="font-[700] text-xl text-white max-sm:text-sm">
            Outdoor Running
          </h4>
        </SwiperSlide>
        <SwiperSlide
          className="flex flex-col gap-4 pt-5 pb-7 px-5 rounded-2xl border-[0.063rem] 
        border-[#4D4D4D] max-sm:pt-5 max-sm:pr-5 max-sm:pl-5 max-sm:pb-14"
        >
          <img className="w-full" src={Slide_3} alt="" />
          <h4 className="font-[700] text-xl text-white max-sm:text-sm">
            Nutrition and Meal Plans
          </h4>
        </SwiperSlide>
        <SwiperSlide
          className="flex flex-col gap-4 pt-5 pb-7 px-5 rounded-2xl border-[0.063rem] 
        border-[#4D4D4D] max-sm:pt-5 max-sm:pr-5 max-sm:pl-5 max-sm:pb-14"
        >
          <img className="w-full" src={Slide_4} alt="" />
          <h4 className="font-[700] text-xl text-white max-sm:text-sm">
            Online Personal Training
          </h4>
        </SwiperSlide>
        <SwiperSlide
          className="flex flex-col gap-4 pt-5 pb-7 px-5 rounded-2xl border-[0.063rem] 
        border-[#4D4D4D] max-sm:pt-5 max-sm:pr-5 max-sm:pl-5 max-sm:pb-14"
        >
          <img className="w-full" src={Slide_5} alt="" />
          <h4 className="font-[700] text-xl text-white max-sm:text-sm">
            Private Personal Training
          </h4>
        </SwiperSlide>
        <SwiperSlide
          className="flex flex-col gap-4 pt-5 pb-7 px-5 rounded-2xl border-[0.063rem] 
        border-[#4D4D4D] max-sm:pt-5 max-sm:pr-5 max-sm:pl-5 max-sm:pb-14"
        >
          <img className="w-full" src={Slide_6} alt="" />
          <h4 className="font-[700] text-xl text-white max-sm:text-sm">
            Group Training
          </h4>
        </SwiperSlide>
        <SwiperSlide
          className="flex flex-col gap-4 pt-5 pb-7 px-5 rounded-2xl border-[0.063rem] 
        border-[#4D4D4D] max-sm:pt-5 max-sm:pr-5 max-sm:pl-5 max-sm:pb-14"
        >
          <img className="w-full" src={Slide_1} alt="" />
          <h4 className="font-[700] text-xl text-white max-sm:text-sm">
            Weight Loss
          </h4>
        </SwiperSlide>
        <SwiperSlide
          className="flex flex-col gap-4 pt-5 pb-7 px-5 rounded-2xl border-[0.063rem] 
        border-[#4D4D4D] max-sm:pt-5 max-sm:pr-5 max-sm:pl-5 max-sm:pb-14"
        >
          <img className="w-full" src={Slide_2} alt="" />
          <h4 className="font-[700] text-xl text-white max-sm:text-sm">
            Outdoor Running
          </h4>
        </SwiperSlide>
        <SwiperSlide
          className="flex flex-col gap-4 pt-5 pb-7 px-5 rounded-2xl border-[0.063rem] 
        border-[#4D4D4D] max-sm:pt-5 max-sm:pr-5 max-sm:pl-5 max-sm:pb-14"
        >
          <img className="w-full" src={Slide_3} alt="" />
          <h4 className="font-[700] text-xl text-white max-sm:text-sm">
            Nutrition and Meal Plans
          </h4>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
