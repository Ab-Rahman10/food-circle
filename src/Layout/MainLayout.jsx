import React from "react";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="font-poppins">
      <div className="2xl:w-10/12 mx-auto">
        <Navbar></Navbar>
      </div>
      <div className="min-h-[calc(100vh - 401px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
