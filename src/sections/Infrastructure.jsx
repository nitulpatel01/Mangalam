import React, { useState } from "react";
import Section from "../components/Section";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Printer, Cog } from "lucide-react";
import { machines } from "../data/machines.js";

const Infrastructure = () => {
  const [activeTab, setActiveTab] = useState("conventional");

  const tabs = [
    { id: "conventional", label: "Conventional", icon: Cog },
    { id: "3d", label: "3D Printing", icon: Printer },
    { id: "cnc", label: "CNC / VMC", icon: Cpu },
  ];

  const activeIcon = tabs.find((t) => t.id === activeTab).icon;

  return (
    <Section id="infrastructure" className="scroll-mt-[165px] bg-industrial-950">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.span
            className="text-cyan-500 font-semibold tracking-widest uppercase mb-2 block"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Powerhouse
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
            Advanced Infrastructure
          </h2>
        </div>

        {/* FACILITY */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-industrial-900 p-6 rounded-xl border border-slate-800">
            <h3 className="text-cyan-400 font-semibold mb-2">Facility</h3>
            <p className="text-slate-300 text-sm">
              2700 Sq. Feet on busy outskirts of Bhavnagar, Gujarat
            </p>
          </div>

          <div className="bg-industrial-900 p-6 rounded-xl border border-slate-800">
            <h3 className="text-cyan-400 font-semibold mb-2">Manpower</h3>
            <p className="text-slate-300 text-sm">
              Team of highly qualified & skilled technicians
            </p>
          </div>
        </div>

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full border ${activeTab === tab.id
                ? "bg-cyan-600 text-white"
                : "border-slate-700 text-slate-400"
                }`}
            >
              <tab.icon size={16} className="inline mr-2" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* MACHINE CARDS */}
        <motion.div
          key={activeTab}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {machines[activeTab].map((machine, idx) => {
            const Icon = activeIcon;
            const hideContent = activeIcon === Printer;

            return (
              <div
                key={idx}
                className={`bg-industrial-900 rounded-xl overflow-hidden border border-slate-800 transition hover:shadow-cyan-500/20 hover:-translate-y-2 ${hideContent ? "" : ""
                  }`}
              >
                {/* IMAGE */}
                <div
                  className={`overflow-hidden ${hideContent ? "h-72" : "h-48"
                    }`}
                >
                  <img
                    src={machine.img}
                    alt={machine.name}
                    className="w-full h-full object-cover transition duration-500 hover:scale-110"
                  />
                </div>

                {/* CONTENT */}
                {!hideContent && (
                  <div className="p-5">
                    <Icon className="text-cyan-400 mb-3" size={22} />

                    {machine.name && (
                      <h3 className="text-white font-bold">
                        {machine.name}
                      </h3>
                    )}

                    {machine.detail && (
                      <p className="text-cyan-400 text-sm">
                        {machine.detail}
                      </p>
                    )}

                    {machine.desc && (
                      <p className="text-slate-400 text-sm mt-2">
                        {machine.desc}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
};

export default Infrastructure;
