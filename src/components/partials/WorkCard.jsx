const WorkCard = ({title, image, imageAlt, imageCredit, imageCreditLink}) => {
  return (
    <div>
      <section>
        <header>
          <h3>
            {title}
          </h3>
        </header>
        <img src={image} alt={imageAlt}/>
        <span className="photo-credit">
          Photo by <a href={imageCreditLink}>{imageCredit}</a> on Unsplash
        </span>
      </section>
    </div>
  );
}

export default WorkCard;
