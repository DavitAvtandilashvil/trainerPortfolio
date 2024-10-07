export default function JourneyScrollCard({ service }) {
  return (
    <div
      className="flex flex-col gap-4 pt-5 pb-7 px-5 rounded-2xl border-[0.063rem] 
      border-[#4D4D4D] max-sm:pt-5 max-sm:pr-5 max-sm:pl-5 max-sm:pb-14"
    >
      <img
        className="w-full h-[244px] max-sm:h-[225px] object-cover"
        src={service.image}
        alt={service.name}
      />
      <h4 className="font-[700] text-xl text-white max-sm:text-sm">
        {service.name}
      </h4>
    </div>
  );
}
