"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Profile from "./components/profile";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div
      data-aos-easing='ease'
      data-aos-duration='1500'
      data-aos-delay='0'
      className='p-2 flex flex-col gap-2 pb-3'
    >
      <Profile />
      <Services />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}
