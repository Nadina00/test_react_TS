import { useAppDispatch, useAppSelector } from "../Hooks/hook";
import dataOperations from "../Reducers/data/data-operation";
import { useEffect, useState } from "react";
import { PostItem } from "./PostItem";
import css from "./Todo/Todo.module.css"

export const PostList: React.FC = () => {
  const dispatch = useAppDispatch();
  const postList = useAppSelector((state) => state.data.list);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    dispatch(dataOperations.getPost());
  }, []);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeBody = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setBody(e.target.value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newId =
      postList && postList.length > 0
        ? postList[postList.length - 1].id + 1
        : 1;

    const newPost = {
      id: newId,
      title: title.trim(),
      body: body.trim(),
    };

    console.log(newPost);
    dispatch(dataOperations.addPost(newPost));
    setTitle("");
    setBody("");
  };

  console.log(postList);

  return (
    <div>
      <form onSubmit={onSubmit} className={css.container}>
        <label>
          {" "}
          Назва
          <input value={title} onChange={onChangeTitle} className={css.input}/>
        </label>
        <label>
          {" "}
          Пост
          <textarea value={body} onChange={onChangeBody} className={css.text}/>
        </label>
        <button type="submit"> Додати</button>
      </form>
      <table className={css.table_blur}>
        <thead>
          <th>Номер</th>
          <th>Назва</th>
          <th>Пост</th>
          <th>Кнопка</th>
        </thead>
        <tbody>
          {postList && postList.length > 0 ? (
            postList.map(
              (post: { id: number; title: string; body: string }) => (
                <tr key={post.id}>
                  <PostItem post={post} />
                </tr>
              )
            )
          ) : (
            <p>No posts available</p>
          )}
        </tbody>
      </table>
    </div>
  );
};
