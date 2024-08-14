//import * as React from "react";
import { Link } from "react-router-dom";
import {TodoList} from "../Components/Todo/TodoList"
import css from "./HomePage.module.css"

export interface Props {}

export const Todoes = () => {
  return (
  <div>
    <div className={css.box}>
    <Link to={"/"} className={css.link}>Home</Link>
    <Link to={"/post"} className={css.link}>Post</Link>
    </div>
    <TodoList/>
    </div>);
};
