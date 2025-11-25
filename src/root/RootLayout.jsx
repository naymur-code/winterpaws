import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="">
      <Outlet />

      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
