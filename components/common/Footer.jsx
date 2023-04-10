import React from "react";
import { IoLogoTwitter } from "react-icons/io";
import { AiOutlineGithub } from "react-icons/ai";
import { GrCodepen } from "react-icons/gr";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <section id="contact" className="bg-gray3 font-Dm_Sans">
      <div className="text-white flex flex-col items-center  py-16">
        <div className="w-36 h-12 border flex items-center justify-center my-8 hover:border-green cursor-pointer">
          <h1 className="text-2xl">Hire Me</h1>
        </div>
        <div className="icons flex space-x-10 text-3xl mb-8">
          <IoLogoTwitter className="cursor-pointer m-2 hover:text-green  ease-in duration-300" />
          <AiOutlineGithub className="cursor-pointer m-2 hover:text-green  ease-in duration-300" />
          <GrCodepen className="cursor-pointer m-2 hover:text-green  ease-in duration-300" />
          <BsYoutube className="cursor-pointer m-2 hover:text-green  ease-in duration-300" />
        </div>
        <p className="tracking-wider text-center">
          All Rights are reserved | &#169; perfectCode 2023 | Made by Sattu
        </p>
      </div>
    </section>
  );
};

export default Footer;
