import produce from "immer";
import { create } from "zustand";

export const ZustandImmer = () => {
  const { todos, input, handleInputChange, addTodo, toggleTodo, deleteTodo } =
    useTodoStore();

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="my task"
          value={input}
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <button onClick={addTodo}>add todo</button>
      </div>

      {todos.map((todo, index) => (
        <>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => toggleTodo(index)}
          />
          <span>{todo.task}</span>
          <button onClick={() => deleteTodo(index)}>delete todo</button>
        </>
      ))}
    </>
  );
};

type Todo = {
  task: string;
  done: boolean;
};

type TodoStore = {
  todos: Todo[];
  input: string;
  handleInputChange: (task: string) => void;
  addTodo: () => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const addTodo = (todos: Todo[], input: string): Todo[] => [
  ...todos,
  { task: input, done: false },
];

const toggleTodo = (todos: Todo[], index: number): Todo[] => {
  const newTodos = todos.map((todo, i) => ({
    ...todo,
    done: index === i ? !todo.done : todo.done,
  }));

  return newTodos;
};

const deleteTodo = (todos: Todo[], index: number): Todo[] => {
  const newTodos = todos.filter((_, i) => index !== i);
  return newTodos;
};

const useTodoStore = create<TodoStore>((set) => ({
  todos: [{ task: "idk", done: false }],
  input: "",

  handleInputChange: (task: string) =>
    set(
      produce<TodoStore>((state) => {
        state.input = task;
      })
    ),

  addTodo: () =>
    set(
      produce<TodoStore>((state) => {
        state.todos = addTodo(state.todos, state.input);
      })
    ),

  toggleTodo: (index: number) =>
    set(
      produce<TodoStore>((state) => {
        state.todos = toggleTodo(state.todos, index);
      })
    ),

  deleteTodo: (index: number) =>
    set(
      produce<TodoStore>((state) => {
        state.todos = deleteTodo(state.todos, index);
      })
    ),
}));
