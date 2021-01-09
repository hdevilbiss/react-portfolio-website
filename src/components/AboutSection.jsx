import home1 from '../images/incense.jpg';
const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>
              Our certified meditation coaches
            </h2>
          </div>
          <div className="hide">
            <h2>
              will bring the <span>calm</span>
            </h2>
          </div>
          <div className="hide">
          <h2>
            to your workplace or event
          </h2>
          </div>
        </div>
        <p>
          Book a meditation event online. Choose a coach from our directory, or get paired based on your needs.
        </p>
        <button>
          Book Now
        </button>
      </div>
      <figure>
        <img src={home1} alt="A person cooling some incense" />
        <figcaption>
          <span>Photo by <a href="https://unsplash.com/@conscious_design?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Conscious Design</a> on <a href="https://unsplash.com/s/photos/meditation?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
        </figcaption>
      </figure>
    </div>
  )
}

export default AboutSection;
