import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const CurveLine = () => {
  // Define variants for each path
  const variants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: { opacity: 1, pathLength: 1 },
  };
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && !isVisible) {
      setIsVisible(true);
    } else if (!inView && isVisible) {
      setIsVisible(false);
    }
  }, [inView]);
  return (
    <svg ref={ref} width="200" height="100">
      {/* First line segment */}
      <motion.line
        x1="30" y1="80" x2="70" y2="40"
        stroke="#ffd027" strokeWidth="3"
        initial="hidden" // Set initial state
        animate={isVisible ? "visible" : "hidden"}
        variants={variants} // Use variants
      />
      {/* First dot */}
      <motion.circle
        cx="30" cy="80" r="3"
        fill="#ffd027"
        initial={{ opacity: 0 }} // Initial opacity
        animate={isVisible ? { opacity: 1 } : "hidden"}
        transition={{ delay: 0.5 }} // Add delay
      />
      {/* Second dot */}
      <motion.circle
        cx="70" cy="40" r="3"
        fill="#ffd027"
        initial={{ opacity: 0 }} // Initial opacity
        animate={isVisible ? { opacity: 1 } : "hidden"}
        transition={{ delay: 0.5 }} // Add delay
      />

      {/* Second line segment */}
      <motion.line
        x1="70" y1="40" x2="110" y2="80"
        stroke="#ffd027" strokeWidth="3"
        initial="hidden" // Set initial state
        animate={isVisible ? "visible" : "hidden"}
        variants={variants} // Use variants
        transition={{ delay: 0.5 }} // Add delay
      />
      {/* Third dot */}
      <motion.circle
        cx="110" cy="80" r="3"
        fill="#ffd027"
        initial={{ opacity: 0 }} // Initial opacity
        animate={isVisible ? { opacity: 1 } : "hidden"}
        transition={{ delay: 1 }} // Add delay
      />
      {/* Fourth dot */}
      <motion.circle
        cx="70" cy="40" r="3"
        fill="#ffd027"
        initial={{ opacity: 0 }} // Initial opacity
        animate={isVisible ? { opacity: 1 } : "hidden"}
        transition={{ delay: 1 }} // Add delay
      />

      {/* Third line segment */}
      <motion.line
        x1="110" y1="80" x2="150" y2="40"
        stroke="#ffd027" strokeWidth="3"
        initial="hidden" // Set initial state
        animate={isVisible ? "visible" : "hidden"}
        variants={variants} // Use variants
        transition={{ delay: 1 }} // Add delay
      />
      {/* Fifth dot */}
      <motion.circle
        cx="150" cy="40" r="3"
        fill="#ffd027"
        initial={{ opacity: 0 }} // Initial opacity
        animate={isVisible ? { opacity: 1 } : "hidden"}
        transition={{ delay: 1.5 }} // Add delay
      />
    </svg>
  );
};
