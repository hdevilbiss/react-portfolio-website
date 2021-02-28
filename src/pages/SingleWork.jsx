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
import { pageAnimation } from "../animation";

const SingleWork = () => {
  const history = useHistory();
  const currentURL = history.location.pathname;
  const [works, setWorks] = useState(getWorks());
  const [work, setWork] = useState({});

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
    <StyledSingle variants={pageAnimation}initial="hidden" animate="show" exit="exit">
      <h2>
        {work.title}
      </h2>
      <img src={work.image} alt={work.imageAlt} />
    </StyledSingle>
  );
}

const StyledSingle = styled(Section)``;

export default SingleWork;
