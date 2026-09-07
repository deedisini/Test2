import { useState } from "react";

function CarCard({ name, year, type, price, description, image, link }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <article
      className="car-card"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <img src={image} alt={name} />

      <div className="car-content">
        <p className="car-type">
          {year} · {type}
        </p>

        <h2>{name}</h2>

        <div className={`card-details ${showDetails ? "show" : ""}`}>
          <p className="description">{description}</p>

          <p className="price">{price}</p>

          <a
            className="view-button"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Car
          </a>
        </div>
      </div>
    </article>
  );
}

export default CarCard;