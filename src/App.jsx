import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import StoriesPage from "./pages/StoriesPage";
import Layout from "./layout/Layout";
import ServicesPage from "./pages/servicesPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
