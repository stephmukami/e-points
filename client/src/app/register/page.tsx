import React from "react";
import Navbar from "../(components)/Navbar";
import Footer from "../(components)/Footer";
import Register from "../(components)/Register";

type Props = object;

function page({}: Props) {
  return (
    <>
      <Navbar />
      <Register />
      <Footer />
    </>
  );
}

export default page;
