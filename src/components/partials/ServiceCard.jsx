import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ServiceCard = ({icon, heading, message}) => {
  return (
    <div className="card">
      <div className="icon">
        <FontAwesomeIcon icon={icon} />
        <h3>
          {heading}
        </h3>
        <p>
          {message}
        </p>
      </div>
    </div>
  );
}
export default ServiceCard;
