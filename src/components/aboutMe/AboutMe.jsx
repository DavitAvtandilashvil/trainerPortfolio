export default function AboutMe() {
  return (
    <>
      <h2
        style={{
          background: "linear-gradient(180deg, #C4C4C4 0%, #737373 100%)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          fontFamily: "Nunito, sans-serif",
        }}
        className="font-bold text-[32px] leading-[43.65px] mb-4 uppercase"
      >
        about me
      </h2>

      <div className="flex flex-col lg:flex-row justify-between">
        <div className="lg:w-1/2">
          <img src="/about-img.png" alt="workout-img" className="w-full" />
        </div>

        <div className="flex flex-col justify-between w-full lg:w-1/2 ml-0 lg:ml-4 mt-4 lg:mt-0">
          <div>
            <p className="font-nunito font-normal text-[20px] leading-[27.28px] text-[#C4C4C4] p-4">
              Hi, I'm Tuna, a personal trainer dedicated to helping people
              transform through fitness. My journey began when I overcame my own
              struggles with body confidence and health. Now, I use my
              experience to empower others to achieve their fitness goals.
            </p>
            <p className="font-nunito font-normal text-[20px] leading-[27.28px] text-[#C4C4C4] p-4">
              With years of experience, I specialize in personalized training
              programs, whether it’s weight loss, strength training, or
              improving overall well-being. Let’s create a routine that fits
              your lifestyle and brings lasting results.
            </p>
          </div>

          <div className="flex justify-end mt-4 lg:mt-[120px]">
            <button className="w-[184px] h-[48px] bg-[#B8D44A] text-white rounded-[8px] hover:bg-[#A3C52E] transition duration-300 capitalize">
              see more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
