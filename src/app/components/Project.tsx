"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import services1 from "../skills/services1.png";
const project = [
  {
    id: 1,
    img: "/Stock_Smart.png",
    name: "Stock Smart",
    tech: "Next Js,Typescript,Tailwind CSS, Node Js,Mongo Db",
    link: "https://stock-smart-next-js.vercel.app/",
  },
  {
    id: 2,
    img: "/headphone.png",
    name: "Headphone",
    tech: "React Js,Next Js,Tailwind CSS",
    link: "https://headphone-8uyx.vercel.app/",
  },
];
function Project() {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(1);
  return (
    <div
      id='Projects'
      className='w-full  flex flex-col  rounded-xl p-2 pt-8 md:pt-2 pb-0 md:min-h-[98vh] min-h-[820px] justify-center '
    >
      <div className='max-w-[2000px] xl:px-[150px] md:px-[30px] lg:px-[90px] sm:px-[20px] justify-center items-center md:flex'>
        <div className='w-full md:w-1/2'>
          <h1 data-aos='flip-up' className='text-[#4C40F7] text-xl md:text-2xl'>
            __मेरा काम
          </h1>
          <h2
            data-aos='flip-down'
            className='kanit text-4xl font-bold w-full flex  md:text-6xl lg:text-7xl py-3 md:pt-6'
          >
            My Projects
          </h2>
          <Image
            src={services1}
            alt=''
            data-aos='fade-up'
            className='flex justify-center md:justify-start'
          />
        </div>
        <div className='w-full md:w-1/2 ' data-aos='zoom-in-up'>
          <div className='flex flex-col gap-5'>
            <h1>
              I am a full-stack developer with a passion for building beautiful
              and user-friendly web applications.
            </h1>
            <div className='relative'>
              {project.map((data) =>
                data.id === count ? (
                  <div
                    key={data.id}
                    onMouseEnter={() => setShow(true)}
                    onMouseLeave={() => setShow(false)}
                    className='rounded-md overflow-hidden relative flex-col flex justify-center items-center text-4xl text-[#4C40F7] transition-all duration-500 ease-in-out'
                  >
                    <Image
                      src={data.img}
                      width={400}
                      height={400}
                      alt='project1'
                      className='h-full w-full object-cover min-w-[400px] lg:min-w-0 transition-opacity duration-500 ease-in-out'
                    />
                    <button
                      className='absolute z-50 right-0 mr-2'
                      onMouseEnter={() => setShow(false)}
                      onMouseLeave={() => setShow(true)}
                      onClick={() => {
                        if (count === 1) {
                          setCount(2);
                        } else {
                          setCount(1);
                        }
                      }}
                    >
                      &#10095;
                    </button>
                    <button
                      className='absolute z-50 left-0 ml-2'
                      onMouseEnter={() => setShow(false)}
                      onMouseLeave={() => setShow(true)}
                      onClick={() => {
                        if (count === 2) {
                          setCount(1);
                        } else {
                          setCount(2);
                        }
                      }}
                    >
                      &#10094;
                    </button>
                    <div
                      className={`backdrop-blur-[2px] transition-opacity duration-300 ease-in-out bg-white/30 w-full drop-shadow-sm h-full absolute flex justify-center items-center z-10 ${
                        show ? "opacity-100" : "opacity-0"
                      } text-lg sm:text-2xl text-black text-center kanit font-semibold`}
                    >
                      <div className='p-10'>
                        <span className='text-[#4C40F7]'>{data.name}</span>
                        <br />
                        <p className='text-md sm:text-xl md:text-2xl'>
                          {data.tech}
                        </p>
                        <button className='bg-[#4C40F7] hover:bg-[#4C40F7]/90 text-white rounded-md p-2 text-sm sm:text-xl md:px-4'>
                          <Link href={data.link}>Live Preview</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  " "
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
