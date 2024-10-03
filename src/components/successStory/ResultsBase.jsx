import ResultsGallery from "./ResultsGallery";

const ResultsBase = () => {
  const images = [
    { src: "/public/s-1.png", alt: "Image 1" },
    { src: "/public/s-2.png", alt: "Image 2" },
    { src: "/public/s-3.png", alt: "Image 3" },
    { src: "/public/s-4.png", alt: "Image 4" },
    { src: "/public/s-5.png", alt: "Image 5" },
    { src: "/public/s-6.png", alt: "Image 6" },
    { src: "/public/s-7.png", alt: "Image 7" },
    { src: "/public/s-8.png", alt: "Image 8" },
    { src: "/public/s-9.png", alt: "Image 9" },
    { src: "/public/s-10.png", alt: "Image 10" },
    { src: "/public/s-1.png", alt: "Image 1" },
    { src: "/public/s-2.png", alt: "Image 2" },
    { src: "/public/s-3.png", alt: "Image 3" },
    { src: "/public/s-4.png", alt: "Image 4" },
    { src: "/public/s-5.png", alt: "Image 5" },
    { src: "/public/s-6.png", alt: "Image 6" },
    { src: "/public/s-7.png", alt: "Image 7" },
    { src: "/public/s-8.png", alt: "Image 8" },
    { src: "/public/s-9.png", alt: "Image 9" },
    { src: "/public/s-10.png", alt: "Image 10" },
  ];

  return (
    <div>
      <h1>Image Gallery</h1>
      <ResultsGallery images={images} />
    </div>
  );
};

export default ResultsBase;
