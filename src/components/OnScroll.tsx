import { Props } from "@/models/props";
import { motion, useAnimation } from "framer-motion";
import { useEffect, memo, useState } from "react";
import { useInView } from "react-intersection-observer";

const AniminateOnScroll: React.FC<Props.AniminateOnScroll> = ({
  children,
  initialPosition,
  className,
  duration,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        transition: { ease: "easeInOut", duration: duration ?? 4.0 },
      });
    } else {
      controls.start({ x: initialPosition });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ x: initialPosition ?? 0 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const Wavy = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [inView]);

  return (
    <span>
      {text.split("").map((el, i) => (
        <motion.span
          ref={ref}
          initial={{ opacity: 0, y: "60%" }} // Start from bottom
          animate={isVisible ? { opacity: 1, y: 0 } : "initial"}
          transition={{
            duration: 0.25,
            delay: i / 10,
            type: "spring",
            stiffness: 100,
            damping: 30,
          }}
          key={i}
          className={`${className} inline-block`}
        >
          <span className="tracking-tighter">{el}</span>
        </motion.span>
      ))}
    </span>
  );
};
export const TypeAnimination = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [inView]);

  return (
    <span>
      {text.split("").map((el, i) => (
        <motion.span
          ref={ref}
          initial={{ opacity: 0}} // Start from bottom
          animate={isVisible ? { opacity: 1, y: 0 } : "initial"}
          transition={{
            duration: 2,
            delay: i / 5,
            type: "spring",
            stiffness: 100,
            damping: 30,
          }}
          key={i}
          className={`${className} inline-block`}
        >
          <span className="tracking-tighter">{el}</span>
        </motion.span>
      ))}
    </span>
  );
};
export const Zoom = ({
  className,
  children,
}: {
  children: any;
  className?: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      className={`${className}`}
      initial={{ scale: 0 }}
      animate={isVisible ? { scale: 1 } : "initial"}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.div>
  );
};

export const PartialZoom = ({
  className,
  children,
}: {
  children: any;
  className?: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      className={`${className}`}
      initial={{ scale: 0 }}
      animate={isVisible ? { scale: 1 } : "initial"}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export const MemoizedAniminateOnScroll = memo(AniminateOnScroll);
