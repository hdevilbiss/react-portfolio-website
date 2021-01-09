import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faCertificate, faSpa, faSmileBeam } from '@fortawesome/free-solid-svg-icons';
import home2 from '../images/gong.jpg'
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
          <div className="card">
            <div className="icon">
              <FontAwesomeIcon icon={faCar} />
              <h3>
                Mobile
              </h3>
              <p>
                No need to leave your home or office - we will commute to your location.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <FontAwesomeIcon icon={faCertificate} />
              <h3>
                Certified
              </h3>
              <p>
                Well-educated coaches with certifications in meditation, yoga and wellness.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <FontAwesomeIcon icon={faSpa} />
              <h3>
                Relaxation
              </h3>
              <p>
                We bring all the equipment needed, from incense to yoga mats, towels and candles, or hot stones and music.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <FontAwesomeIcon icon={faSmileBeam} />
              <h3>
                Friendly, Five-Star Service
              </h3>
              <p>
                Our testimonials frequently mention the warm, friendly attitudes of our coaches.
              </p>
            </div>
          </div>
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
