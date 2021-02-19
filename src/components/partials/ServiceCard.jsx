import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from "styled-components";

/**
 * Return object
 */
const ServiceCard = ({icon, iconcolor, heading, message}) => {
  return (
    <Card>
      <section>
        <header>
          <div className="icon" iconcolor={iconcolor}>
            <FontAwesomeIcon icon={icon} size="2x" />
          </div>
          <h4>
            {heading}
          </h4>
        </header>
        <p>
          {message}
        </p>
      </section>
    </Card>
  );
}

const Card = styled.div`
  flex-basis: 15rem;
  margin-left: auto;
  margin-right: auto;
  h4 {
    margin-left: 1rem;
  }
  header {
    align-items: center;
    display: flex;
  }
  .icon {
    svg {
      color: ${props => props.iconcolor ? props.iconcolor : "inherit"};
    }
  }
`;

export default ServiceCard;
