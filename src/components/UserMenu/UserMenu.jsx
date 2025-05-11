import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <div className={s.UserMenu}>
      <span className={s.name}>Welcome,{name}</span>
      <button onClick={handleLogout} className={s.button}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
