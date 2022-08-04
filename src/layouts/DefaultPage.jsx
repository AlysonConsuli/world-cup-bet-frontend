import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const DefaultPage = () => {
  return (
    <>
      <Header />
      <Footer />
      <Outlet />
    </>
  );
};

export const AuthDefaultPage = () => {
  return (
    <>
      <Footer />
      <Outlet />
    </>
  );
};