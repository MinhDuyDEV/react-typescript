function getDevicesKeys<DataKey, B extends keyof DataKey>(
  items: DataKey[],
  key: B
): DataKey[B][] {
  return items.map((item) => item[key]);
}

const devices = [
  {
    name: "Iphone",
    price: 1000,
  },
  {
    name: "Ipad",
    price: 2000,
  },
  {
    name: "Laptop",
    price: 3000,
  },
];

console.log(getDevicesKeys(devices, "name"));
console.log(getDevicesKeys(devices, "price"));
