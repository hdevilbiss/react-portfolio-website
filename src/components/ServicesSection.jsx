import { faCar, faCertificate, faSpa, faSmileBeam } from '@fortawesome/free-solid-svg-icons';
import home2 from '../images/gong.jpg'
import ServiceCard from './ServiceCard';
const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h3>
          Equipment and Guidance
        </h3>
        <p>
          You need only bring yourself.
        </p>
        <div className="cards">
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
            heading="Friendly, Five-Star Service"
            message="Our testimonials frequently mention the warm, friendly attitudes of our coaches."
          />
        </div>
      </div>
      <figure>
        <img src={home2} alt="A person cooling some incense" />
        <figcaption>
        <span>Photo by <a href="https://unsplash.com/@madhatterzone?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Manja Vitolic</a> on <a href="https://unsplash.com/s/photos/gong?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
        </figcaption>
      </figure>
    </div>
  );
}

export default ServicesSection;
