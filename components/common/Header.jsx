import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import {BiChevronRight, BiChevronLeft} from "react-icons/bi"
import {IoLogoTwitter} from "react-icons/io"
import {AiOutlineGithub} from "react-icons/ai"
import {HiMail} from "react-icons/hi"
import {RxHamburgerMenu} from "react-icons/rx"
import {inter, dm_sans, roboto_mono} from "../utils/font"


const Header = () => {
  const [servicesHovered, setServicesHovered] = useState(false);
  const [worksHovered, setWorksHovered] = useState(false);
  const [notesHovered, setNotesHovered] = useState(false);
  const [contactsHovered, setContactsHovered] = useState(false);
  const [twitter, settwitter] = useState(false);
  const [github, setgithub] = useState(false);
  const [below1050, setbelow1050] = useState(false)
  const [below950, setbelow950] = useState(false)
  const [below850, setbelow850] = useState(false)
  const [isMobile, setMobile] = useState(false)

  const handleMouseEnter = () => {
    setServicesHovered(true);
  };

  const handleMouseLeave = () => {
    setServicesHovered(false);
  };
  const handleMouseEnter1 = () => {
    setWorksHovered(true);
  };

  const handleMouseLeave1 = () => {
    setWorksHovered(false);
  };
  const handleMouseEnter2 = () => {
    setNotesHovered(true);
  };

  const handleMouseLeave2 = () => {
    setNotesHovered(false);
  };
  const handleMouseEnter3 = () => {
    setContactsHovered(true);
  };

  const handleMouseLeave3 = () => {
    setContactsHovered(false);
  };
  const handleMouseEnter4 = () => {
    settwitter(true);
  };

  const handleMouseLeave4 = () => {
    settwitter(false);
  };
  const handleMouseEnter5 = () => {
    setgithub(true);
  };

  const handleMouseLeave5 = () => {
    setgithub(false);
  };


  useEffect(() => {
    function handleResize() {
      setbelow1050(window.innerWidth < 1050);
      setbelow950(window.innerWidth<950)
      setbelow850(window.innerWidth<850)
    }

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={inter.className}>
      <div className={`flex relative items-center justify-between h-20 text-white ${below1050 ? "w-full p-2" : "m-auto w-11/12"} ${isMobile ? "bg-darkgray w-full" : ""}`}>
        <div className={`name cursor-pointer p-0 m-0 ${below850 ? "text-2xl" : "text-3xl"}`}>
        <span className={`${dm_sans.className} font-medium hover:text-green ease-in duration-200`}>Sattu</span>
          <span>Code</span>
        </div>

      <div className={`middle-nav ease-in duration-300 ${roboto_mono.className} ${isMobile ? "mt-44 absolute right-0 top-[-100px] bg-darkgray w-full z-40" : (below850 ? "mt-[-500px] " : "")}`} onClick={() => setMobile(false)}>
          <ul className={`${below850 ? " block text-center space-y-6" :"flex space-x-6 items-center"}`}>
          <Link href="#services" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="flex items-center">
            <BiChevronLeft className={`inline ${servicesHovered ? 'opacity-100 ease-in duration-300 text-green text-2xl' : 'opacity-0 ease-in duration-300'}`} />
            <span className='opacity-90 hover:text-green ease-in duration-200 hover:font-medium'>Services</span>
            <BiChevronRight className={`inline ${servicesHovered ? 'opacity-100 ease-in duration-300 text-green text-2xl' : 'opacity-0 ease-in duration-300'}`} />
          </Link>
            <Link href="#works" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} className="flex items-center">
            <BiChevronLeft className={`inline ${worksHovered ? 'opacity-100 ease-in duration-300 text-green text-2xl' : 'opacity-0 ease-in duration-300'}`} />
            <span className='opacity-90 hover:text-green ease-in duration-200 hover:font-medium'>Works</span>
            <BiChevronRight className={`inline ${worksHovered ? 'opacity-100 ease-in duration-300 text-green text-2xl' : 'opacity-0 ease-in duration-300'}`} />
            </Link>
            <Link href="#testimonials" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} className="flex items-center">
            <BiChevronLeft className={`inline ${notesHovered ? 'opacity-100 ease-in duration-300 text-green text-2xl' : 'opacity-0 ease-in duration-300'}`} />
            <span className='opacity-90 hover:text-green ease-in duration-200 hover:font-medium'>Testimonials</span>
            <BiChevronRight className={`inline ${notesHovered ? 'opacity-100 ease-in duration-300 text-green text-2xl' : 'opacity-0 ease-in duration-300'}`} />
            </Link>
            <Link href="#contact" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3} className="flex items-center">
            <BiChevronLeft className={`inline ${contactsHovered ? 'opacity-100 ease-in duration-300 text-green text-2xl' : 'opacity-0 ease-in duration-300'}`} />
            <span className='opacity-90 hover:text-green ease-in duration-200 hover:font-medium'>Contacts</span>
            <BiChevronRight className={`inline ${contactsHovered ? 'opacity-100 ease-in duration-300 text-green text-2xl' : 'opacity-0 ease-in duration-300'}`} />
            </Link>
          </ul>
        </div>
        <div className={`end-nav flex space-x-10 items-center  ${below950 ? "space-x-5" : ""}`}>
            <div className="twitter flex space-x-2 items-center cursor-pointer" onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
              <IoLogoTwitter className={`text-2xl ${twitter ? "text-green" : ""}`}/> <span className={` opacity-60 hover:opacity-100 ${below950 ? "hidden" : ""}`}>Twitter</span>
            </div>
            <div className="github flex space-x-2 items-center cursor-pointer" onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
              <AiOutlineGithub className={`text-2xl ${github ? "text-green" : ""}`}/> <span className={`opacity-60 hover:opacity-100 ${below950 ? "hidden" : ""}`}>Github</span>
            </div>
            <div className='relative flex h-[40px] items-center cursor-pointer justify-center before:absolute before:h-[30px] before:w-[30px] before:rounded-50 before:bg-light_gray'>
            <HiMail className="text-2xl text-green z-10"/>
            </div>
            <RxHamburgerMenu className={`${below850 ? "block text-2xl" : "hidden"}`} onClick={() => setMobile(!isMobile)}/>
        </div>
      </div>
      </section>
  )
}

export default Header