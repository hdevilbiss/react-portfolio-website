import styled from 'styled-components';

export const Section = styled.div`
  min-height: 50vh;
  padding: 1rem 2rem;
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
