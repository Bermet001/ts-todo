import React from "react";
import { useAppSelector } from "../store/store";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useAppSelector((state) => state.todos);

  return (
    <>
      {todos?.map((todo) => (
        <div key={todo.id}>
          <TodoItem {...todo} />
        </div>
      ))}
    </>
  );
};

export default TodoList;
