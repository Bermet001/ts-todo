import React from "react";
import TodoForm from "./todo-form/TodoForm";
import TodoList from "./TodoList";
import styled from "@emotion/styled";

const TodoWrapper = () => {
  return (
    <StyledContainer>
      <TodoForm />
      <TodoList />
    </StyledContainer>
  );
};

export default TodoWrapper;

const StyledContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "30px",
}));
