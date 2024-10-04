/* eslint-disable react/prop-types */
export default function ArrowsUI({ swipe, className }) {
  return (
    <div
      onClick={swipe}
      className={`${
        swipe &&
        "hover:filter hover:brightness-0 hover:invert hover:hue-rotate-[90deg"
      }  flex pr-10  cursor-pointer transition-all duration-[0.8s] ease-in-out ]
       ${
         className == "prevArrow" && "flex pl-16 items-end justify-end w-[100%]"
       } `}
    >
      <img
        className={` ${className == "prevArrow" && "rotate-180"} arrowImage ${
          swipe ? "w-[2.7rem] h-[4rem]" : "w-[2.1rem] h-[3.2rem]"
        } hidden lg:flex transition-all duration-[1s] ease-in-out`}
        src="/Vector3.png"
      />
      <img
        className={` ${className == "prevArrow" && "rotate-180"} arrowImage ${
          swipe ? "w-[2.7rem] h-[4rem]" : "w-[2.1rem] h-[3.2rem]"
        } hidden md:flex transition-all duration-[1s] ease-in-out`}
        src="/Vector2.png"
      />
      <img
        className={`${className == "prevArrow" && "rotate-180"}  ${
          swipe ? "w-[2.7rem] h-[4rem]" : "w-[2.1rem] h-[3.2rem]"
        } arrowImage`}
        src="/Vector1.png"
      />
      <img
        className={`${className == "prevArrow" && "rotate-180"} ${
          swipe ? "w-[2.7rem] h-[4rem]" : "w-[2.1rem] h-[3.2rem]"
        } arrowImage`}
        src="/Vector.png"
      />
    </div>
  );
}
