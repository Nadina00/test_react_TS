import dataOperations from "../Reducers/data/data-operation";
import { useAppDispatch } from "../Hooks/hook";

type Props = {
  post: {
    id: number,
    title: string,
    body: string
  }
};

export const PostItem: React.FC<Props> = ({post }: Props) => {
    const dispatch = useAppDispatch();

    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(dataOperations.deletePost(post.id));
      
      };
  return (
    <>
      <td data-label="Номер">{post.id}</td>
      <td data-label="Назва"> {post.title}</td>
      <td data-label="Пост">{post.body}</td>

      <button type="button" onClick={onClick}>Видалити</button>
    </>
  );
};


