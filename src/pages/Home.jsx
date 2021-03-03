/**
 * Components
 */
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';
/**
 * Animations
 */
import { motion, useReducedMotion } from "framer-motion";
import { pageAnimation, accessiblePageAnimation } from "../animation";
import AnimatedPage from "../components/animations/AnimatedPage";

const Home = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    // <motion.div variants={shouldReduceMotion ? accessiblePageAnimation : pageAnimation} initial="hidden" animate="show" exit="exit">
        <>
          <AnimatedPage />
          <AboutSection />
          <ServicesSection />
          <FaqSection />
        </>
    // </motion.div>
  )
}

export default Home;
