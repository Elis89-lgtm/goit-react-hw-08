import React from "react";
import s from "./Header.module.css";
import AppBar from "../AppBar/AppBar";

const Header = () => {
  return (
    <header className={s.header}>
      <AppBar />
    </header>
  );
};

export default Header;
