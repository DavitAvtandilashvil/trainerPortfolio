import AboutMe from "../components/aboutMe/AboutMe";
import Contact from "../components/contact/Contact";
import Hero from "../components/hero/Hero";
import JourneyScroll from "../components/journeyScroll/JourneyScroll";

import SuccessStory from "../components/successStory/SuccessStory";

export default function MainPage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <JourneyScroll />
      <AboutMe />
      <SuccessStory />
      <Contact />
    </div>
  );
}
