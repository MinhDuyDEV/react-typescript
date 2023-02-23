function deepEqualCompare<T>(
  a: T extends any[] ? "don't pass an array here" : T,
  b: T extends any[] ? "don't pass an array here" : T
): boolean {
  return a === b;
}

deepEqualCompare(true, true);
deepEqualCompare("minhduydev", "minhduydev");
deepEqualCompare(99, 99);
// deepEqualCompare([1, 2], [3, 4]);
