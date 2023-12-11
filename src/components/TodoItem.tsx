import React, { useState } from "react";
import { useAppDispatch } from "../store/store";
import { deleteTodo, editTodo, toggleTodo } from "../store/slices/todo-slice";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { TodoType } from "../interfase";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";

const TodoItem: React.FC<TodoType> = ({ text, id, isChecked }) => {
  const [toggleVisiableModal, setToggleVisiableModal] = useState(false);
  const [newText, setNewText] = useState(text);
  const dispatch = useAppDispatch();

  const deleteTodoHandler = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const toggleVisiableForm = () => setToggleVisiableModal((prev) => !prev);

  const editTodoHandler = (e: any) => {
    e.preventDefault();
    dispatch(editTodo({ id, text: newText }));

    setToggleVisiableModal((prev) => !prev);
  };

  const toggleChecked = () => {
    dispatch(toggleTodo(id));
  };

  return (
    <StyledTodoItem className={isChecked ? "checkedTodo" : ""}>
      {toggleVisiableModal ? (
        <StyledEditForm onSubmit={editTodoHandler}>
          <StyledEditInput
            type="text"
            autoFocus
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <Button type="submit">save</Button>
        </StyledEditForm>
      ) : (
        <>
          <input
            onClick={toggleChecked}
            type="checkbox"
            defaultChecked={isChecked}
          />
          <TodoTitle>{text}</TodoTitle>
          <DeleteIcon onClick={() => deleteTodoHandler(id)} />
          <EditIcon
            style={{ display: isChecked ? "none" : "block" }}
            onClick={toggleVisiableForm}
          />
        </>
      )}
    </StyledTodoItem>
  );
};

export default TodoItem;

const StyledTodoItem = styled("div")(() => ({
  marginTop: "0.625rem",
  width: "25rem",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0.625rem",
  backgroundColor: "#ffffff",
  border: "1px solid #ccc",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  transition: "background-color 0.3s ease",

  "&:hover": {
    backgroundColor: "#f0f0f0",
    borderColor: "#1976d2",
  },

  "&.checkedTodo": {
    textDecoration: "line-through",
    color: "grey",
    borderColor: "#1976d2",
  },
}));
const TodoTitle = styled(Typography)(() => ({
  marginRight: "0.625rem",
  flexGrow: "1",
  maxWidth: "80%",
  overflow: "hidden",
}));

const DeleteIcon = styled(MdDeleteForever)(() => ({
  height: "1.563rem",
  width: "1.563rem",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.1)",
    color: "red",
  },
}));

const EditIcon = styled(FaEdit)(() => ({
  height: "1.25rem",
  width: "1.25rem",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.1)",
    color: "blue",
  },
}));

const StyledEditInput = styled("input")(() => ({
  width: "80%",
  height: "2rem",
}));

const StyledEditForm = styled("form")(() => ({
  display: "flex",
  gap: "8.125rem",
}));
