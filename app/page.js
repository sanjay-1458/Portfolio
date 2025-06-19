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


export default function Home() {
  const [isDarkMode,setIsDarkMode]=useState(true);
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
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Skills/>
    <Projects/>
    <Experience/>
    <Coding/>
    <Contact/>
    <Footer/>
    </>
  );
}
