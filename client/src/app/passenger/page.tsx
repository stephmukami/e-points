import React from "react";
import Navbar from "../(components)/Navbar";
import Footer from "../(components)/Footer";
import PassengerContent from "../(components)/PassengerContent";

type Props = object;

function page({}: Props) {
  return (
    <>
      <Navbar />
      <PassengerContent/>
      <Footer />
    </>
  );
}

export default page;
