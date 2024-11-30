import React from "react";
import Navbar from "../(components)/Navbar";
import Footer from "../(components)/Footer";
import FamilyHistory from "../(components)/FamilyHistory";

type Props = object;

function page({}: Props) {
  return (
    <>
      <Navbar />
      <FamilyHistory />
      <Footer />
    </>
  );
}

export default page;
