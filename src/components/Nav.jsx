import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  const links = [
    {
      name: "Home",
      route: "/"
    },
    {
      name: "Our Work",
      route: "/work"
    },
    {
      name: "Contact Us",
      route: "/contact"
    }
  ]

  return (
    <StyledNav>
      <h1>
        ACME Mobile Meditation Co
      </h1>
      <ul>
        {links.map(({name, route}, idx) => {
          return (
            <li key={idx}>
              <Link to={route}>
                {name}
              </Link>
            </li>
          )
        })}
      </ul>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
  min-height: 10vh;
  padding-top: 1rem;
  a {
    color: #FFF;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
    margin: auto auto;
    li {
      border-radius: 5px;
      margin: auto 1.5rem;
      /* padding: 1rem 1rem; */
      position: relative;
      transition: all 0.5s ease;
      a {
        display: inline-block;
        padding: 1rem 1rem;
      }
      &:hover {
        background-color: #52489C;
      }
    }
  }
  @media only screen and (max-width: 499px) {
    ul {
      display: block;
      margin: 0rem 1rem;
      text-align: center;
      width: 100%;
      li {
        a {
          width: 100%;
        }
      }
    }
  }
`;

export default Nav;
