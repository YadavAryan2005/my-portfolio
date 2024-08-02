"use client";
import Image from "next/image";
import { useState } from "react";
// import "../globals.css";
import Stock_Smart from "../project/Stock_Smart.png";
import services1 from "../skills/services1.png";
function Project() {
  const [show, setShow] = useState(false);
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
            className='font-serif text-4xl font-bold w-full flex  md:text-6xl lg:text-7xl py-3 md:pt-6'
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
        <div className='w-full md:w-1/2'>
          <div className='flex flex-col gap-5'>
            <h1>
              I am a full-stack developer with a passion for building beautiful
              and user-friendly web applications.
            </h1>
            <div
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
              className='rounded-md  overflow-clip relative  flex-col flex justify-center items-center text-4xl text-[#4C40F7] '
            >
              <Image
                src={Stock_Smart}
                alt='project1'
                className='h-full w-full object-cover min-w-[400px] lg:min-w-0'
              />
              <button
                className='absolute z-50 right-0 mr-2 '
                onMouseEnter={() => setShow(false)}
                onMouseLeave={() => setShow(true)}
              >
                &#10095;
              </button>
              <button
                className='absolute z-50 left-0 ml-2 '
                onMouseEnter={() => setShow(false)}
                onMouseLeave={() => setShow(true)}
              >
                &#10094;
              </button>
              <div
                className={`backdrop-blur-sm transition duration-700 ease-in-out  bg-white/30 w-full drop-shadow-sm  h-full absolute flex justify-center items-center  z-10 ${
                  show ? "block" : "hidden"
                } text-lg sm:text-2xl text-black text-center font-serif font-semibold`}
              >
                <div className='sm:p-10'>
                  Smart Stock
                  <br />
                  <p className='text-sm sm:text-xl md:text-2xl'>
                    Next Js,Tailwind CSS, Node Js,Mongo Db
                  </p>
                  <button className='bg-[#4C40F7] text-white rounded-md p-2 text-sm sm:text-xl md:px-4'>
                    Live Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
