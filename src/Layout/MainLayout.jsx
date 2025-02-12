import React from "react";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import toast, { Toaster } from "react-hot-toast";
const MainLayout = () => {
  return (
    <div className="font-poppins">
      <section className="bg-orange-500 opacity-90 sticky top-0 z-50 backdrop-blur-sm">
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
