import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Ticker from "./Components/Ticker/Ticker";

function Layout() {
  return (
    <>
      <Header />
      <Ticker />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
