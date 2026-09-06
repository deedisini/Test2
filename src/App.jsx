import "./App.css";
import CarCard from "./components/CarCard";

const cars = [
  {
    id: 1,
    name: "McLaren 720S",
    year: "2017–2023",
    type: "Supercar",
    price: "$310,500",
    description:
      "A lightweight twin-turbo V8 supercar known for its exceptional performance and handling.",
    image: "/images/McLaren-720s.jpg",
    link: "https://cars.mclaren.com/us_en/legacy/720s",
  },
  {
    id: 2,
    name: "Aston Martin Valhalla",
    year: 2026,
    type: "Hybrid Supercar",
    price: "$1,051,700",
    description:
      "A mid-engine plug-in hybrid supercar combining a twin-turbo V8 with three electric motors.",
    image: "/images/Aston-Martin-Valhalla-(2026).jpeg",
    link: "https://www.astonmartin.com/en/models/valhalla",
  },
  {
    id: 3,
    name: "Lotus Evija",
    year: 2020,
    type: "Electric Hypercar",
    price: "$2,400,000",
    description:
      "An ultra-limited electric hypercar powered by four electric motors and designed around Lotus's lightweight philosophy.",
    image: "/images/Lotus-Evija-(2020).jpg",
    link: "https://www.lotuscars.com/en-US/evija",
  },
  {
    id: 4,
    name: "Ferrari SF90 Stradale",
    year: "2019–2024",
    type: "Hybrid Supercar",
    price: "$528,764",
    description:
      "Ferrari's plug-in hybrid V8 flagship combining a twin-turbocharged engine with three electric motors.",
    image: "/images/Ferrari-SF90-Stradale.jpg",
    link: "https://www.ferrari.com/en-EN/auto/sf90-stradale",
  },
  {
    id: 5,
    name: "Porsche 911 GT3 RS",
    year: 2024,
    type: "Track-Focused Sports Car",
    price: "$241,300",
    description:
      "A naturally aspirated 911 engineered around aerodynamics, lightweight construction, and track performance.",
    image: "/images/Porsche-911-GT3-RS-(2024).webp",
    link: "https://www.porsche.com/international/models/911/911-gt3-rs/911-gt3-rs/",
  },
  {
    id: 6,
    name: "Lamborghini Revuelto",
    year: "2024–2026",
    type: "Hybrid V12 Supercar",
    price: "$608,358",
    description:
      "Lamborghini's V12 flagship combining a naturally aspirated engine with three electric motors.",
    image: "/images/Lamborghini-Revuelto.jpg",
    link: "https://www.lamborghini.com/en-en/models/revuelto",
  },
];

function App() {
  return (
    <div className="app">
      <header className="hero">
        <div className="hero-content">
          <p className="eyebrow">AUTOMOTIVE COLLECTION</p>

          <h1>My Car Gallery</h1>

          <p className="hero-text">
            A collection of cars I would love to own someday.
          </p>
        </div>
      </header>

      <main className="container">
        <div className="section-heading">
          <div>
            <p className="section-label">MY COLLECTION</p>
            <h2>Featured Cars</h2>
          </div>

          <span className="car-count">{cars.length} Cars</span>
        </div>

        <div className="car-list">
          {cars.map((car) => (
            <CarCard
              key={car.id}
              name={car.name}
              year={car.year}
              type={car.type}
              price={car.price}
              description={car.description}
              image={car.image}
              link={car.link}
            />
          ))}
        </div>
      </main>

      <footer>
        <p>React Front-End Web Development Assignment</p>
      </footer>
    </div>
  );
}

export default App;