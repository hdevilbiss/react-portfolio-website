const WorkCard = ({title, image, imageAlt, imageCredit, imageCreditLink}) => {
  return (
    <div>
      <h3>
        {title}
      </h3>
      <img src={image} alt={imageAlt}/>
      <span className="photo-credit">
        Photo by <a href={imageCreditLink}>{imageCredit}</a> on Unsplash
      </span>
    </div>
  );
}

export default WorkCard;
