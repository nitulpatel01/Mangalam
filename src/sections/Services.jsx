import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Settings,
  Cog,
  Wrench,
  DraftingCompass,
  LifeBuoy,
  Package,
} from "lucide-react";

// Reusable Card
const Card = ({ icon: Icon, title, desc }) => (
  <motion.div className="bg-industrial-900 p-6 rounded-xl border border-slate-800">
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 bg-cyan-500/10 rounded-xl">
        <Icon className="text-cyan-400" size={28} />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      title: "Cad/Cam Services",
      desc: "Cad/Cam Services",
      icon: Cpu,
    },
    {
      title: "Engineering Services",
      desc: "Engineering Services",
      icon: Settings,
    },
    {
      title: "Mould Manufacturing",
      desc: "All type of precession semi & Fully automatic Mould manufacturing",
      icon: Cog,
    },
    {
      title: "Precision Parts",
      desc: "Precision Part & Developed parts mfg",
      icon: Wrench,
    },
    {
      title: "Mechanical Design & Prototype",
      desc: "Mechanical Design & Prototype Development",
      icon: DraftingCompass,
    },
    {
      title: "Technical Support",
      desc: "Technical Support to Out Vender & Customer",
      icon: LifeBuoy,
    },
    {
      title: "Industrial Materials",
      desc:
        "All sizes of MS Bright Bars, EN Series, Carbon Steel, WPS and Nutbolt, V-Belt Pulley",
      icon: Package,
    },
  ];

  return (
    <section
      className="scroll-mt-[130px] bg-industrial-950 py-20 px-6 md:px-16"
      id="services"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          Our <span className="text-cyan-400">Services</span>
        </h2>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Card
            key={index}
            icon={service.icon}
            title={service.title}
            desc={service.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
