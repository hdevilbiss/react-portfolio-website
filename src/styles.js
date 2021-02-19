import styled from 'styled-components';

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
