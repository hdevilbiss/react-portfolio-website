import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { lineAnimation } from "../../animation";

const WorkCard = ({title, image, url, imageAlt, imageCredit, imageCreditLink, photoAnimation, fade}) => {
  return (
    <div>
      <section>
        <header>
          <motion.h3 variants={fade}>
            {title}
          </motion.h3>
        </header>
        <Link to={url}>
          <HideImage>
            <motion.img variants={photoAnimation} src={image} alt={imageAlt} />
          </HideImage>
        </Link>
        <span className="photo-credit">
          Photo by <a href={imageCreditLink}>{imageCredit}</a> on Unsplash
        </span>
      </section>
      <motion.div variants={lineAnimation} className="line"></motion.div>
    </div>
  );
}


const HideImage = styled.div`
  overflow: hidden;
`;

export default WorkCard;
