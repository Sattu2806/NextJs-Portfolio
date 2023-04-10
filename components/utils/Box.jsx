import React, {useState, useEffect} from "react";
import { SiAntdesign } from "react-icons/si";
import {BiCodeAlt} from "react-icons/bi"
import {TbSeo} from "react-icons/tb"


const Box = ({ headline, desc, project, }) => {
    const [isHovered, setisHovered] = useState(false);

    const handleMouseEnter = () => {
        setisHovered(true);
      };
    
      const handleMouseLeave = () => {
        setisHovered(false);
      };

      const [lower975, setlower975] = useState(false);
      const [lower790, setlower790] = useState(false);

    useEffect(() => {
    function handleResize () {
      setlower975(window.innerWidth<975);
      setlower790(window.innerWidth<790);

    }
    window.addEventListener('resize', handleResize);
    
      return () => {
        window.removeEventListener('resize', handleResize);
      };
  }, [])
  return (
    <section className={`flex justify-between items-baseline cursor-pointer ${lower975 ? "w-11/12": "w-10/12"} ${lower790 ? "w-9/12 ": ""} m-auto text-white ease-in duration-300 ${isHovered ? "shadow-4xl" : ""} p-8 font-Roboto_mono bg-background rounded-xl`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="text">
        <h1 className={`text-3xl ease-in duration-300 ${isHovered ? "text-green" : ""} `}>{headline}</h1>
        <p className="opacity-70 mt-2 mb-5">{desc}</p>
        <p className={`text-base ease-in duration-300 ${isHovered ? "underline underline-offset-2" : ""} `} >{project}</p>
      </div>
      <div className="icon ">
        {headline === "Design" && <SiAntdesign className={`text-2xl  ease-in duration-300 ${isHovered ? "text-green" : ""} `} />}
        {headline === "Front-End" && <BiCodeAlt className={`text-3xl ease-in duration-300 ${isHovered ? "text-green" : ""} `} />}
        {headline === "SEO" && <TbSeo className={`text-3xl ease-in duration-300 ${isHovered ? "text-green" : ""} `} />}
      </div>
    </section>
  );
};

export default Box;
