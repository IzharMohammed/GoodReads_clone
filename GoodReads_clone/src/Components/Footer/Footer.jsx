import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

function Footer() {
  return (
    <div className="flex  justify-between p-8 h-[10vh]  ">
      <section className="text-xl text-white"> Copyright 2023 | All rights reserved  </section>
      <section className=" flex gap-6 text-white  ">
        {<FaInstagram />}
        {<BsTwitterX />}
        {<FaLinkedin />}
      </section>
    </div>
  );
}

export default Footer;
