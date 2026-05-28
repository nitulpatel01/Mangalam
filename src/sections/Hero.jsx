import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";

const Stars = (props) => {

  const ref = useRef();

  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 2 })
  );

  useFrame((state, delta) => {

    ref.current.rotation.x -= delta / 20;
    ref.current.rotation.y -= delta / 25;

  });

  return (

    <group rotation={[0, 0, Math.PI / 4]}>

      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >

        <PointMaterial
          transparent
          color="#06b6d4"
          size={0.015}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />

      </Points>

    </group>

  );

};

/* ANIMATION VARIANTS */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: -50, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
};

const Hero = () => {

  const headline = ["Engineering", "Perfection", "for", "Modern", "Industry"];

  return (

    <section
      id="hero"
      className="scroll-mt-32 relative isolate flex items-center justify-center overflow-hidden bg-industrial-950 hero-modern py-24 md:py-32"
    >

      <div className="hero-glow"></div>

      {/* 3D Background */}

      <div className="absolute inset-0 z-0 overflow-hidden bg-industrial-950">

        <Canvas
          camera={{ position: [0, 0, 1] }}
          style={{ width: "100%", height: "100%", display: "block", background: "#020617" }}
        >

          <Stars />

        </Canvas>

        <div className="absolute inset-0 hero-gradient"></div>

      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto hero-content">

        {/* Badge */}

        <motion.span
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block py-1 px-4 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold tracking-widest mb-8 backdrop-blur-sm hero-badge"
        >
          ISO CERTIFIED | 40+ YEARS EXPERIENCE | CNC PRECISION
        </motion.span>

        {/* Heading */}

        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6 hero-title"
        >

          {headline.map((word, index) => (

            <motion.span
              key={index}
              variants={wordVariants}
              className={`inline-block mr-4 ${word === "Perfection"
                ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600"
                : ""
                }`}
            >

              {word}

            </motion.span>

          ))}

        </motion.h1>

        {/* Paragraph */}

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light hero-text"
        >
          Specializing in CNC machining, mould manufacturing, and precision
          components with 40+ years of engineering excellence.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center hero-buttons"
        >

          <a
            href="#contact"
            className="relative px-8 py-4 bg-cyan-600 text-white font-bold rounded-lg overflow-hidden group hero-btn-primary"
          >
            <span className="relative z-10">Get a Quote</span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition duration-300"></span>
          </a>

          <a
            href="#services"
            className="px-8 py-4 border border-slate-600 hover:border-cyan-500 text-slate-300 hover:text-white font-semibold rounded-lg transition-all backdrop-blur-sm bg-black/20 hover:bg-cyan-500/10 hero-btn-secondary"
          >
            Explore Services
          </a>

        </motion.div>

      </div>

      {/* Scroll icon */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 hero-scroll"
      >
        <ChevronDown size={32} />
      </motion.div>

    </section>

  );

};

export default Hero;
