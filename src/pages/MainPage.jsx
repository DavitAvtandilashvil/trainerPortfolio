import AboutMe from "../components/aboutMe/AboutMe";
import Contact from "../components/contact/Contact";
import Hero from "../components/hero/Hero";
import JourneyScroll from "../components/journeyScroll/JourneyScroll";

import ResultsBase from "../components/successStory/ResultsBase";
export default function MainPage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <JourneyScroll />
      <AboutMe />
      <ResultsBase />
      <Contact />
    </div>
  );
}
