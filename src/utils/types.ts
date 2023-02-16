// Union type
export type Age = 18 | 20 | 30;

// Intersection type
interface IBusinessPartner {
  name: string;
  credit: number;
}

interface IIdentity {
  id: number;
  name: string;
}

interface IContact {
  email: string;
  phone: string;
}

type Employee = IIdentity & IContact;
type Customer = IBusinessPartner & IContact;
type Other = IContact | IIdentity;
let minhduydev: Employee = {
  email: "minhduy.dev@gmail.com",
  id: 914273,
  name: "Minh Duy",
  phone: "0842030122",
};

let user: Customer = {
  name: "Duy",
  credit: 1,
  email: "nvmd.dev@gmail.com",
  phone: "0343687159",
};

let other: Other = {
  id: 2,
  name: "Other",
};

// Type casting as
// Type assertion as
