import React from "react";
import Navbar from "../UI/Navbar/Navbar";
import Footer from "../UI/Footer/Footer";

const page = (props) => {
  return (
    <>
      <Navbar />
      <div>{props.children}</div>
      <Footer />
    </>
  );
};

export default page;
