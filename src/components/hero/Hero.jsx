import HeroFooter from "./HeroFooter";

export default function Hero() {
  return (
    <div>
      <div
        className="relative bg-cover bg-center bg-no-repeat h-[49.813rem] 
        w-full max-lg:h-[49.813rem] max-sm:h-[18.278rem]"
        style={{ backgroundImage: `url('images/hero.jpg')` }}
      >
        <h1
          className="absolute top-[21.1875rem] left-[5rem] text-white text-5xl 
        uppercase w-[53rem] font-[800] tracking-[0.19em] max-lg:text-4xl 
        max-lg:w-[40rem] max-sm:invisible"
        >
          Stronger every day,{" "}
          <span className="text-[#999999]"> inside and out</span>
        </h1>
      </div>
      <HeroFooter />
    </div>
  );
}
