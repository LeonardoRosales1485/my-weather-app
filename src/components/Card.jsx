import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

export default function Card({name, min, max, img, onClose, id}) {
  // acá va tu código
  return (
    <div className={styles.cuadro}>
      <h5 className={styles.city}>
        {name} 
        <button onClick={onClose} className={styles.botoncito}>
          X
        </button>
      </h5>
      <div className={styles.temps}>
        <div>
          <p>Minima </p>
          <p>{min}°C</p>
        </div>
        <div>
          <p>Maxima </p>
          <p>{max}°C</p>
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          alt="Imagen no encontrada"
        />
      </div>
      <Link to={`/ciudad/${id}`}><div>Mas informacion</div></Link>
    </div>
  );
}
