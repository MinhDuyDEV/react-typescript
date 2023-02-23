import { String, Union } from "ts-toolbelt";

const query = `/home?name=minhduydev&age=20`;

// const objQueryResults: (ABC Type) = {
//   name: "minhduydev",
//   age: 20,
// };

type Query = typeof query;
// `/home?name=minhduydev&age=20` => ["/home", "name=minhduydev&age=20"]
type SecondQueryPart = String.Split<Query, "?">[1];
type QueryElements = String.Split<SecondQueryPart, "&">;

type QueryParams = {
  [Q in QueryElements[number]]: {
    [K in String.Split<Q, "=">[0]]: String.Split<Q, "=">[1];
  };
}[QueryElements[number]];

const objQueryResult: Union.Merge<QueryParams> = {
  name: "minhduydev",
  age: "20",
};
