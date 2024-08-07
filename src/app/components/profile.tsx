"use client";
import Aryan from "@/app/skills/snapedit_1708932400544 (1).png";
import Image from "next/image";
import "../globals.css";
import Message from "../skills/Message.svg";
function Profile() {
  return (
    <>
      <div className='bg-purple-500 flex flex-col w-full rounded-xl p-2 pt-8 md:pt-2 pb-0 md:min-h-[98vh] min-h-[820px] justify-center overflow-hidden'>
        <div className='max-w-[2000px] xl:px-[150px] md:px-[30px] lg:px-[90px] sm:px-[20px] justify-center items-center md:flex'>
          <div className='md:w-1/2 max-w-7xl'>
            <h1
              data-aos='flip-up'
              className='text-[#4C40F7] text-xl md:text-2xl'
            >
              __मेरा परिचय
            </h1>
            <h2
              data-aos='flip-down'
              className='kanit text-4xl font-bold w-full flex md:text-6xl lg:text-7xl py-3 md:pt-6'
            >
              Hey There,
              <br /> I’m Aryan
            </h2>
            <div
              data-aos='flip-down'
              className='kanit md:text-lg xl:text-xl text-slate-700'
            >
              I am a{" "}
              <span className='font-mono text-black'>Full Stack Developer</span>{" "}
              with expertise in creating seamless client experiences through
              responsive designs. I specialize in front-end technologies like{" "}
              <span className='text-black'>
                React JS, Next JS, and Tailwind CSS ,
              </span>
              and I am proficient in backend development using{" "}
              <span className='text-black'>
                Node.js, Express.js, MongoDB, and MySQL.
              </span>
            </div>
            <div className='flex flex-row gap-4 sm:gap-12'>
              <a href='#Contact-form'>
                <button
                  data-aos='flip-down'
                  className='kanit max-w-36 mt-4 p-4 my-3 bg-[#4C40F7] hover:bg-[#4c40f7e3] rounded-2xl text-white hover:mt-2 hover:mb-5 flex relative'
                >
                  Say_Hello
                  <Image className='h-6' src={Message} alt='' />
                </button>
              </a>
              <a href='#Projects'>
                <button
                  data-aos='flip-down'
                  className='max-w-44 mt-4 p-4 my-3 bg-[#4C40F7] hover:bg-[#4c40f7e3] rounded-2xl text-white hover:mt-2 hover:mb-5 flex gap-2'
                >
                  Explore_Project
                  <Image className='h-6 relative' src={Message} alt='' />
                </button>
              </a>
            </div>
          </div>
          <Image src={Aryan} alt='Aryan' className='md:w-1/2 w-full b-0' />
        </div>
      </div>
    </>
  );
}

export default Profile;
