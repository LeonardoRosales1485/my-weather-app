import React, { useState } from "react";
import styles from "./About.module.css";
import YoSoyIronMan from "./YoSoyIronMan.jsx";

export default function About() {
  const [clickeo, setClick] = useState(false);

  function enClick(e) {
    e.preventDefault();
    setClick(!clickeo);
  }

  return (
    <div>
      <div
        className={clickeo ? styles.sitelogo : styles.author}
        onClick={enClick}
      >
        Aplicación de consulta del clima por Leonardo Rosales
      </div>
      { clickeo ? <YoSoyIronMan /> : null}
    </div>
  );
}
