//import * as React from 'react';
import { Link } from 'react-router-dom';
import { PostList } from '../Components/PostList';
import css from "./HomePage.module.css"

export interface Props {
}

export const Post = () => {
  return (
    <div>
      <div className={css.box}>
        <Link to={'/'} className={css.link}>Home</Link>
        <Link to={"/todoes"} className={css.link}>Todoes</Link>
        </div>
      <PostList/>
      
    </div>
  );
}
