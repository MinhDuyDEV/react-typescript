// ternary operator
// condition ? true : false
// someType extends otherType ? trueType : falseType

type someType<T> = T extends string
  ? string
  : T extends boolean
  ? boolean
  : T extends number
  ? number
  : any;
type someValue1 = someType<string>; // string
type someValue2 = someType<number>; // number
type someValue3 = someType<boolean>; //boolean

type OptionsFlag2<Type> = {
  [Property in keyof Type]: Type[Property] extends () => void
    ? Property
    : never;
}[keyof Type];

interface MyStudent {
  name: string;
  age: number;
  updateName(): void;
}

type MyStudentConditional = OptionsFlag2<MyStudent>;

type MyNonNullable<T> = T extends null | undefined ? never : T;
type NonNullVal = MyNonNullable<null | undefined | string | number>;
