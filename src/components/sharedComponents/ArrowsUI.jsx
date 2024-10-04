/* eslint-disable react/prop-types */
export default function ArrowsUI({ swipe, className }) {
  return (
    <div
      onClick={swipe}
      className={`flex pr-10 pl-16 cursor-pointer transition-all duration-[1s] ease-in-out hover:filter hover:brightness-0 hover:invert hover:hue-rotate-[90deg]
       ${className == "prevArrow" && "flex items-end justify-end w-[100%]"} `}
    >
      <img
        className={` ${
          className == "prevArrow" && "rotate-180"
        } arrowImage hidden lg:flex transition-all duration-[1s] ease-in-out`}
        src="/Vector3.png"
      />
      <img
        className={` ${
          className == "prevArrow" && "rotate-180"
        } arrowImage hidden md:flex transition-all duration-[1s] ease-in-out`}
        src="/Vector2.png"
      />
      <img
        className={`${className == "prevArrow" && "rotate-180"} arrowImage`}
        src="/Vector1.png"
      />
      <img
        className={`${className == "prevArrow" && "rotate-180"} arrowImage`}
        src="/Vector.png"
      />
    </div>
  );
}
