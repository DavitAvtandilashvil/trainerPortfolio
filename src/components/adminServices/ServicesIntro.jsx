/* eslint-disable react/prop-types */
export default function ServicesIntro({ setShowModal }) {
  return (
    <div>
      <div className="flex w-full items-center justify-between transition duration-1000 ease-in">
        <span className="text-[#FFF] md:text-[3rem] text-[2.2rem] font-[700] transition duration-[1s] ease-in">
          Services
        </span>
        <button
          onClick={() => setShowModal((prev) => !prev)}
          className="text-[#D7FD44] transition duration-1000 ease-in-out hidden md:flex text-[1.6rem] font-[700] py-[10px] px-[4rem] rounded-[2.4rem] border border-[#D7FD44]"
        >
          + Add Service
        </button>
        <button
          onClick={() => setShowModal((prev) => !prev)}
          className="bg-[#D7FD44] md:hidden transition duration-1000 ease-in-out text-[1.8rem] font-[500] w-[3rem] h-[3rem] flex items-center justify-center rounded-full"
        >
          +
        </button>
      </div>
      <p className="text-[1.8rem] transition duration-1000 ease-in-out hidden md:flex text-[#FFF] font-[500]">
        Add services you provide
      </p>
    </div>
  );
}
