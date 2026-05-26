// src/pages/Clients.jsx
import React from "react";
import Section from "../components/Section";
import { motion } from "framer-motion";
import { clients } from "../data/clientsData";

// Slider animation settings
const sliderVariants = {
  animate: {
    x: ["0%", "-100%"], // move from 0% to -100% for infinite scroll
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

const Clients = () => {
  const sliderClients = [...clients, ...clients];

  return (
    <Section
      id="clients"
      className="scroll-mt-24 bg-industrial-950 py-28 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-pink-500/10 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Our <span className="text-cyan-400">Clients</span>
          </h2>
        </motion.div>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-8"
            variants={sliderVariants}
            animate="animate"
          >
            {sliderClients.map((client, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl py-6 px-4 flex flex-col items-center justify-center text-slate-300 font-medium min-w-[180px]"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-24 h-24 object-contain mb-4"
                />
                <span className="text-lg font-semibold">{client.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Clients;
