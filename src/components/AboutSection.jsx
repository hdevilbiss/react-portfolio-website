import home1 from '../images/incense.jpg';
import styled from 'styled-components';

const AboutSection = () => {
  return (
    <StyledAbout>
      <div className="description">
        <div className="title">
          <Hide>
            <h2>
              We bring
            </h2>
          </Hide>
          <Hide>
            <h2>
              the <span>calm</span>
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
      </div>
      <StyledImage>
        <figure>
          <img src={home1} alt="A person cooling some incense" />
          <figcaption>
            <span>Photo by <a href="https://unsplash.com/@conscious_design?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Conscious Design</a> on <a href="https://unsplash.com/s/photos/meditation?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
          </figcaption>
        </figure>
      </StyledImage>
    </StyledAbout>
  )
}

/**
 * Styled Component
 */
const StyledAbout = styled.div`
  align-items: center;
  background-color: #d8e2dc;
  display: flex;
  gap: 1rem;
  justify-content: space-around;
  min-height: 400px;
  padding: 0rem 0rem 0rem 2rem;
  .title {
    letter-spacing: 0.25rem;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    //width: fit-content;
  }
  button {
    width: 100%;
  }
  span {
    color: #1D3461;
    font-weight: bold;
  }
`;

const StyledImage = styled.div`
  overflow: hidden;
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
