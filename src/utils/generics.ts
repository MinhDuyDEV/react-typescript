function simpleUseState<T>(value: T): [() => T, (v: T) => void] {
  return [
    () => value,
    (v: T) => {
      value = v;
    },
  ];
}

const [strGetter1, strSetter1] = simpleUseState("Duy");
console.log(strGetter1()); // Duy
strSetter1("Developer");
console.log(strGetter1()); // Developer
const [strGetter2, strSetter2] = simpleUseState(100);
console.log(strGetter2()); // 100
strSetter2(200);
console.log(strGetter2()); // 200
const [strGetter, strSetter] = simpleUseState(false);
console.log(strGetter()); // false
strSetter(true);
console.log(strGetter()); // true

interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item: item,
    rank: rank(item),
  }));
  return ranks.map((rank) => rank.item);
}
