import { motion } from "framer-motion";

const AnimatedSection = ({ children }) => {
  if (!children) return null; // 🔥 IMPORTANT

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: false, amount: 0.2 }}
      style={{ minHeight: "auto" }} // 🔥 prevent height bug
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;