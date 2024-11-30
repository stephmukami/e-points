import React from "react";
import Navbar from "../(components)/Navbar";
import Footer from "../(components)/Footer";
import HealthFactors from "../(components)/HealthFactors";

type Props = object;

function page({}: Props) {
  return (
    <>
      <Navbar />
      <HealthFactors />
      <Footer />
    </>
  );
}

export default page;
