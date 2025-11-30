'use client'
import About from "@/component/About";
import Coding from "@/component/Coding";
import Contact from "@/component/Contact";
import Experience from "@/component/Experience";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Navbar from "@/component/Navbar";
import Projects from "@/component/Projects";
import Skills from "@/component/Skills";
import { useEffect, useState } from "react";
import IntroAnimation from "@/component/IntroAnimation";
import ParticleBackground from "@/component/ParticleBackground";
import CustomCursor from "@/component/CustomCursor";


export default function Home() {
  const [isDarkMode,setIsDarkMode]=useState(true);
  const [introDone, setIntroDone] = useState(false);
 
  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add('a')
      localStorage.theme='dark'
    }
    else{
      document.documentElement.classList.remove('a')
      localStorage.theme=''
    }
  },[isDarkMode]);
  return (
    <>{
      !introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />
    }
    {introDone &&
      <div className="relative gradient text-white">
        

    <Navbar/>
    <Header/>
    <About/>
    <Skills/>
    <Projects/>
    <Experience/>
    <Coding/>
    <Contact/>
    <Footer/>
    
    </div>
    }

    </>

  );
}
