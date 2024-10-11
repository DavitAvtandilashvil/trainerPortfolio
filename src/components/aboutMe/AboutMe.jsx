import { Link } from "react-router-dom";

import { useAboutImage } from "../../costumHooks/useAboutImage.js";
import { useStoryData } from "../../costumHooks/useStoryData.js";

export default function AboutMe() {
  const {
    data: aboutImage,
    isLoading: loadingImage,
    error: errorImage,
  } = useAboutImage();
  const {
    data: storyData,
    isLoading: loadingStoryData,
    error: errorStoryData,
  } = useStoryData();

  if (loadingImage || loadingStoryData) {
    return <div>Loading...</div>;
  }

  if (errorImage || errorStoryData) {
    return <div>Error: {errorImage?.message || errorStoryData?.message}</div>;
  }

  const story = storyData?.[0]?.story;

  return (
    <div className=" aboutMeContainer md:px-[8rem] px-[3.7rem] py-[8rem] ">
      <h2 className="font-bold md:text-[32px] text-[1.4rem] leading-[43.65px] mb-4 uppercase bg-gradient-to-b from-gray-400 to-gray-600 bg-clip-text text-transparent font-nunito">
        about me
      </h2>

      <div className="flex flex-col gap-[6.3rem] lg:flex-row justify-between">
        <div
          style={{
            backgroundImage: `url(${aboutImage?.[0]?.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center 15%",
          }}
          className=" aboutMeHeroImage md:w-[630px] w-[100%] h-[423px]    rounded-[1.6rem]"
        ></div>

        <div className="flex flex-col justify-between w-full lg:w-1/2 ml-0 lg:ml-4 mt-4 lg:mt-0">
          <div className="flex items-start gap-[20px]">
            <p className="font-nunito  w-full max-w-[587px] md:text-[20px] text-[12px] font-[400] leading-[27.28px] text-[#C4C4C4] p-4">
              {story}
            </p>
          </div>

          <div className="flex lg:justify-end  mt-[1.5rem] lg:mt-[120px]">
            <button className=" w-[184px] text-[1.6rem] font-[400] h-[48px] bg-[#B8D44A] text-[#000] rounded-[8px] hover:bg-[#97b82c] transition duration-300 capitalize">
              <Link to={"/stories"}>see more</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
