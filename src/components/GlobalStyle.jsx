import {createGlobalStyle} from 'styled-components';
const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background:#faf9f9;
  color: #333745;
  font-family: sans-serif;
}
button {
  border: none;
  border-radius: 10px 0px 10px 0px;
  background-color:#00afb9;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: bold;
  padding: 1rem 1rem;
  transition: all 0.5s ease;
  &:hover {
    background-color:#00b4d8;
    border-radius: 10px;
  }
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
p {
  font-size: 1.2rem;
  line-height: 150%;
  padding: 1rem 0rem;
}
`;

export default GlobalStyle;
