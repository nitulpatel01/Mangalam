import React, { useState, useEffect, useRef } from "react";
import Section from "../components/Section";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Mehta",
    company: "Alpha Foundry Pvt Ltd",
    review:
      "Precision Patterns consistently delivered high-accuracy components within committed timelines. Their CNC capabilities and quality control standards are exceptional.",
  },
  {
    name: "Suresh Patel",
    company: "TechCast Industries",
    review:
      "From CAD design to final production, the execution was seamless. A highly reliable and technically sound manufacturing partner.",
  },
  {
    name: "Ankit Sharma",
    company: "Industrial Dynamics Ltd",
    review:
      "Their precision engineering expertise and commitment to delivery deadlines make them our preferred manufacturing partner.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const cardRef = useRef(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateXValue = -((y - height / 2) / height) * 8;
    const rotateYValue = ((x - width / 2) / width) * 8;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <Section
      id="testimonials"
      className="scroll-mt-24 bg-industrial-900 py-28 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-cyan-500/5 blur-[150px]" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-cyan-500 font-semibold tracking-widest uppercase mb-4 block"
        >
          Client Testimonials
        </motion.span>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          Trusted by Industry Leaders
        </h2>

        <div className="perspective-[1200px] relative min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              ref={cardRef}
              style={{ rotateX, rotateY }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -60, scale: 0.9 }}
              transition={{ duration: 0.6 }}
              className="relative bg-industrial-800/60 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-12 shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
            >
              {/* Animated Border Glow */}
              <div className="absolute inset-0 rounded-3xl border border-cyan-500/30 animate-pulse opacity-30" />

              <Quote
                className="mx-auto text-cyan-400 mb-6 drop-shadow-[0_0_10px_rgba(6,182,212,0.7)]"
                size={48}
              />

              {/* Stars */}
              <div className="flex justify-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-cyan-400 fill-cyan-400"
                  />
                ))}
              </div>

              <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
                {testimonials[index].review}
              </p>

              <div>
                <h4 className="text-white font-semibold text-xl">
                  {testimonials[index].name}
                </h4>
                <p className="text-cyan-400 text-sm tracking-wide">
                  {testimonials[index].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-10 space-x-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${i === index
                ? "bg-cyan-500 scale-125 shadow-[0_0_10px_rgba(6,182,212,0.7)]"
                : "bg-slate-600 hover:bg-cyan-400"
                }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
