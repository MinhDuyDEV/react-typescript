// function overloading: function have the same name, name amount or different amount of parameter, different type and same type or different return type
function total(a: number, b: number): number;
function total(a: string, b: string): string;
function total(a: any, b: any) {
  return a + b;
}

total(5, 7); // 12
total("a", "b"); // ab

interface Coordinate {
  x: number;
  y: number;
}

// {x: number; y: number}: Coordinate
function parseCoordinate(obj: Coordinate): Coordinate;
// x: 10, y: 20
function parseCoordinate(x: number, y: number): Coordinate;
// handle
function parseCoordinate(arg1: any, arg2?: any): Coordinate {
  let coord = {
    x: arg1 as number,
    y: arg2 as number,
  };
  if (typeof arg1 === "object") {
    coord = {
      ...(arg1 as Coordinate),
    };
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }
  return coord;
}

// Normal function
function totalNumber(a: number, b: number): number {
  return a + b;
}
// Arrow function
const addStrings = (a: string, b: string): string => {
  return `${a} ${b}`;
};
// Default parameters
function addNumbersWithDefaultParams(a: number = 10, b: number = 20): number {
  return a + b;
}
addNumbersWithDefaultParams(); // 30
// Union types
function format(
  title: string,
  description: string,
  amount: string | number
): string {
  return `${title} ${description} ${amount}`;
}
format("minhduydev", "developer", 50);
format("minhduydev", "developer", "50");
// Void functions
function contact(email: string, phone: number): void {
  console.log(email, phone);
}
// Promise functions
const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Get data from ${url}`);
// destructuring parameters
function information(id: number, ...names: string[]): string {
  return `${id} ${names.join(" ")}`;
}
information(1, "Minh", "Duy"); // ["Minh", "Duy"] = names
// With callback
function handleFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}
// Function params with params
type UpdateArray = (n: number) => number;
function handleUpdateArray(numbers: number[], update: UpdateArray): number[] {
  return numbers.map((item) => update(item));
}
handleUpdateArray([1, 2, 3, 4, 5], (n) => n * 5); // [5, 10, 15, 20, 25]
// Function as types
// type UpdateArray = (n: number) => number

// Function return function
function handleValue(val: number): (n: number) => number {
  return (n: number): number => n * val;
}
const value = handleValue(5);
console.log(value(10)); // 50
