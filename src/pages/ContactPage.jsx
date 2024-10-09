import { ToastContainer } from "react-toastify";
import Contact from "../components/contact/Contact";

export default function ContactPage() {
  return (
    <div>
      <Contact />
      <ToastContainer theme="dark" />
    </div>
  );
}
