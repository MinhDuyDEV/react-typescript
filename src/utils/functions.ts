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
