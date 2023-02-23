// ReplaceAll<S, From, To>
// ReplaceAll<'demo item demo', 'demo', 'item'> => 'item item item'

type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer Left}${From}${infer Right}`
  ? `${Left}${To}${ReplaceAll<Right, From, To>}`
  : S;

type ResultReplace = ReplaceAll<"demo item demo", "demo", "item">;
