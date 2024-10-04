/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import ArrowsUI from "../sharedComponents/ArrowsUI";

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
  const swiperRef = useRef(null);
  console.log({ length: totalSlides });

  const swipeNextFunc = () => swiperRef.current.swiper.slideNext();
  const swipePrevFunc = () => swiperRef.current.swiper.slidePrev();
  return (
    <div className="resultsGalleryContainer lg:px-[8rem] my-[20px] md:px-[4rem] transition-all duration-[1s] ease-in-out">
      <div className=" md:py-[50px] md:px-[60px] lg:px-[60px] py-[30px] px-[30px] border  border-[#4D4D4D]  rounded-[16px]">
        <div className="  flex items-center ">
          <ArrowsUI swipe={swipeNextFunc} />
          <h2
            style={{
              background: "linear-gradient(180deg, #C4C4C4 0%, #737373 100%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontFamily: "Nunito, sans-serif",
            }}
            className="font-bold transition-all duration-[1s] ease-in-out lg:text-[3.2rem] text-[1.4rem] md:text-[2.9rem] leading-[43.65px]  uppercase text-left"
          >
            Success Story
          </h2>
        </div>
        <Swiper
          ref={swiperRef}
          pagination={{
            clickable: true,
          }}
          className="mySwiper lg:py-[75px] md:py-[55px]  py-[35px]
        
           "
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <div className="resultsGrid   items-center gap-[40px]">
                {images
                  .slice(
                    slideIndex * imagesPerSlide,
                    slideIndex * imagesPerSlide + imagesPerSlide
                  )
                  .map((image, index) => (
                    <img
                      className="lg:max-w-[305px] sm:w-[305px] "
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <ArrowsUI swipe={swipePrevFunc} className="prevArrow" />
      </div>
    </div>
  );
}
