import Certifications from "../components/certification/Certifications";
import MoreAboutMe from "../components/moreAboutMe/MoreAboutMe";
import ResultsBase from "../components/successStory/ResultsBase";

export default function StoriesPage() {
  return (
    <div className="pb-[7.1rem] md:pb-[30rem] lg:pb-[40rem]">
      <MoreAboutMe />
      <Certifications />
      <ResultsBase />
    </div>
  );
}
