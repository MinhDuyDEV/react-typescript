// type Developer = {
//   name: string;
//   [key: string]: any;
// } & Record<string, any>;

type Developer = {
  name: string;
  [key: string]: any;
};

const minhduydev: Developer = {
  name: "Minh Duy",
  age: 20,
  gender: "male",
  school: "TDTU",
};

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type FeatureFlag = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<FeatureFlag>;

// Mapping Modifiers
// Remove "readonly" attributes from a type's properties
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
  readonly id: string;
  readonly name: string;
  readonly age: number;
  readonly isGood: boolean;
};

type UnlockedAccount = CreateMutable<LockedAccount>;

// Remove 'optional' attributes from a type's properties
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};

type User = Concrete<MaybeUser>;

// Key Remapping via `as`
type Getters<Type> = {
  [Property in keyof Type as `on${Capitalize<string & Property>}Change`]: (
    value: Type[Property]
  ) => Type[Property];
} & {
  [Property in keyof Type as `on${Capitalize<string & Property>}Focus`]?: (
    value: Type[Property]
  ) => void;
};
interface Person {
  name: string;
  age: number;
  location: string;
}
type LazyPerson = Getters<Person>;
// onNameChange: (value: string) => string
// onAgeChange: (value: number) => number
// onLocationChange: (value: string) => string
// onNameFocus: (value: string) => void
// onAgeFocus: (value: number) => void
// onLocationFocus: (value: string) => void

// Remove the 'kind' property
type RemoveKindField<Type> = {
  [Property in keyof Type as Exclude<Property, "kind">]: Type[Property];
};

interface Circle {
  kind: "Circle";
  radius: number;
}

type KindlessCircle = RemoveKindField<Circle>;

type EventConfig<Events extends { kind: string }> = {
  [E in Events as E["kind"]]: (event: E) => void;
};

type SquareEvent = { kind: "square"; x: number; y: number };
type CircleEvent = { kind: "circle"; radius: number };

type Config = EventConfig<SquareEvent | CircleEvent>;

type ExtractPII<Type> = {
  [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
};

type DBFields = {
  id: { format: "incrementing" };
  name: { type: string; pii: true };
};

type ObjectNeedingGDPRDeletion = ExtractPII<DBFields>;
