import styled from 'styled-components';
import { motion } from "framer-motion";

export const Section = styled(motion.div)`
  min-height: 80vh;
  padding: 1rem 2rem;
  @media only screen and (max-width: 320px) {
    min-height: 50vh;
  }
`;

export const StyledImage = styled.div`
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

export const Hide = styled.div`
  overflow: hidden;
`;
