import Contact from "./components/Contact";
import Project from "./components/Project";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Profile from "./components/profile";
export default function Home() {
  return (
    <div className='p-2 flex flex-col gap-2'>
      <Profile />
      <Services />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}
