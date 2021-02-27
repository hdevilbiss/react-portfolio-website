import incense2 from "../images/incense2.jpg";
import groupYoga from "../images/group-yoga.jpg";
import massageBack from "../images/massage-back.jpg";
import styled from "styled-components";
import {Section} from "../styles";
import WorkCard from "../components/partials/WorkCard";
/**
 * Animations
 */
import { pageAnimation } from "../animation";

const OurWork = () => {
  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <h2>
        Our Work
      </h2>
      <blockquote>
      from incense and music, to towels and yoga mats, or hot stones and candles
      </blockquote>
      <div className="line"></div>
      <WorkCard
        title="Meditation and Worship"
        image={incense2}
        imageAlt="A person sitting cross-legged holding a brass worship bowl"
        imageCredit="Conscious Design"
        imageCreditLink="https://unsplash.com/@conscious_design?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
      />
      <div className="line"></div>
      <WorkCard
        title="Yoga"
        image={groupYoga}
        imageAlt="A room full of people practicing lotus overhead pose while tipped over to the left"
        imageCredit="Anupam Mahapatra"
        imageCreditLink="https://unsplash.com/@mister_a?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
      />
      <div className="line"></div>
      <WorkCard
        title="Hot Stones and Massage"
        image={massageBack}
        imageAlt="Someone's hands massaging someone else's upperback"
        imageCredit="Conscious Design"
        imageCreditLink="https://unsplash.com/@conscious_design?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
      />
      <div className="line"></div>
      <h3>
        Hot Stone
      </h3>
      <span>Photo by <a href="https://unsplash.com/@enginakyurt?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">engin akyurt</a> on <a href="https://unsplash.com/s/photos/%22hot-stone%22-massage?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
    </Work>
  );
}

const Work = styled(Section)`
  min-height: 100vh;
  overflow: hidden;
  blockquote {
    font-style:italic;
    position: relative;
    &::before {
      content: "\“ ";
      font-size: 2rem;
    }
  }
  img {
    height: 70vh;
    object-fit: cover;
    width: 100%;
  }
`;

export default OurWork;
