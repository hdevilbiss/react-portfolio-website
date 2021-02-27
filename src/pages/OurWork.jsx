import {useState} from "react";
import styled from "styled-components";
import {Section} from "../styles";
import WorkCard from "../components/partials/WorkCard";
/**
 * Animations
 */
import { pageAnimation } from "../animation";

/**
 * Data for OurWork page
 */
import getWorks from '../works';

const OurWork = () => {
  /**
   * State
   */
  const [works, setWorks] = useState(getWorks());

  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <h2>
        Our Work
      </h2>
      <blockquote>
      from incense and music, to towels and yoga mats, or hot stones and candles
      </blockquote>
      <div className="line"></div>
      {works.map(work => (
        <>
          <WorkCard
            title={work.title}
            image={work.image}
            imageAlt={work.imageAlt}
            imageCreditLink={work.imageCreditLink}
            imageCredit={work.imageCredit}
          />
          <div className="line"></div>
        </>
      ))}
    </Work>
  );
}

const Work = styled(Section)`
  min-height: 100vh;
  overflow: hidden;
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

export default OurWork;
