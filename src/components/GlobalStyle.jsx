import {createGlobalStyle} from 'styled-components';
const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background-color: #111;
  color: #eee;
  font-family: 'Poppins', sans-serif;
}
a {
  color:#00afb9;
  transition: all 0.5s ease;
  &:hover {
    color: #fff;
  }
}
button {
  border: none;
  border-radius: 10px 0px 10px 0px;
  background-color:#00afb9;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: bold;
  margin: 1rem;
  padding: 1rem 1rem;
  transition: all 0.5s ease;
  &:hover {
    background-color:#00b4d8;
    border-radius: 10px;
  }
}
h1 {
  font-family: 'Architects Daughter', cursive;
  font-size: 2rem;
  padding-left: 1rem;
}
h2 {
  font-size: 4rem;
  font-weight: lighter;
}
h3 {
  font-size: 2rem;
}
h4 {
  font-size: 1.4rem;
}
h5, h6 {
  font-size: 1.3rem;
}
h5, h6, p {
  font-size: 1.2rem;
  line-height: 150%;
  padding: 1rem 0rem;
}
img {
  border-radius: 5px;
}
.calm {
  color: #00afb9;
  font-weight: bold;
}
.photo-credit {
    font-style: italic;
}
  /**
   * Mobile
   */
  @media only screen and (max-width: 640px) {
    h1 {
      margin-left: auto;
      margin-right: auto;
    }
    h2 {
      font-size: 2rem;
    }
    h3, h4, h5, h6, p {
      font-size: 1rem;
    }
  }
`;

export default GlobalStyle;
