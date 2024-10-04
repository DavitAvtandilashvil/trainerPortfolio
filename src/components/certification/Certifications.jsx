import ArrowsUI from "../sharedComponents/ArrowsUI";
import CertificatePattern from "./CertificatePatern";

export default function Certifications() {
  const certificatesArr = [
    "ACE (American Council on Exercise) Certified Personal Trainer",
    "NASM (National Academy of Sports Medicine) Certified Personal Trainer",
    "BSc Fitness and Personal Training",
    "Precision Nutrition - Level 1",
    "Youth Strength & Conditioning Coach",
    "ISSA (International Sports Sciences Association) Certified Fitness Trainer",
  ];
  return (
    <div className="lg:px-[8rem] my-[20px] px-[4rem]">
      <div className="  flex items-center ">
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
          certification
        </h2>
      </div>
      <div className="flex flex-wrap gap-[2rem]  transition-all duration-[1s] ease-in-out  py-[4rem]">
        {certificatesArr.map((item) => (
          <CertificatePattern key={item} nomination={item} />
        ))}
      </div>
    </div>
  );
}
