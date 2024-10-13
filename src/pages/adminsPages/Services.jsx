import { useState } from "react";
import ServicePattern from "../../components/adminServices/ServicePattern";
import ServicesIntro from "../../components/adminServices/ServicesIntro";
import AddServicesModal from "../../components/adminServices/AddServicesModal";

export default function Services() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="md:px-[9.8rem] px-[2.2rem] py-[5.2rem] transition duration-1000 ease-in-out">
      <ServicesIntro setShowModal={setShowModal} />
      <div className="py-[2rem]">
        <ServicePattern />
        {showModal && <AddServicesModal setShowModal={setShowModal} />}
      </div>
    </div>
  );
}
