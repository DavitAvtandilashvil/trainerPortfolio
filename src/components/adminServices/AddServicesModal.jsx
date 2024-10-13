// eslint-disable-next-line react/prop-types
export default function AddServicesModal({ setShowModal }) {
  return (
    <div>
      <div
        onClick={() => setShowModal(false)}
        className="top-0 left-0 right-0 bottom-0 fixed bg-[#6F6F6F] opacity-[0.75] z-10"
      ></div>

      <div className="bg-[#323232] p-[20px] fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] border border-[#BFBFBF] rounded-[20px] z-20 max-w-[95vw] md:max-w-[800px] w-full">
        <div className="bg-[#121212] w-full py-[48px] px-[2rem] rounded-[8px]">
          <div className="border-b border-[#6F6F6F] pb-[10px]">
            <div className="flex w-full items-center justify-between transition duration-1000 ease-in">
              <span className="text-[#FFF] md:text-[3rem] text-[2.2rem] font-[700] transition duration-[1s] ease-in">
                Services
              </span>

              <button
                onClick={() => setShowModal(false)}
                className="bg-[#D7FD44] transition duration-1000 ease-in-out text-[1.8rem] font-[500] md:w-[54px] md:h-[54px] w-[3rem] h-[3rem] flex items-center justify-center rounded-full"
              >
                <img src="/Frame (1).svg" alt="close" />
              </button>
            </div>

            <p className="text-[1.8rem] transition duration-1000 ease-in-out flex text-[#FFF] font-[500] mt-[10px]">
              Add services you provide
            </p>
          </div>

          <div className="flex items-center py-[2rem] gap-[5px]">
            <div className="bg-[white] w-[8px] h-[8px] rounded-full"></div>
            <p className="text-[white] md:text-[18px] text-[16px]">Price</p>
          </div>

          <div>
            <div className="bg-[#323232] p-[1rem] rounded-[0.8rem]">
              <ul className="text-[#ABABAB] md:text-[1.8rem] text-[1.5rem] font-[400]">
                <li>Single Session One-on-one training session (60 minutes)</li>
                <li>5-Session Package - 5 one-on-one training sessions</li>
                <li>10-Session Package - 10 one-on-one training sessions</li>
              </ul>
            </div>

            <div className="w-full flex py-[4rem] justify-center">
              <button className="text-[#D7FD44] transition duration-1000 ease-in-out hidden md:flex text-[1.6rem] font-[700] py-[10px] px-[4rem] rounded-[2.4rem] border border-[#D7FD44]">
                + Add Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
