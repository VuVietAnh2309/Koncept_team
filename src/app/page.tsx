import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhatWeDo from "@/components/sections/WhatWeDo";
import SelectedWork from "@/components/sections/SelectedWork";
import Team from "@/components/sections/Team";
import HowWeWork from "@/components/sections/HowWeWork";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 relative z-10">
        <Hero />
        <About />
        <SelectedWork />
        <WhatWeDo />
        <Team />
        <HowWeWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
