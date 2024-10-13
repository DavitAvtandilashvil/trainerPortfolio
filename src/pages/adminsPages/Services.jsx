import ServicePattern from "../../components/adminServices/ServicePattern";
import ServicesIntro from "../../components/adminServices/ServicesIntro";

export default function Services() {
  return (
    <div className="md:px-[9.8rem] px-[2.2rem] py-[5.2rem] transition duration-1000 ease-in-out">
      <ServicesIntro />
      <div className="py-[2rem]">
        <ServicePattern />
      </div>
    </div>
  );
}
