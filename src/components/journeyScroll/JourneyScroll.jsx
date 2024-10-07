import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useJourneyServices } from '../../costumHooks/useJourneyServices';
import JourneyScrollCard from './JourneyScrollCard';

export default function JourneyScroll({
  title = "Your Fitness Journey Starts Here",
  className = 'p-20',
}) {
  const { services, isLoading, error } = useJourneyServices();

  if (isLoading) {
    return <div>Loading services...</div>;
  }

  if (error) {
    return <div>Error loading services: {error.message}</div>;
  }

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
    <div
      className={`bg-[#111111] max-lg:pt-16 max-lg:pb-16 max-lg:px-20 max-sm:p-10 ${className}`}
    >
      <h2 className="font-[700] uppercase text-3xl text-[#7E7E7E] mb-6 max-lg:text-2xl max-sm:text-sm">
        {title}
      </h2>
      <Swiper
        spaceBetween={19}
        slidesPerView={1}
        grabCursor={true}
        breakpoints={sliderBreakpoints}
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <JourneyScrollCard service={service} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
