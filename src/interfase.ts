export interface TodoType {
  text: string;
  id: string;
  isChecked: boolean;
}

export interface todoState {
  todos: TodoType[];
}
