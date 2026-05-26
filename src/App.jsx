import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Infrastructure from "./sections/Infrastructure";
import Services from "./sections/Services";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
//import Testimonials from "./sections/Testimonials";
import Clients from "./sections/Clients";

// ✅ NEW IMPORT
import StackScroll from "./components/StackScroll";
import AnimatedSection from "./components/AnimatedSection";
import Journey from "./sections/Journey";

import WhatsAppFloat from "./components/WhatsAppFloat";

function App() {
  return (
    <div className="min-h-screen bg-industrial-950 text-industrial-50 overflow-x-hidden">

      <WhatsAppFloat />
      <>
        <Navbar />

        <StackScroll>
          <Hero />
          <About />
          <Infrastructure />
          <Services />
        </StackScroll>

        <Gallery />

        <AnimatedSection>
          <Journey />
        </AnimatedSection>

        {/* <AnimatedSection>
          <Testimonials />
        </AnimatedSection> */}

        {/* <AnimatedSection>
          <Clients />
        </AnimatedSection> */}

        <AnimatedSection>
          <Contact />
        </AnimatedSection>

        <AnimatedSection>
          <Footer />
        </AnimatedSection>
      </>
    </div >
  );
}

export default App;