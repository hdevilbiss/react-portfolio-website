/**
 * Styles
 */
import styled from "styled-components";
import { Section } from "../styles";
import personImg from "../images/person-with-eyes-closed.jpg";
/**
 * Animations
 */
import { pageAnimation } from "../animation";

const ContactUs = () => {
  return (
    <Contact variants={pageAnimation}initial="hidden" animate="show" exit="exit">
      <h2>
        Contact Us
      </h2>
      <h3>
        Person With Eyes Closed
      </h3>
      <span>Photo by <a href="https://unsplash.com/@motoki?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Motoki Tonn</a> on <a href="https://unsplash.com/s/photos/meditation?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
      <img src={personImg} alt="A person standing with their eyes closed in front of some shrubs"/>
    </Contact>
  );
}

const Contact = styled(Section)``;

export default ContactUs;
