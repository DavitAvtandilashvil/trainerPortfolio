/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

export default function ResultsGallery({ images }) {
  const [imagesPerSlide, setImagesPerSlide] = useState(1);

  const updateImagesPerSlide = () => {
    const width = window.innerWidth;

    if (width >= 1024) {
      setImagesPerSlide(9);
    } else if (width >= 800) {
      setImagesPerSlide(6);
    } else {
      setImagesPerSlide(1);
    }
  };

  useEffect(() => {
    updateImagesPerSlide();
    window.addEventListener("resize", updateImagesPerSlide);

    return () => {
      window.removeEventListener("resize", updateImagesPerSlide);
    };
  }, []);

  const totalSlides = Math.ceil(images.length / imagesPerSlide);

  console.log({ length: totalSlides });
  return (
    <div className="md:px-[8rem] px-[4rem]">
      <div className="py-[186px] px-[80px] border  border-[#4D4D4D]  rounded-[16px]">
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper
        
           "
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <div className="resultsGrid  gap-4">
                {images
                  .slice(
                    slideIndex * imagesPerSlide,
                    slideIndex * imagesPerSlide + imagesPerSlide
                  )
                  .map((image, index) => (
                    <img
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      style={{ width: "305px", height: "190px" }}
                    />
                  ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
