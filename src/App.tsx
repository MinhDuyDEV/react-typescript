import React, { useEffect, useState } from "react";
import useTodo from "./hooks/useTodo";

const Heading = ({ title }: { title: string }) => {
  return <h2 className="font-primary font-bold text-3xl mb-5">{title}</h2>;
};

interface Data {
  id: number;
  text: string;
}

const App = () => {
  const { toDos, onAddTodo, onRemoveTodo, inputRef } = useTodo([]);
  const [data, setData] = useState<Data | null>(null);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);
  const onClickItem = (item: string) => {
    alert(item);
  };
  return (
    <div>
      <Heading title="Todo App"></Heading>
      {JSON.stringify(data)}
      <List
        items={["javascript", "nodejs", "react"]}
        onClickItem={(item: string) => onClickItem(item)}
      ></List>
      <Boxed>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolorum
          quibusdam amet minus consectetur qui, consequuntur magni! Corporis,
          cupiditate natus? Repellendus deserunt porro ducimus ipsum ab corporis
          doloremque laboriosam dolorum.
        </div>
      </Boxed>
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
      <RenderList
        items={toDos}
        render={(todo) => (
          <div className="mt-5 flex flex-col gap-x-5">
            <div className="flex items-center gap-x-3 my-3" key={todo.id}>
              <span>{todo.text}</span>
              <button
                onClick={() => onRemoveTodo(todo.id)}
                className="p-2 rounded-lg bg-red-500 font-medium text-white text-sm"
              >
                Remove
              </button>
            </div>
          </div>
        )}
      ></RenderList>
      {/* <div className="mt-5">
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
      </div> */}
    </div>
  );
};

const RenderList = <T,>({
  items,
  render,
}: {
  items: T[];
  render: (item: T) => React.ReactNode;
}) => {
  return <>{items.map((item) => render(item))}</>;
};

const List = ({
  items,
  onClickItem,
}: {
  items: string[];
  onClickItem?: (item: string) => void;
}) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item}
          onClick={() => onClickItem?.(item)}
          className="cursor-pointer"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

const Boxed = ({ children }: { children?: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default App;
