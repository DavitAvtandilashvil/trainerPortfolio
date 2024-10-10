export default function JourneyScrollCard({ service }) {
  return (
    <div
      className="group relative flex flex-col gap-4 pt-5 pb-7 px-5 rounded-2xl border-[0.063rem] 
      border-[#4D4D4D] max-sm:pt-5 max-sm:pr-5 max-sm:pl-5 max-sm:pb-14 hover:cursor-pointer
      h-[320px] max-sm:h-[300px]"
    >
      <div
        className="w-full h-[244px] max-sm:h-[225px] transition-all duration-300 ease-in-out
        group-hover:h-[180px] max-sm:group-hover:h-[160px]"
      >
        <img
          className="w-full h-full object-cover"
          src={service.image}
          alt={service.name}
        />
      </div>
      <h4 className="font-[700] text-xl text-white max-sm:text-sm">
        {service.name}
      </h4>
      <div
        className="absolute inset-x-5 bottom-4 opacity-0 group-hover:opacity-100 
        transition-opacity duration-300 ease-in-out overflow-y-auto
        h-[70px] max-sm:h-[60px] invisible group-hover:visible"
      >
        <p className="text-base text-[#FFFFFF]">
          {service.description || "Description will be added here"}
        </p>
      </div>
    </div>
  );
}
