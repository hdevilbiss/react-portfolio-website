import home1 from '../images/incense.jpg';
import styled from 'styled-components';

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className="title">
          <Hide>
            <h2>
              We bring
            </h2>
          </Hide>
          <Hide>
            <h2>
              the <span className="calm">calm</span>
            </h2>
          </Hide>
          <Hide>
            <h2>
              to you
            </h2>
          </Hide>
        </div>
        <p>
          Book a meditation event online today.
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
const StyledAbout = styled.div`
  align-items: center;
  display: flex;
  overflow: hidden;
  gap: 1rem;
  justify-content: space-between;
  min-height: 90vh;
  padding: 0rem 2rem;
  .title {
    letter-spacing: 0.25rem;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: fit-content;
  }
  @media only screen and (max-width: 640px) {
    align-items: flex-start;
    background-image: url("../images/incense.jpg");
    padding-top: 2rem;
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

const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    height: 80vh;
    object-fit: cover;
    width: 100%;
  }
  /**
   * Mobile
   */
  @media only screen and (max-width: 640px) {
    display: none;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
