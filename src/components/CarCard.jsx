function CarCard({ name, year, type, price, description, image, link }) {
  return (
    <article className="car-card">
      <div className="car-image">
        <img src={image} alt={name} />
      </div>

      <div className="car-content">
        <p className="car-type">
          {year} · {type}
        </p>

        <h3>{name}</h3>

        <p className="description">{description}</p>

        <div className="card-bottom">
          <div>
            <p className="price-label">Starting Price</p>
            <p className="price">{price}</p>
          </div>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="view-button"
          >
            View Car
          </a>
        </div>
      </div>
    </article>
  );
}

export default CarCard;