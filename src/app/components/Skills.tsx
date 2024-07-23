import Image from "next/image";
import Html from "../skills/1 Html.svg";
import Node from "../skills/11 Node JS.svg";
import Express from "../skills/12 Express JS.svg";
import MongoDB from "../skills/14 MongoDB.svg";
import MySQL from "../skills/15 MySQL.svg";
import Css from "../skills/2 Css.svg";
import Tailwind from "../skills/3 Tailwind Css.svg";
import antd from "../skills/4 Ant Design.svg";
import JavaScript from "../skills/6 JavaScript.svg";
import TypeScript from "../skills/7 TypeScript.svg";
import react from "../skills/8 React JS.svg";
import Next from "../skills/9 Next JS.svg";
import git from "../skills/git-icon-fd611ca1.png";
import github from "../skills/github_octocat-4c000ece.png";
import Php from "../skills/php123-removebg-preview.png";
export default function Skill() {
  return (
    <div className='bg-[#fcda69] w-full h-full flex flex-col  rounded-xl p-2 pt-8 md:pt-2 pb-0 md:min-h-[98vh] min-h-[820px] justify-center '>
      <div className='max-w-[2000px] xl:px-[150px] md:px-[30px] lg:px-[90px] sm:px-[20px] '>
        <div className='w-full flex md:justify-center'>
          <div data-aos='flip-down' className='flex flex-col'>
            <span className='text-blue-600 text-xl md:text-2xl'>__कौशल</span>
            <span className='font-serif text-4xl font-bold md:text-5xl'>
              Skills
            </span>
            <span className='text-md font-serif text-slate-600'>
              Languages,Technologies and tools that I have learned and applied
              to my projects
            </span>
          </div>
        </div>
        <div className='flex flex-wrap justify-around flex-grow'>
          <div data-aos='fade-up' className='p-5 lg:w-1/6 flex justify-center'>
            <div>
              <Image className=' w-28 h-28 md:w-32 md:h-32' src={Html} alt='' />
              <span className=' flex justify-center'>HTML5</span>
            </div>
          </div>

          <div data-aos='fade-up' className='p-5 lg:w-1/6 flex justify-center'>
            <div>
              <Image className=' w-28 h-28 md:w-32 md:h-32' src={Css} alt='' />
              <span className=' flex justify-center'>CSS3</span>
            </div>
          </div>

          <div data-aos='fade-up' className='p-5 lg:w-1/6 flex justify-center'>
            <div>
              <Image
                className='w-28 h-28 md:w-32 md:h-32'
                src={Tailwind}
                alt=''
              />
              <span className=' flex justify-center'>Tailwind-CSS</span>
            </div>
          </div>
          <div data-aos='fade-up' className='p-5 lg:w-1/6 flex justify-center'>
            <div>
              <Image
                className=' w-28 h-28 md:w-32 md:h-32'
                src={JavaScript}
                alt=''
              />
              <span className=' flex justify-center'>JavaScript</span>
            </div>
          </div>
          <div data-aos='fade-up' className='p-5 lg:w-1/6 flex justify-center'>
            <div>
              <Image
                className=' w-28 h-28 md:w-32 md:h-32'
                src={TypeScript}
                alt=''
              />
              <span className=' flex justify-center'>TypeScript</span>
            </div>
          </div>

          <div data-aos='fade-up' className='p-5 lg:w-1/6 flex justify-center'>
            <div>
              <Image
                className=' w-28 h-28 md:w-32 md:h-32'
                src={react}
                alt=''
              />
              <span className=' flex justify-center'>React JS</span>
            </div>
          </div>
          <div data-aos='fade-up' className='p-5 lg:w-1/6 flex justify-center'>
            <div>
              <Image className=' w-28 h-28 md:w-32 md:h-32' src={antd} alt='' />
              <span className=' flex justify-center'>Ant Design</span>
            </div>
          </div>

          <div data-aos='fade-up' className='p-5 lg:w-1/6 flex justify-center'>
            <div>
              <Image className=' w-28 h-28 md:w-32 md:h-32' src={Next} alt='' />
              <span className=' flex justify-center'>NEXT JS</span>
            </div>
          </div>
          <div data-aos='fade-up' className='p-5 lg:w-1/6 flex justify-center'>
            <div>
              <Image className=' w-28 h-28 md:w-32 md:h-32' src={Php} alt='' />
              <span className=' flex justify-center'>PHP</span>
            </div>
          </div>
          <div data-aos='fade-up' className='p-5 lg:w-1/6 flex justify-center'>
            <div>
              <Image className=' w-28 h-28 md:w-32 md:h-32' src={Node} alt='' />
              <span className=' flex justify-center'>Node JS</span>
            </div>
          </div>
          <div data-aos='fade-up' className='p-5 lg:w-1/6 flex justify-center'>
            <div>
              <Image
                className='w-28 h-28 md:w-32 md:h-32'
                src={Express}
                alt=''
              />
              <span className=' flex justify-center'>Express JS</span>
            </div>
          </div>
          <div data-aos='fade-up' className='p-5 lg:w-1/6 flex justify-center'>
            <div>
              <Image
                className=' w-28 h-28 md:w-32 md:h-32'
                src={MongoDB}
                alt=''
              />
              <span className=' flex justify-center'>MongoDB</span>
            </div>
          </div>
          <div data-aos='fade-up' className='p-5 lg:w-1/6 flex justify-center'>
            <div>
              <Image
                className=' w-28 h-28 md:w-32 md:h-32'
                src={MySQL}
                alt=''
              />
              <span className=' flex justify-center'>MySQL</span>
            </div>
          </div>
          <div data-aos='fade-up' className='p-5 lg:w-1/6 flex justify-center'>
            <div>
              <Image className=' w-28 h-28 md:w-32 md:h-32' src={git} alt='' />
              <span className=' flex justify-center'>Git</span>
            </div>
          </div>
          <div data-aos='fade-up' className='p-5 lg:w-1/6 flex justify-center'>
            <div>
              <Image
                className=' w-28 h-28 md:w-32 md:h-32'
                src={github}
                alt=''
              />
              <span className=' flex justify-center'>Github</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
