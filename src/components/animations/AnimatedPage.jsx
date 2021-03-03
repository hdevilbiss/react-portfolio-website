import { motion, useReducedMotion } from "framer-motion";

const AnimatedPage = () => {
  const shouldUseReducedMotion = useReducedMotion();

  const variants = {
    hidden: {
      opacity: 0,
      y: shouldUseReducedMotion ? 0 : 300,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        when: 'beforeChildren',
        staggerChildren: 0.25,
      },
    },
    exit: {
      opacity: 0,
      y: shouldUseReducedMotion ? 0 : 300,
      transition: {
        duration: 0.75,
      },
    }
  };

  return (
    <motion.div variants={variants}  initial="hidden" animate="show" exit="exit" />
  )
}

export default AnimatedPage;
