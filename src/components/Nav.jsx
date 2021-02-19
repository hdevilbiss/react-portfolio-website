import styled from "styled-components";

const Nav = () => {
  const links = [
    {
      name: "About Us",
      route: "#"
    },
    {
      name: "Our Work",
      route: "#"
    },
    {
      name: "Contact Us",
      route: "#"
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
              <a href={route}>
                {name}
              </a>
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
`;

export default Nav;
