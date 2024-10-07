import { useExperience } from "../../costumHooks/useExperience";
import ArrowsUI from "../sharedComponents/ArrowsUI";

export default function MoreAboutMe() {
  const {
    data: experience,
    isLoading: experienceLoading,
    error: experienceError,
  } = useExperience();
  if (experienceLoading) {
    return <div>Loading...</div>;
  }
  if (experienceError) {
    return <div>Error: {experienceError?.message}</div>;
  }
  console.log(experience[0]?.experience, "experience");

  return (
    <div className="flex flex-col w-full items-center justify-center py-[4rem]">
      <div className="w-full lg:px-[8rem] my-[20px] px-[4rem]">
        <img className="w-full" src="/Rectangle 33.png" alt="" />
      </div>
      <div className=" w-full py-[4rem] md:py-[6rem] lg:px-[8rem] my-[20px] px-[4rem] flex flex-col  gap-[2.4rem]">
        <div className="flex items-center justify-start w-full ">
          <ArrowsUI />
          <h2
            style={{
              background: "linear-gradient(180deg, #C4C4C4 0%, #737373 100%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontFamily: "Nunito, sans-serif",
            }}
            className="font-bold uppercase transition-all duration-[1s] ease-in-out lg:text-[3.2rem] text-[1.4rem] md:text-[2.9rem] leading-[43.65px] text-left"
          >
            about me
          </h2>
        </div>
        <div className="flex  flex-col md:flex-row justify-between items-center">
          <div className="">
            <p className="text-[#C4C4C4] w-full lg:w-[738px] md:w-[497px] md:text-[2rem] text-[1.4rem] font-[400]">
              I’m Tuna, a passionate personal trainer dedicated to helping
              others transform their lives through fitness. My journey began
              when I struggled with body confidence and health issues. Through
              hard work and discipline, I discovered the power of exercise and
              healthy living.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-[1.5rem] pt-[4rem] items-center">
            <div className="relative w-full flex  justify-center">
              <img className="w-[8rem] h-[8rem]" src="/Star 11.png" alt="" />
              <span className="absolute top-[22px] text-[2.4rem] text-[#000] font-[700]">
                3+
              </span>
            </div>
            <span className="text-[#FFF] text-center w-[16rem] text-[14px] font-[400]">
              {experience[0]?.experience}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
