import { useState } from "react";
import styled from "styled-components";
import { Section } from "../styles";
import WorkCard from "../components/partials/WorkCard";
/**
 * Animations
 */
import { motion, useReducedMotion } from "framer-motion";
import { pageAnimation, accessiblePageAnimation, fade, photoAnimation, rainbowSlider, rainbowContainer, lineAnimation } from "../animation";

/**
 * Data for OurWork page
 */
import getWorks from '../works';

const OurWork = () => {
  /** State */
  const [works, setWorks] = useState(getWorks());

  /** Animation */
  const shouldReduceMotion = useReducedMotion();

  return (
    <Work
      variants={shouldReduceMotion ? accessiblePageAnimation : pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#FFF" }}
    >
      <motion.div variants={rainbowContainer}>
        <Frame1 variants={rainbowSlider}></Frame1>
        <Frame2 variants={rainbowSlider}></Frame2>
        <Frame3 variants={rainbowSlider}></Frame3>
        <Frame4 variants={rainbowSlider}></Frame4>
      </motion.div>
      <motion.h2 variants={fade}>
        Our Work
      </motion.h2>
      <motion.blockquote variants={fade}>
      from incense and music, to towels and yoga mats, or hot stones and candles
      </motion.blockquote>
      <motion.div className="line" variants={lineAnimation}></motion.div>
      {works.map(({title, id, url, image, imageAlt, imageCreditLink, imageCredit}) => (
          <WorkCard
            key={id}
            title={title}
            url={url}
            image={image}
            imageAlt={imageAlt}
            imageCreditLink={imageCreditLink}
            imageCredit={imageCredit}
            photoAnimation={photoAnimation}
            fade={fade}
          />
      ))}
    </Work>
  );
}

const Work = styled(Section)`
  color: #111;
  min-height: 100vh;
  overflow: hidden;
  a {
    color: #52489C;
    &:hover {
      color: #111;
    }
  }
  blockquote {
    font-size: 1.5rem;
    font-style:italic;
    position: relative;
    &::before {
      content: "\“ ";
      font-size: 2.5rem;
    }
  }
  img {
    height: 70vh;
    object-fit: cover;
    width: 100%;
  }
  @media only screen and (max-width: 320px) {
    blockquote {
      font-size: 1.1rem;
    }
  }
`;

/** Frame Animation */
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 15%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
  @media (prefers-reduced-motion) {
    display: none;
  }
`;

const Frame2 = styled(Frame1)`
  background-color: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background-color: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background-color: #8effa0;
`;

export default OurWork;
