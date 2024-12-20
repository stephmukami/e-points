import React from "react";
import Navbar from "../(components)/Navbar";
import AboutContent from "../(components)/AboutContent";
import Footer from "../(components)/Footer";

type Props = object;

function page({}: Props) {
  return (
    <div>
      <Navbar />
      <AboutContent />
      <Footer />
    </div>
  );
}

export default page;
