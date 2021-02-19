import { faCar, faCertificate, faSpa, faSmileBeam } from '@fortawesome/free-solid-svg-icons';
import ServiceCard from './partials/ServiceCard';
import home2 from '../images/gong.jpg'
import styled from "styled-components";
import { Section, StyledImage } from "../styles";

/**
 * Return object
 */
const ServicesSection = () => {
  return (
    <Services>
      <div className="description">
        <h3>
          You need only bring <span className="calm">yourself</span>
        </h3>
        <p>
          We will bring equipment and guidance.
        </p>
      </div>
      <div className="grid">
        <Cards>
          <ServiceCard
            icon={faCar}
            iconcolor="#F00"
            heading="Mobile"
            message="We will commute to your location."
          />
          <ServiceCard
            icon={faCertificate}
            iconcolor="#FF0"
            heading="Certified"
            message="Well-educated coaches certified in meditation, yoga and wellness."
          />
          <ServiceCard
            icon={faSpa}
            heading="Relaxation"
            message="We bring all the equipment needed, from incense and music, to towels and yoga mats, or hot stones and candles."
          />
          <ServiceCard
            icon={faSmileBeam}
            heading="Five-Star Service"
            message="Our testimonials frequently mention the warm, friendly attitudes of our coaches."
          />
        </Cards>
        <StyledImage>
          <figure>
            <img src={home2} alt="A person behind a gong using a foam roller and yoga mat" />
            <figcaption>
            <span>Photo by <a href="https://unsplash.com/@madhatterzone?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Manja Vitolic</a> on <a href="https://unsplash.com/s/photos/gong?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
            </figcaption>
          </figure>
        </StyledImage>
      </div>
    </Services>
  );
}

const Services = styled(Section)`
  margin-left: auto;
  margin-right: auto;
  .grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media only screen and (max-width: 640px) {
    padding-bottom: 1rem;
    padding-top: 1rem;
    .grid {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }
`;

const Cards = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  gap: 1rem;
  justify-content: space-between;

`;

export default ServicesSection;
