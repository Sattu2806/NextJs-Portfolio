import React, { useState, useEffect } from "react";
import Image from "next/image";

const Client = ({ index, onClick, testimonial }) => {
  const [selectedClient, setSelectedClient] = useState(false);
  const { name, position, idname } = testimonial;
  const [below1000, setlower1000] = useState(false)
  const [below850, setlower850] = useState(false)
  const [below630, setlower630] = useState(false)

  const handleClientClick = () => {
    setSelectedClient(!selectedClient);
    onClick(index);
  };

  useEffect(() => {
    function handleResize () {
      setlower1000(window.innerWidth<1000);
      setlower850(window.innerWidth<850);
      setlower630(window.innerWidth<630);

    }
    window.addEventListener('resize', handleResize);
    
      return () => {
        window.removeEventListener('resize', handleResize);
      };
  }, [])
  return (
    <div
      className={`font-Dm_Sans flex items-center justify-between  mt-10 pr-10 py-2 transition duration-500 ease-in-out ${below850 ? "w-full shadow-5xl p-3 rounded-xl": "w-2/6"} ${below630 ? "w-10/12 shadow-5xl p-3 rounded-xl": ""}`}
      onClick={handleClientClick}
    >
      <div className="img">
      <Image
        src={`/client${index + 1}.jpg`}
        alt="client"
        width={100}
        height={100}
        className="w-10 h-10 rounded-50 object-cover"
      />
      </div>
      <div className={`detail ${below1000 ? "text-sm": ""}`}>
        <p>{name}</p>
        <span>{position}</span>
        <span className="text-green ml-2">{idname}</span>
      </div>
    </div>
  );
};

export default Client;
