import React from "react";
import { motion } from "framer-motion";

const StackScroll = ({ children }) => {
  const sections = React.Children.toArray(children);

  return (
    <div className="relative">
      {sections.map((child, index) => (
        <motion.div
          key={index}
          initial={{ y: 120, scale: 0.95, opacity: 0 }}
          whileInView={{ y: 0, scale: 1, opacity: 1 }}
          transition={{
            duration: 0.25,
            ease: [0.25, 0.8, 0.25, 1],
            delay: 0.1,
          }}
          viewport={{ once: false, amount: 0.15 }}
          className="relative w-full"
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};

export default StackScroll;