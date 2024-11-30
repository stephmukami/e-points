import React from "react";
import Navbar from "../(components)/Navbar";
import Footer from "../(components)/Footer";
import Diet from "../(components)/Diet";

type Props = object;

function page({}: Props) {
  return (
    <>
      <Navbar />
      <Diet />
      <Footer />
    </>
  );
}

export default page;
