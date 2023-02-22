type ThreeDCoordinate = [x: number, y: number, z: number];
function add3DCoordinate(
  a: ThreeDCoordinate,
  b: ThreeDCoordinate
): ThreeDCoordinate {
  return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}
add3DCoordinate([1, 2, 3], [4, 5, 6]);

export function simpleUseState(
  value: string
): [() => string, (v: string) => void] {
  return [
    () => value,
    (v: string) => {
      value = v;
    },
  ];
}

const [strGetter, strSetter] = simpleUseState("Duy");
console.log(strGetter()); // Duy
strSetter("Developer");
console.log(strGetter()); // Developer
