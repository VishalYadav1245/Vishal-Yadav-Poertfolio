import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Aboutme from "./Components/Aboutme";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Skill from "./Components/Skill";
import SocialBar from "./Components/SocialBar";



export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden">

      <Header />
      <SocialBar />

      {/* NO WRAPPER DIVS WITH ID — remove duplicate IDs */}
      <Hero />
      <Aboutme />
      <Skill />
      <Project />
      <Contact />
      
      <Footer />

      {/* Background Image */}
      <img
        src="/wp.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        alt="background"
      />
    </div>
  );
}
