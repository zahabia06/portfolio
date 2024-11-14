"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills"; // Capitalized to match component usage
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 200,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh(); // Ensure animations are applied on dynamic content changes
  }, []);

  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <About />
    </main>
  );
}
