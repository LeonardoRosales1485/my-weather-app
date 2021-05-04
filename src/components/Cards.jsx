import React from "react";
import Card from "./Card.jsx";
import styles from "./Cards.module.css";

export default function Cards({ cities, onClose }) {
  // acá va tu código
  // tip, podés usar un map
  if (cities.length !== 0) {
    return (
      <div className={styles.temps}>
        {cities.map((city) => (
          <Card
            key={city.id}
            id={city.id}
            max={city.max}
            min={city.min}
            name={city.name}
            img={city.img}
            onClose={() => onClose(city.id)}
          />
        ))}
      </div>
    );
  } else {
    return <h3>Sin ciudades</h3>;
  }
}
