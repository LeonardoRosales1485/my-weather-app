import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import Logo from "../img/logoHenry.png";
import SearchBar from "./SearchBar.jsx";

export default function Nav({ onSearch }) {
  return (
    <nav className={styles.navi}>
      <Link to="/">
        <img src={Logo} alt="" className={styles.logo} />
        <span>Henry - Weather app</span>
      </Link>
      <span> | </span>
      <Link to="/about">
        <span>About</span>
      </Link>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}
