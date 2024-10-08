import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function Layout() {
  return (
    <div>
      <Header />
      <main className="pt-[5rem] px-[8rem]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
