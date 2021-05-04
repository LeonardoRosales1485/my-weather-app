import React, { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  return (
    <div className={styles.enNavi}>
      <form>
        <input
          className={styles.input}
          type="text"
          value={city}
          placeholder="Busque por ciudad"
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className={styles.busqueda}
          onClick={(e) => {
            e.preventDefault();
            onSearch(city);
            setCity("");
          }}
        >
          Agregar
        </button>
      </form>
    </div>
  );
}
