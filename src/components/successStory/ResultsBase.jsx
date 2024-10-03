import ResultsGallery from "./ResultsGallery";

const ResultsBase = () => {
  const images = [
    { src: "/s-1.png", alt: "Image 1" },
    { src: "/s-2.png", alt: "Image 2" },
    { src: "/s-3.png", alt: "Image 3" },
    { src: "/s-4.png", alt: "Image 4" },
    { src: "/s-5.png", alt: "Image 5" },
    { src: "/s-6.png", alt: "Image 6" },
    { src: "/s-7.png", alt: "Image 7" },
    { src: "/s-8.png", alt: "Image 8" },
    { src: "/s-9.png", alt: "Image 9" },

    { src: "/s-1.png", alt: "Image 1" },
    { src: "/s-2.png", alt: "Image 2" },
    { src: "/s-3.png", alt: "Image 3" },
    { src: "/s-4.png", alt: "Image 4" },
    { src: "/s-5.png", alt: "Image 5" },
    { src: "/s-6.png", alt: "Image 6" },
    { src: "/s-7.png", alt: "Image 7" },
    { src: "/s-8.png", alt: "Image 8" },
    { src: "/s-9.png", alt: "Image 9" },
  ];

  return (
    <div>
      <ResultsGallery images={images} />
    </div>
  );
};

export default ResultsBase;
