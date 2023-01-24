import { create } from "zustand";

export const ZustandImmer = () => {
  return <></>;
};

type Todo = {
  task: string;
  done: boolean;
};

type TodoStore = {
  todos: Todo[];
  input: string
  addTodo: () => void
  toggleTodo: (id: number) => void
  deleteTodo: (id: number) => void
};

const addTodo = () => 

const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  input: string
  
}));
