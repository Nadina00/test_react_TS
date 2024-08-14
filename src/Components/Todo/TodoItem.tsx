//import { useAppDispatch } from "../../Hooks/hook";

type Props = {
  todo: {
    id: number;
    title: string;
    completed: boolean;
  };
};

export const TodoItem: React.FC<Props> = ({ todo }: Props) => {
  //const dispatch = useAppDispatch();

  return (
    <>
      <td data-label="Номер">{todo.id}</td>
      <td data-label="Назва"> {todo.title}</td>
      <td data-label="Виконано">{todo.completed ? "Виконано" : "Невиконано"}</td>
    </>
  );
};
