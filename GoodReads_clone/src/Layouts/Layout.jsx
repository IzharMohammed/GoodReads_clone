import Footer from "Components/Footer/Footer";
import Navbar from "Components/Navbar/Navbar";
import React from "react";

function Layout({children}) {
  return (
    <>
      <Navbar />
      <div className=" border border-white">
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
