import { useAboutId } from "../../costumHooks/useAboutId.js";
import { useAboutImage } from "../../costumHooks/useAboutImage.js";
import { useStoryData } from "../../costumHooks/useStoryData.js";
import { useExperience } from "../../costumHooks/useExperience.js";
export default function AboutMe() {
  const {
    data: about,
    isLoading: loadingAbout,
    error: errorAbout,
  } = useAboutId();
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
  const {
    data: experience,
    isLoading: loadingExperience,
    error: errorExperience,
  } = useExperience();

  if (loadingAbout || loadingImage || loadingStoryData || loadingExperience) {
    return <div>Loading...</div>;
  }

  if (errorAbout || errorImage || errorStoryData || errorExperience) {
    return (
      <div>
        Error:{" "}
        {errorAbout?.message ||
          errorImage?.message ||
          errorStoryData?.message ||
          errorExperience?.message}
      </div>
    );
  }
  console.log(about, "about");
  const story = storyData?.[0]?.story;
  const experienceText = experience?.[0]?.experience;

  return (
    <div className="md:px-[8rem] px-[4rem]">
      <h2 className="hidden lg:block font-bold text-[32px] leading-[43.65px] mb-4 uppercase bg-gradient-to-b from-gray-400 to-gray-600 bg-clip-text text-transparent font-nunito">
        about me
      </h2>

      <div className="flex flex-col lg:flex-row justify-between">
        <div className="lg:w-1/2 pr-[30px]">
          <img
            src={aboutImage?.[0]?.image || "/fallback-image.png"}
            alt="About me section image"
            className="w-full"
          />
        </div>

        <div className="flex items-center pt-[50px] gap-[10px]">
          <div className="flex pr-10 block lg:hidden">
            <img src="/Vector3.png" alt="Vector 3" />
            <img src="/Vector2.png" alt="Vector 2" />
            <img src="/Vector1.png" alt="Vector 1" />
            <img src="/Vector.png" alt="Vector" />
          </div>
          <h2 className="block lg:hidden pb-[24px] pt-[40px] font-bold text-[32px] leading-[43.65px] mb-4 uppercase bg-gradient-to-b from-gray-400 to-gray-600 bg-clip-text text-transparent font-nunito">
            about me
          </h2>
        </div>

        <div className="flex flex-col justify-between w-full lg:w-1/2 ml-0 lg:ml-4 mt-4 lg:mt-0">
          <div className="flex items-start gap-[20px]">
            <p className="font-nunito font-normal w-full max-w-[587px] text-[20px] leading-[27.28px] text-[#C4C4C4] p-4">
              {story}
            </p>
            <div className="block lg:hidden flex flex-col items-center relative">
              <img
                src="/Star 11.png"
                alt="star"
                className="w-[128px] h-[128px]"
              />
              <img
                src="/3+.png"
                alt="3+"
                className="absolute top-[28%] left-[42%] w-[40px] h-auto"
              />
              <div className="text-white text-[15px] w-[200px] text-center mt-2">
                {experienceText}
              </div>
            </div>
          </div>

          <p className="font-nunito font-normal w-full max-w-[587px] text-[20px] leading-[27.28px] text-[#C4C4C4] p-4 block lg:hidden">
            I believe that fitness is not just about physical strength but also
            mental resilience. Together, we can build a sustainable routine that
            enhances both your body and mind.
          </p>

          <div className="flex justify-end mt-4 lg:mt-[120px]">
            <button className="hidden lg:block w-[184px] h-[48px] bg-[#B8D44A] text-white rounded-[8px] hover:bg-[#A3C52E] transition duration-300 capitalize">
              see more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
