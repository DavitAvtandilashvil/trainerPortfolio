import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex p-[20px]">
      <img className="mr-auto" src="" alt="logo" />
      <div className="flex gap-[10px]">
        <Link to={"/"}>HOME</Link>
        <Link to={"/stories"}> STORIES</Link>
        <Link to={"/services"}>SERVICES</Link>
        <Link to={"/contact"}>CONTACT</Link>
      </div>
    </div>
  );
}
