import Image from "next/image";
import services2 from "../skills/services2.png";
function Services() {
  return (
    <div className='w-full h-full flex flex-col  rounded-xl p-2 pt-8 md:pt-2 pb-0 md:min-h-[98vh] min-h-[820px] justify-center '>
      <div className='max-w-[2000px] xl:px-[150px] md:px-[30px] lg:px-[90px] sm:px-[20px] justify-center items-center md:flex'>
        <div className='w-full md:w-1/2'>
          <h1 data-aos='flip-up' className='text-[#4C40F7] text-xl md:text-2xl'>
            __मेरी सेवाएं
          </h1>
          <h2
            data-aos='flip-down'
            className='font-serif text-4xl font-bold w-full flex  md:text-6xl lg:text-7xl py-3 md:pt-6'
          >
            Services I Offer
          </h2>
          <Image
            src={services2}
            alt=''
            data-aos='fade-up'
            className='flex justify-center md:justify-start'
          />
        </div>
        <div className='w-full md:w-1/2'>
          <hr data-aos='fade-up' className='Border border-slate-500' />
          <div data-aos='fade-up' className='py-5'>
            <h1 className='font-serif text-4xl font-bold  md:text-5xl lg:text-6xl'>
              1.Full Stack Web <br />
              Development
            </h1>
            <h2 className='float-end pt-3 text-slate-400 font-serif'>
              Proficiency
            </h2>
            <h2 className='float-start pt-3 text-blue-500 font-serif font-bold'>
              Advanced
            </h2>
          </div>
          <br />
          <hr data-aos='fade-up' className='Border border-slate-500' />
          <div data-aos='fade-up' className='py-5'>
            <h1 className='font-serif text-4xl  font-bold md:text-5xl lg:text-6xl'>
              2.Website UI <br />
              Development
            </h1>
            <h2 className='float-end pt-3 text-slate-400 font-serif'>
              Proficiency
            </h2>
            <h2 className='float-start pt-3 text-blue-500 font-serif font-bold'>
              Advanced
            </h2>
          </div>
          <br />
          <hr data-aos='fade-up' className='Border border-slate-500' />
          <div data-aos='fade-up' className='py-5'>
            <h1 className='font-serif text-4xl lg:Text-5xl font-bold lg:text-6xl'>
              3.Website UI/UX <br />
              Design
            </h1>
            <h2 className='float-end pt-3 text-slate-400 font-serif'>
              Proficiency
            </h2>
            <h2 className='float-start pt-3 text-blue-500 font-serif font-bold'>
              Advanced
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
