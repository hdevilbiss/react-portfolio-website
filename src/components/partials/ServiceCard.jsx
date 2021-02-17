import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from "styled-components";

/**
 * Return object
 */
const ServiceCard = ({icon, heading, message}) => {
  return (
    <Card>
      <div className="icon">
        <FontAwesomeIcon icon={icon} size="2x" />
        <h4>
          {heading}
        </h4>
      </div>
      <p>
        {message}
      </p>
    </Card>
  );
}

const Card = styled.div`
  border: 1px solid #000;
  flex-basis: 15rem;
  h4 {
    margin-left: 1rem;
    padding: 1rem;
  }
  .icon {
    align-items: center;
    display: flex;
  }
`;

export default ServiceCard;
