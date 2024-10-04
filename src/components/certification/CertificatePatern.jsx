/* eslint-disable react/prop-types */
export default function CertificatePattern({ nomination }) {
  return (
    <div className="flex  items-center gap-[5px]">
      <div className="relative">
        <img
          className=" md:w-[6rem] md:h-[6rem] w-[4rem] h-[4rem]"
          src="/certificationIcon/roundedStar.svg"
          alt="star"
        />
        <img
          className="absolute mark  md:top-[2.4rem]  md:left-[2.2rem] transition-all duration-[1s] ease-linear w-[1.8rem] h-[1.2rem] "
          src="/certificationIcon/markIcon.svg"
          alt="markIcon"
        />
      </div>
      <span className="text-[1.4rem] md:text-[1.6rem] md:w-[34.4rem] w-[24.6rem] text-wrap font-[400] text-[#FFFFFF]">
        {nomination}
      </span>
    </div>
  );
}
