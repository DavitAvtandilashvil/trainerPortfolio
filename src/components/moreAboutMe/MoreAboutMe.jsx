import { useExperience } from "../../costumHooks/useExperience";
import { useStoryData } from "../../costumHooks/useStoryData";
import ArrowsUI from "../sharedComponents/ArrowsUI";

export default function MoreAboutMe() {
  const {
    data: experience,
    isLoading: experienceLoading,
    error: experienceError,
  } = useExperience();
  const {
    data: storyData,
    isLoading: loadingStoryData,
    error: errorStoryData,
  } = useStoryData();

  if (experienceLoading || loadingStoryData) {
    return <div className="loading">Loading...</div>;
  }

  if (experienceError || errorStoryData) {
    return (
      <div className="error">
        Error: {experienceError?.message || errorStoryData?.message}
      </div>
    );
  }
  const story = storyData?.[0]?.story;
  return (
    <div className="flex flex-col w-full items-center justify-center py-[4rem]">
      <div className="w-full max-h-[720px] overflow-hidden  lg:px-[8rem] my-[20px] px-[4rem]">
        <img
          className="w-full"
          src="/Rectangle 33 (1).png"
          alt="About me banner"
        />
      </div>

      <div className="w-full py-[4rem] md:py-[6rem] lg:px-[8rem] my-[20px] px-[4rem] flex flex-col gap-[2.4rem]">
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

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-[#C4C4C4] w-full lg:w-[738px] md:w-[497px] md:text-[2rem] text-[1.4rem] font-[400]">
              <span>{story}</span>
            </p>
          </div>

          <div className="flex flex-col justify-center gap-[1.5rem] pt-[4rem] md:pt-[0px] items-center">
            <div className="relative w-full flex justify-center">
              <img
                className="w-[8rem] h-[8rem]"
                src="/Star 11.png"
                alt="Experience Star"
              />
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
