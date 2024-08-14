//import * as React from "react";
import { Link } from "react-router-dom";
import { Home } from "../Components/Home/Home";
import css from "./HomePage.module.css"
export interface Props {}

export const HomePage = () => {
  return (
    <div>
      <div className={css.box}>
        <Link to={"/post"} className={css.link}>Post</Link>
        <Link to={"/todoes"} className={css.link}>Todoes</Link>
      </div>

      <Home />
    </div>
  );
};
