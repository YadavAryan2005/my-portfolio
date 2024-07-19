import Aryan from "@/app/skills/snapedit_1708932400544 (1).png";
import Image from "next/image";
import Message from "../skills/Message.svg";
function profile() {
  return (
    <div className='bg-[#fcda69] flex flex-col  w-full h-full rounded-xl p-2 pt-8 md:pt-2 pb-0 md:h-[98vh] min-h-[820px] justify-center '>
      <div className='max-w-[2000px] xl:px-[150px] md:px-[30px] lg:px-[90px] sm:px-[20px] justify-center items-center md:flex'>
        <div className='md:w-1/2 w-full'>
          <h1 data-aos='flip-up' className='text-[#4C40F7] text-xl'>
            __मेरा परिचय
          </h1>
          <h2
            data-aos='flip-down'
            className='font-serif text-4xl font-bold w-full flex  md:text-6xl lg:text-7xl py-3 md:pt-6'
          >
            Hey There,
            <br /> I’m Aryan
          </h2>
          <div
            data-aos='flip-down'
            className='font-serif md:text-lg xl:text-xl text-slate-700'
          >
            As a Full Stack Developer, I excel in creating consistent client
            experiences with responsive designs across various devices. My
            expertise in front-end development includes React JS, Ant Design,
            and Tailwind CSS for dynamic web applications. On the backend,
            I&apos;m proficient in Node.js, Express.js, MongoDB, and MySQL,
            integrating backend functionalities and managing complex queries
            effectively
          </div>
          <div className='flex flex-row gap-8 sm:gap-12'>
            <a href='#Contact-form'>
              <button
                data-aos='flip-down'
                className='max-w-36 mt-4 p-4 my-3 bg-[#4C40F7] hover:bg-[#4c40f7e3] rounded-2xl text-white hover:mt-2 hover:mb-5 flex relative'
              >
                Say_Hello
                <Image className='h-6 ' src={Message} alt='' />
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
  );
}

export default profile;
