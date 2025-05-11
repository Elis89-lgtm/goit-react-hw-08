import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={s.nav}>
      <NavLink to="/" className={s.link}>
        Contacts
      </NavLink>
    </div>
  );
};

export default Navigation;
