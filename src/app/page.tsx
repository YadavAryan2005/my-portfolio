import Services from "./components/Services";
import Profile from "./components/profile";
export default function Home() {
  return (
    <div className='p-2'>
      <Profile />
      <Services />
    </div>
  );
}
