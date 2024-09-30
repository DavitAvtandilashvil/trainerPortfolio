export default function SuccessStory() {

  const rows = [...Array(3)].map((_, rowIndex) => (
    <div key={rowIndex} className="flex justify-between mb-6 pt-[24px] pb-[]24px pl-16 pr-16">
      {[...Array(3)].map((_, index) => (
        <img key={index} src={`/s-${rowIndex * 3 + index + 1}.png`} className="w-1/4" />
      ))}
    </div>
  ));


  return (
    <>   
      <div className="border border-[#4D4D4D] p-4 rounded-[16px] mt-[80px]">
      <div className="flex items-center pt-32">
    <div className="flex pr-10 pl-16">
    <img src="/Vector3.png" />
    <img src="/Vector2.png" />
    <img src="/Vector1.png" />
    <img src="/Vector.png" />
    </div>
  <h2
  style={{
    background: "linear-gradient(180deg, #C4C4C4 0%, #737373 100%)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    fontFamily: "Nunito, sans-serif",
  }}
  className="font-bold text-[32px] leading-[43.65px] mb-4 uppercase text-left"
>
Success Story
</h2>
      
    </div>
      {rows}
      <div className="flex float-right pr-16 pb-[24px]">
    <img src="/Vector.png" className="transform rotate-180" />
    <img src="/Vector1.png" className="transform rotate-180" />
    <img src="/Vector2.png" className="transform rotate-180" />
    <img src="/Vector3.png" className="transform rotate-180" />
    </div>
    </div>
   
    </>
    
  );
}
