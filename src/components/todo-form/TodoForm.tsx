import React, { useState } from "react";
import { TextField } from "@mui/material";
import styled from "@emotion/styled";
import { Button, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../../store/slices/todo-slice";
import { TodoType } from "../../interfase";

const TodoForm = () => {
  const [todo, setTodo] = useState("");

  const todos = useSelector((state: any) => state.todos);

  const inputValue = (e: any) => setTodo(e.target.value);

  const dispatch = useDispatch();

  const submitForm = (e: any) => {
    e.preventDefault();
    if (todo.trim().length > 0) {
      const newTodo: TodoType = {
        text: todo,
        id: uuidv4(),
        isChecked: false,
      };
      dispatch(addTodo(newTodo));
      setTodo("");
    }
    return todos;
  };

  return (
    <StyledTodoContainer>
      <Typography align="center" variant="h3" gutterBottom>
        To-do list
      </Typography>
      <StyledForm onSubmit={submitForm}>
        <StyledDiv>
          <StyledInput
            value={todo}
            onChange={inputValue}
            label="Enter new todo..."
            type="text"
          />
          <Button type="submit" variant="contained">
            Add
          </Button>
        </StyledDiv>
      </StyledForm>
    </StyledTodoContainer>
  );
};

export default TodoForm;

const StyledTodoContainer = styled(Container)(() => ({
  display: "inline-block",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "4rem",
  "& .css-17vbkzs-MuiFormControl-root-MuiTextField-root": {
    marginTop: "10px !important",
  },
}));
const StyledForm = styled("form")(() => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.8em",
}));

const StyledDiv = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.8em",
  width: "40%",
}));

const StyledInput = styled(TextField)(() => ({
  width: "100%",
}));
