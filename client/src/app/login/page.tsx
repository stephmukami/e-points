import React from "react";
import Navbar from "../(components)/Navbar";
import Footer from "../(components)/Footer";
import LoginPage from "../(components)/LoginPage";

type Props = object;

function page({}: Props) {
  return (
    <>
      <Navbar />
      <LoginPage />
      <Footer />
    </>
  );
}

export default page;
