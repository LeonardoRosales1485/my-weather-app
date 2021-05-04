import React from "react";
import { Link } from "react-router-dom";
import styles from "./Ciudad.module.css";

export default function Ciudad({ city }) {
  if (city) {
    return (
      <div className={styles.ciudad}>
        <div className={styles.container}>
          <h2>{city.name}</h2>
          <div className="info">
            <div>Temperatura: {city.temp} ºC</div>
            <div>Clima: {city.weather}</div>
            <div>Viento: {city.wind} km/h</div>
            <div>Cantidad de nubes: {city.clouds}</div>
            <div>Latitud: {city.latitud}º</div>
            <div>Longitud: {city.longitud}º</div>
            <hr/>
            <Link to="/"><div>Volver</div></Link>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>AAAAAAA</div>;
  }
}
