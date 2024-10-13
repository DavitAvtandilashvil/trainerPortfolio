import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import StoriesPage from "./pages/StoriesPage";
import Layout from "./layout/Layout";
import ServicesPage from "./pages/servicesPage";
import ContactPage from "./pages/ContactPage";
import AboutMe from "./components/aboutMe/AboutMe";
import AdminSignIn from "./pages/AdminSignIn";
import DashBoard from "./pages/adminsPages/DashBoard";
import ProtectedRoute from "./components/protectedRoute/protectedRoute";
import { useEffect, useState } from "react";
import Services from "./pages/adminsPages/Services";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const savedAuth = localStorage.getItem("isAuthenticated");
    return savedAuth ? JSON.parse(savedAuth) : false;
  });

  useEffect(() => {
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutMe />} />
      </Route>
      <Route>
        <Route
          path="/admin"
          element={<AdminSignIn setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/admin/dashBoard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <DashBoard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/services"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Services />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
