import { Link } from "react-router-dom";
import NavLinks from "../sharedComponents/NavLinks";

export default function Header() {
  return (
    <header className="flex md:pt-[5rem] md:px-[8rem] pt-[4rem] items-center px-[4rem] ">
      <Link className="flex gap-[1.6rem] mr-auto" to={"/"}>
        <img
          className="w-[8.8rem] h-[5.8rem]"
          src="/testLogo.svg"
          alt="textLogo"
        />

        <img
          className="hidden md:flex md:w-[5.2rem] md:h-[5.8rem] w-[7.4rem] h-[4.8rem]"
          src="/locoIcon.svg"
          alt="logo"
        />
      </Link>
      <div className="hidden md:flex">
        <NavLinks rounded="20rem" />
      </div>
    </header>
  );
}
