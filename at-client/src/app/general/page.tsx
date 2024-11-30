import React from "react";
import Navbar from "../(components)/Navbar";
import Footer from "../(components)/Footer";
import LevelCustomer from "../(components)/LevelCustomer";

type Props = object;

function page({}: Props) {
  return (
    <>
      <Navbar />
      <LevelCustomer/>
      <Footer />
    </>
  );
}

export default page;
