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
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#FFF" }}
      >
      <h2>
        Our Work
      </h2>
      <blockquote>
      from incense and music, to towels and yoga mats, or hot stones and candles
      </blockquote>
      <div className="line"></div>
      {works.map(({title, id, image, imageAlt, imageCreditLink, imageCredit}) => (
          <WorkCard
            key={id}
            title={title}
            image={image}
            imageAlt={imageAlt}
            imageCreditLink={imageCreditLink}
            imageCredit={imageCredit}
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

export default OurWork;
