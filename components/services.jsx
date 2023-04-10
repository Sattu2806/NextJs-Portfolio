import React, {useState, useEffect} from 'react'
import Box from "./utils/Box"

const boxes = [
  {
    headline: "Design",
    desc: "Create Digital products with unique ideas",
    project: "20 Projects",
  },
  {
    headline: "Front-End",
    desc: "I develop front-end with coding super smooth",
    project: "165 Projects"
  },
  {
    headline: "SEO",
    desc: "Boost your business with SEO optimization",
    project: "20 Projects"
  }
];


const Works = () => {
  const [lower1075, setlower1075] = useState(false);
  const [lower790, setlower790] = useState(false);

  useEffect(() => {
    function handleResize () {
      setlower1075(window.innerWidth<1075);
      setlower790(window.innerWidth<790);

    }
    window.addEventListener('resize', handleResize);
    
      return () => {
        window.removeEventListener('resize', handleResize);
      };
  }, [])

  return (
    <section id='services' className={`pt-10 pb-10 bg-gray3`}>
      <div className={`inner mb-20 ${lower790 ? " mt-16" : "grid grid-cols-1 mt-32"}`}>
        <div className="boxs space-y-4">
        {boxes.map((box, index) => (
            <Box key={index} headline={box.headline} desc={box.desc} project={box.project}/>
        ))}
        </div>
        <div className={`text text-white font-Roboto_mono mx-auto ${lower1075 ? "w-11/12": "w-10/12"} ${lower790? "w-9/12 mt-10": ""}`}>
          <p className='opacity-60 '>Introduce</p>
          <h1 className={` ${lower1075 ? "text-3.5xl": "text-4xl"}`}>Hello! I&apos;m Satender</h1>
          <h1 className={` ${lower1075 ? "text-3.5xl mb-5": "text-4xl mb-7"}`}>Maurya</h1>
          <p className={`italic opacity-90 mb-12 leading-1 ${lower1075 ? "textbase": "text-xl"}`}>Every great design with even better story</p>
          <p className={`w-10/12 opacity-75 ${lower790 ? "h-[300px] w-11/12 overflow-x-auto":""}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eaque ad aut! Voluptatibus aliquam autem nemo maiores nobis architecto alias, nostrum hic quidem similique quidem similique natus sapiente reiciendis natus sapiente reiciendis quae delectus deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eaque ad aut! Voluptatibus aliquam autem nemo maiores nobis architecto alias, nostrum hic quidem similique natus sapiente reiciendis quae delectus deserunt!</p>
        </div>
        </div>
    </section>
  )
}

export default Works