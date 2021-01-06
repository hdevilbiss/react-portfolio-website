import home1 from '../images/home-faceoff-klim-musalimov-unsplash.jpg';
const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>
              Our high-performance training center
            </h2>
          </div>
          <div className="hide">
            <h2>
              enables athletes to
            </h2>
          </div>
          <div className="hide">
          <h2>
              achieve their <span>dreams</span>
            </h2>
          </div>
        </div>
        <p>
          From agility to strength, from strategy to stick-handling, our world-class trainers can help you address your strengths and weaknessess to become the best version of yourself both on and off the ice.
        </p>
        <button>
          Contact Us
        </button>
      </div>
      <div className="image">
        <img src={home1} alt="An ice hockey faceoff just before the puck drop in the left defensive zone" />
        <span>Photo by <a href="https://unsplash.com/@klim11?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Klim Musalimov</a> on <a href="https://unsplash.com/s/photos/rink?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
      </div>
    </div>
  )
}

export default AboutSection;
