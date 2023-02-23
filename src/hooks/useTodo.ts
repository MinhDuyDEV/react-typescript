import { useReducer, useRef } from "react";

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

export default function useTodo(initialState: Todo[]): {
  toDos: Todo[];
  onAddTodo: () => void;
  onRemoveTodo: (todoId: number) => void;
  inputRef: React.LegacyRef<HTMLInputElement> | undefined;
} {
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
  return { toDos, onRemoveTodo, onAddTodo, inputRef };
}
