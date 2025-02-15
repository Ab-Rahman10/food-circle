import React, { useContext } from "react";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { ThemeContext } from "../Provider/AuthProvider";
const MainLayout = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className="font-poppins">
      <section
        className={`${
          isDarkMode ? "bg-gray-950" : "bg-orange-500"
        }   sticky top-0 z-50 backdrop-blur-sm`}
      >
        <Navbar></Navbar>
      </section>
      <section
        className="min-h-screen"
        style={{ minHeight: `calc(100vh - 64px - 353px)` }}
      >
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
      <Toaster position="top-right" />
    </div>
  );
};

export default MainLayout;
