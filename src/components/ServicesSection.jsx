import { faCar, faCertificate, faSpa, faSmileBeam } from '@fortawesome/free-solid-svg-icons';
import ServiceCard from './partials/ServiceCard';
import home2 from '../images/gong.jpg'
import styled from "styled-components";

/**
 * Return object
 */
const ServicesSection = () => {
  return (
    <Services>
      <div className="description">
        <h3>
          Equipment and Guidance
        </h3>
        <p>
          You need only bring yourself.
        </p>
        <Cards>
          <ServiceCard
            icon={faCar}
            heading="Mobile"
            message="We will commute to your location."
          />
          <ServiceCard
            icon={faCertificate}
            heading="Certified"
            message="Well-educated coaches certified in meditation, yoga and wellness."
          />
          <ServiceCard
            icon={faSpa}
            heading="Relaxation"
            message="We bring all the equipment needed, from incense to yoga mats, towels and candles, or hot stones and music."
          />
          <ServiceCard
            icon={faSmileBeam}
            heading="Five-Star Service"
            message="Our testimonials frequently mention the warm, friendly attitudes of our coaches."
          />
        </Cards>
      </div>
      <div className="flex-image">
        <figure>
          <img src={home2} alt="A person behind a gong using a foam roller and yoga mat" />
          <figcaption>
          <span>Photo by <a href="https://unsplash.com/@madhatterzone?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Manja Vitolic</a> on <a href="https://unsplash.com/s/photos/gong?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
          </figcaption>
        </figure>
      </div>
    </Services>
  );
}

const Services = styled.div`
  align-items: center;
  display: flex;
  overflow: hidden;
  gap: 1rem;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-top: 2rem;
  .flex-image {
    flex: 1;
    overflow: hidden;
    img {
      height: 80vh;
      object-fit: cover;
      width: 100%;
    }
  }
  @media only screen and (max-width: 640px) {
    padding-top: 1rem;
    .flex-image {
      display: none;
    }
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default ServicesSection;
