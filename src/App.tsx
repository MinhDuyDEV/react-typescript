import React, { useReducer, useRef } from "react";

const Heading = ({ title }: { title: string }) => {
  return <h2 className="font-primary font-bold text-3xl mb-5">{title}</h2>;
};

type ActionType =
  | { type: "ADD"; text: string }
  | { type: "REMOVE"; id: number };
interface Todo {
  id: number;
  text: string;
}
const todoReducer = (state: Todo[], action: ActionType) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: state.length,
          text: action.text,
        },
      ];
      break;
    case "REMOVE":
      return state.filter((todo: Todo) => todo.id !== action.id);
    default:
      throw new Error("");
  }
};

const initialState: Todo[] = [];
const App = () => {
  const [toDos, dispatch] = useReducer(todoReducer, initialState);
  const inputRef = useRef<HTMLInputElement>(null);
  const onRemoveTodo = (todoId: number) => {
    dispatch({
      type: "REMOVE",
      id: todoId,
    });
  };
  const onAddTodo = () => {
    if (inputRef.current) {
      dispatch({
        type: "ADD",
        text: inputRef.current.value,
      });
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };
  return (
    <div>
      <Heading title="Todo App"></Heading>
      <div className="max-w-sm">
        <div className="flex items-center gap-x-5">
          <input
            type="text"
            className="p-4 border outline-none border-slate-400 rounded-lg"
            ref={inputRef}
          />
          <button
            onClick={onAddTodo}
            className="p-4 rounded-lg bg-blue-500 text-white text-center"
          >
            Add todo
          </button>
        </div>
      </div>
      <div className="mt-5">
        {toDos.map((todo) => (
          <div className="flex items-center gap-x-3 my-3" key={todo.id}>
            <span>{todo.text}</span>
            <button
              onClick={() => onRemoveTodo(todo.id)}
              className="p-2 rounded-lg bg-red-500 font-medium text-white text-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
