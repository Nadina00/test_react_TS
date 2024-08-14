import { useAppDispatch, useAppSelector } from "../../Hooks/hook";
import  usePagination  from "../../Hooks/pagination";
import todoOperations from "../../Reducers/todo/todo-operation";
import React, { useEffect, useState } from "react";
import { TodoItem } from "./TodoItem";
import css from "./Todo.module.css"

export const TodoList: React.FC = () => {
  const dispatch = useAppDispatch();
  const [num, setNum] = useState("1");
  const todoList = useAppSelector((state) => state.todo.todo);

  const { nextPage, prevPage, page, setPage, totalPages } = usePagination({
    contentPerPage: 10,
    count: 100,
  });

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setNum(e.target.value);
  };

  type Task = {
    id: number;
    title: string;
    completed: boolean;
  };

  const filterTasks = (todoList: Task[], num: string): Task[] => {
    if (num === "2") {
      return todoList.filter((task) => task.completed === true);
    } else if (num === "3") {
      return todoList.filter((task) => task.completed === false);
    }
    return todoList; 
  };

  const filteredTasks = filterTasks(todoList, num);

  useEffect(() => {
    dispatch(todoOperations.getTodo(page));
  }, [page, dispatch]);

  return (
    <div className={css.table_blur}>
      <form >
        <label>
          Виконання
          <select onChange={onChange} value={num}>
            <option value={1}>Всі</option>
            <option value={2}>Виконано</option>
            <option value={3}>Невиконано</option>
          </select>
        </label>
      </form>
      <div className={css.wrapper}>
      <table className={css.table_blur}>
        <thead>
          <tr>
            <th>Номер</th>
            <th>Назва</th>
            <th>Виконано</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks && filteredTasks.length > 0 ? (
            filteredTasks.map((todo) => (
              <tr key={todo.id}>
                <TodoItem todo={todo} />
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No tasks available</td>
            </tr>
          )}
        </tbody>
      </table>
      <div>
        <button onClick={prevPage}>&larr;</button>
        {[...Array(totalPages).keys()].map((el) => (
          <button onClick={() => setPage(el + 1)} key={el}>
            {el + 1}
          </button>
        ))}
        <button onClick={nextPage}>&rarr;</button>
      </div>
      </div>
    </div>
  );
};