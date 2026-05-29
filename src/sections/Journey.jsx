import React from "react";
import Section from "../components/Section";
import { motion } from "framer-motion";
import { timelineData } from "../data/timeline"
import {
    Factory,
    Settings,
    Building2,
    Hammer,
    Box,
    Cpu,
    Printer,
    Scan,
    Wrench
} from "lucide-react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const Journey = () => {
    return (
        <Section id="journey" className="scroll-mt-24 bg-industrial-950 py-24 relative overflow-hidden">

            <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-cyan-500 font-semibold tracking-widest uppercase mb-2 block">
                        Our Journey
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        40+ Years of <span className="text-cyan-400">Manufacturing Excellence</span>
                    </h2>
                    <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
                        What began as a small workshop in 1984 has grown into a modern precision
                        manufacturing powerhouse, built on decades of trust, innovation, and engineering excellence.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="relative"
                >
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 
            bg-gradient-to-b from-cyan-500 via-blue-500 to-slate-800"></div>

                    <div className="space-y-10">
                        {timelineData.map((item, index) => {
                            const Icon = item.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className={`relative flex items-center gap-6 ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                                        }`}
                                >
                                    <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"} pl-12 md:pl-0`}>
                                        <motion.div
                                            whileHover={{ y: -4, borderColor: "rgba(6,182,212,0.6)" }}
                                            className="bg-industrial-900/80 backdrop-blur-sm border border-slate-800 
                        rounded-xl p-5 transition-all duration-300 cursor-default"
                                        >
                                            <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 
                        text-xs font-bold rounded-full mb-3 tracking-wide">
                                                {item.year}
                                            </span>
                                            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                            <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                                        </motion.div>
                                    </div>

                                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.color} 
                      flex items-center justify-center shadow-lg shadow-cyan-500/25 
                      border-2 border-industrial-950`}>
                                            <Icon className="text-white" size={18} />
                                        </div>
                                    </div>

                                    <div className="flex-1 hidden md:block"></div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Journey;