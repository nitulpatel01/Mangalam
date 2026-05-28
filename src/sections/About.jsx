import React from "react";
import Section from "../components/Section";
import { CheckCircle2 } from "lucide-react";
import aboutImg from "../assets/project-images/Person_1.jpeg";
import { motion } from "framer-motion";

import {
  mission,
  vision,
  workingSystem,
  features,
  stats,
} from "../data/aboutData";

const About = () => {
  return (
    <Section id="about" className="scroll-mt-[100px] bg-industrial-950 py-24">
      <div className="max-w-7xl mx-auto px-4 space-y-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.span
              className="text-cyan-500 font-semibold tracking-widest uppercase mb-2 block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              About Us
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Engineering <span className="text-cyan-400">Excellence</span>{" "}
              <br />
              <span className="text-slate-400 text-3xl">
                Built Over 40+ Years
              </span>
              <div className="grid grid-cols-2 mt-3 md:grid-cols-2 gap-6">
                {stats.map((item, index) => (
                  <div
                    key={index}
                    className="border border-slate-800 rounded-lg p-6 text-center bg-industrial-900"
                  >
                    <h3 className="text-white text-2xl font-bold">
                      {item.value}
                    </h3>
                    <p className="text-slate-400 text-xs uppercase mt-1">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </h2>
          </div>

          <div>
            <img
              src={aboutImg}
              alt="About"
              className="rounded-xl w-full h-[350px] object-cover border border-slate-800"
            />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-8">
            Our Specialization
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 leading-relaxed border border-slate-800 p-4 rounded-lg bg-industrial-900"
              >
                <CheckCircle2 className="text-cyan-500 w-5 h-5 mt-[3px] shrink-0" />
                <p className="text-sm text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-8">
            Our Working Process
          </h3>

          <div className=" gap-8">
            {workingSystem.map((section, index) => (
              <div
                key={index}
                className="border border-slate-800 rounded-lg p-6 bg-industrial-900"
              >
                <h4 className="text-white font-semibold mb-4">
                  {section.title}
                </h4>

                <div className="space-y-3">
                  {section.details.map((item, i) => (
                    <div className="flex gap-3 items-start" key={i}>
                      <CheckCircle2 className="text-cyan-500 w-5 h-5 mt-[3px] shrink-0" />
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="border border-slate-800 rounded-lg p-6 bg-industrial-900">
            <h3 className="text-xl font-semibold text-white mb-4">Mission</h3>

            <div className="space-y-3">
              {mission.map((item, index) => (
                <div className="flex gap-3 items-start" key={index}>
                  <CheckCircle2 className="text-cyan-500 w-5 h-5 mt-[3px] shrink-0" />
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-slate-800 rounded-lg p-6 bg-industrial-900">
            <h3 className="text-xl font-semibold text-white mb-4">Vision</h3>

            <div className="space-y-3">
              {vision.map((item, index) => (
                <div className="flex gap-3 items-start" key={index}>
                  <CheckCircle2 className="text-cyan-500 w-5 h-5 mt-[3px] shrink-0" />
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
