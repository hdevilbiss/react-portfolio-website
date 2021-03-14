import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import getWorks from "../works";
/**
 * Styles
 */
import styled from "styled-components";
import { Section } from "../styles";
/**
 * Animations
 */
import { useReducedMotion } from "framer-motion";
import { pageAnimation, accessiblePageAnimation } from "../animation";

const SingleWork = () => {
  /** Routing */
  const history = useHistory();
  const currentURL = history.location.pathname;

  /** State */
  const works = getWorks();
  const [work, setWork] = useState({});

  /** Animation */
  const shouldReduceMotion = useReducedMotion();

  /**
   * UseEffect which runs when component mounts;
   * run every time that `works` or `currentURL` updates
   */
  useEffect(() => {
    const currentWork = works.find((work) => work.url === currentURL) ?? {};
    setWork(currentWork);
    console.log(`work: ${work}`);
  }, [works, work, currentURL]);

  return (
    <StyledSingle variants={shouldReduceMotion ? accessiblePageAnimation : pageAnimation} initial="hidden" animate="show" exit="exit">
      <h2>
        {work.title}
      </h2>
      <img src={work.image} alt={work.imageAlt} />
    </StyledSingle>
  );
}

const StyledSingle = styled(Section)``;

export default SingleWork;
