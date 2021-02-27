import home1 from '../images/incense.jpg';
import styled from 'styled-components';
import { Section, StyledImage, Hide} from '../styles';
import { motion } from 'framer-motion'

const AboutSection = () => {
  /**
   * Framer Motion variant for .title div and h2
   */
  const titleAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
  };
  const containerAnim = {
    hidden: { x: -200 },
    show: { x: 0, transition: { duration: 1, ease: 'backInOut', staggerChildren: 1 } },
  }

  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div className="title" variants={containerAnim} initial="hidden" animate="show">
          <Hide>
          <motion.h2 variants={titleAnim}>
            We bring
          </motion.h2>
          </Hide>
          <Hide>
          <motion.h2 variants={titleAnim}>
              the <span className="calm">calm</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              to you
            </motion.h2>
          </Hide>
        </motion.div>
        <p>
          Book a wellness event online today.
        </p>
        <button>
          Book Now
        </button>
      </StyledDescription>
      <StyledImage>
        <figure>
          <img src={home1} alt="A person cooling some incense" />
          <figcaption>
            <span className="photo-credit">Photo by <a href="https://unsplash.com/@conscious_design?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Conscious Design</a> on <a href="https://unsplash.com/s/photos/meditation?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
          </figcaption>
        </figure>
      </StyledImage>
    </StyledAbout>
  )
}

/**
 * Styled Components
 */
const StyledAbout = styled(Section)`
  align-items: center;
  display: flex;
  overflow: hidden;
  gap: 1rem;
  justify-content: space-between;
  padding: 2rem 2rem;
  h2 {
    font-size: 3rem;
  }
  .title {
    letter-spacing: 0.25rem;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: fit-content;
  }
  @media only screen and (max-width: 640px) {
    background-image: url("../images/incense.jpg");
    padding-top: 2rem;
  }
  @media only screen and (max-width: 320) {
    align-items: flex-start;
  }
`;

const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
  p {
    text-align: center;
  }
  button {
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  /**
  * Mobile
  */
  @media only screen and (max-width: 640px) {
    margin-left: auto;
    margin-right: auto;
    padding-right: 0;
  }
`;



export default AboutSection;
