import { Link } from "react-router-dom";
import NavLinks from "../sharedComponents/NavLinks";
import { MenuToggle } from "../burderMenu/Toggle";
import { useCycle } from "framer-motion";

export default function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <header className="flex md:pt-[5rem] md:px-[8rem] pt-[4rem] items-center px-[4rem] ">
      <Link className="flex gap-[1.6rem] mr-auto" to={"/"}>
        <img
          className="w-[8.8rem] h-[5.8rem]"
          src="/testLogo.svg"
          alt="textLogo"
        />

        <img
          className=" locoIcon md:w-[5.2rem] md:h-[5.8rem] w-[7.4rem] h-[4.8rem]"
          src="/locoIcon.svg"
          alt="logo"
        />
      </Link>
      <div className="hidden md:flex">
        <NavLinks rounded="20rem" />
      </div>
      <div className="relative z-30 md:hidden">
        <MenuToggle toggle={toggleOpen} isOpen={isOpen} />
      </div>
    </header>
  );
}
