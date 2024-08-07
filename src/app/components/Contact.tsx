"use client";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { useState } from "react";
import Download from "../skills/Download.svg";
import Message from "../skills/Message.svg";

function Contact() {
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      setErrorMessage("Please fill out all fields");
      setShowError(true);
      setTimeout(() => setShowError(false), 2000);
    } else if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address");
      setShowError(true);
      setTimeout(() => setShowError(false), 2000);
    } else {
      e.target.submit(); // Submit the form
    }
  };

  return (
    <div
      id='Contact-form'
      className='bg-purple-500  w-full  flex flex-col  rounded-xl p-2 pt-8 md:pt-2 pb-0 md:min-h-[98vh] min-h-[820px] justify-center '
    >
      <div className='max-w-[2000px] xl:px-[150px] md:px-[30px] lg:px-[90px] sm:px-[20px] justify-center items-center md:flex gap-5'>
        <div className='w-full md:w-1/2 pb-5'>
          <h1
            data-aos='flip-up'
            className='text-[#4C40F7] text-xl md:text-2xl '
          >
            __मुझसे संपर्क करें
          </h1>
          <h2
            data-aos='flip-down'
            className='kanit text-4xl font-semibold w-full  md:text-5xl py-3 md:pt-6'
          >
            Let’s make something amazing together Start By{" "}
            <span className='text-slate-500'>Saying Hi</span>
          </h2>
          <p data-aos='flip-down' className=' pt-2 text-[#000000ab]'>
            I invite you to contact me if you have any questions, inquiries, or
            would like to discuss collaborating on a project. I am always happy
            to connect with others and share my passion for Web Development.
          </p>
          <p data-aos='flip-down' className='text-[#000000ab] pt-2'>
            Feel free to contact me for business services, web development, and
            other professional inquiries!
          </p>
          <a
            download={
              "https://drive.google.com/file/d/14DC9LR1pV7nRftaOSkUDr7FS4zLxhqfj/view"
            }
            href={
              "https://drive.google.com/file/d/14DC9LR1pV7nRftaOSkUDr7FS4zLxhqfj/view"
            }
          >
            <button
              data-aos='flip-up'
              className='mt-4 p-4 my-3 bg-[#4C40F7] rounded-2xl text-white  hover:mt-2 hover:mb-5 flex'
            >
              Resume &nbsp;
              <Image className='h-6 w-6' src={Download} alt='' />
            </button>
          </a>
          <div className='contacts flex justify-evenly flex-col gap-3  text-[#000000ab] '>
            <a href='mailto: aryanyadav7822900241@gmail.com' className='  '>
              <span>
                <MailOutlined style={{ fontSize: "30px" }} />
                &nbsp;&nbsp;aryanyadav7822900241@gmail.com
              </span>
            </a>
            <a href='tel:+917822900241' className='  '>
              <span>
                <PhoneOutlined style={{ fontSize: "30px" }} />
                &nbsp; +91 7822900241
              </span>
            </a>
            <a
              href='https://www.linkedin.com/in/aryan-yadav-240140267/'
              className='  '
            >
              <span>
                <LinkedinOutlined style={{ fontSize: "30px" }} />
                &nbsp; Yadav Aryan
              </span>
            </a>
            <a href='https://github.com/YadavAryan2005' className='  '>
              <span>
                <GithubOutlined style={{ fontSize: "30px" }} />
                &nbsp; YadavAryan2005
              </span>
            </a>
          </div>
        </div>
        <form
          data-aos='fade-up'
          action='https://formsubmit.co/2bdeb5e61a50b97bb1b683b45cdb6cb1'
          method='POST'
          className='flex flex-col gap-5 w-full md:w-1/2'
          onSubmit={handleSubmit}
        >
          {showError && (
            <div className='bg-red-500 text-white p-2 rounded-xl text-center'>
              {errorMessage}
            </div>
          )}
          <input
            className='p-3 rounded-xl border focus:border-purple-800 hover:border-purple-600'
            type='text'
            name='name'
            placeholder='Name'
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            className='p-3 rounded-xl border focus:border-purple-800 hover:border-purple-600'
            type='text'
            name='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleInputChange}
          />
          <textarea
            className='p-3 rounded-xl border focus:border-purple-800 hover:border-purple-600'
            name='message'
            cols={30}
            rows={10}
            placeholder='Message'
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
          <button
            className='mt-4 p-4 my-3 bg-[#4C40F7] rounded-2xl text-white w-28 hover:mt-2 hover:mb-5 flex'
            type='submit'
          >
            Submit&nbsp;
            <Image className='h-6' src={Message} alt='' />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
