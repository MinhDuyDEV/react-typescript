// Partial<T>
interface Todo {
  title: string;
  description: string;
  date: string;
}

// interface newTodo {
//   title?: string;
//   description?: string;
// }

function updateTodo(todo: Todo, newTodo: Partial<Todo>) {
  return {
    ...todo,
    ...newTodo,
  };
}

console.log(
  updateTodo(
    {
      title: "Learn javascript",
      description: "Learn javascript in 6 month",
      date: "",
    },
    {
      title: "Learn ReactJS",
      description: " So hard to learn",
      date: "22/01/2003",
    }
  )
);

// Required<T>
interface Props {
  isActive?: boolean;
  color?: string;
}

const compA: Props = {};
const compB: Required<Props> = {
  isActive: true,
  color: "red",
};

// Readonly<T>
interface Book {
  title: string;
}

const life: Book = {
  title: "The life of book",
};
const game: Readonly<Book> = {
  title: "The life of game",
};
// game.title = "No game no life";
life.title = "No game no life";

// Record<Keys, Type>
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: {
    age: 10,
    breed: "Persian",
  },
  boris: {
    age: 5,
    breed: "Maine Coon",
  },
  mordred: {
    age: 16,
    breed: "British ShortHair",
  },
};
const newRecords: Record<number, string> = {
  1: "Number one",
  2: "Number two",
  3: "Number three",
};

cats.boris;

// Pick<Type, Keys>
interface TodoP {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<TodoP, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  // description: "Can not use property here"
  completed: false,
};

// Omit<Type, Keys>
interface TodoO {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreviewO = Omit<TodoO, "description">;

const todoO: TodoPreviewO = {
  title: "Clean room",
  // description: "Can not use property here"
  completed: false,
};
