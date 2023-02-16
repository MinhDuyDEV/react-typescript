import { Permission } from "./utils/enums";
import { Age } from "./utils/types";

const travelItem: {
  image: string;
  name: string;
  totalReviews: number;
  rating: number;
  location: string;
  price: number;
  date: string;
  departure: string;
  features: {
    freeWifi: boolean;
    freeParking: boolean;
    specialOffer: boolean;
  };
}[] = [
  {
    image: "https://source.unsplash.com/random",
    name: "MinhDuyDev",
    totalReviews: 148,
    rating: 4.8,
    location: "HCM City",
    price: 300,
    date: "22-01-2003",
    departure: "Vietnam",
    features: {
      freeWifi: true,
      freeParking: true,
      specialOffer: true,
    },
  },
];

const reviews: {
  name: string;
  image: string;
  stars: number;
  premiumUser: boolean;
  date: string;
}[] = [
  {
    name: "Evondev",
    image: "",
    stars: 5,
    premiumUser: true,
    date: "05/09/2022",
  },
  {
    name: "CharkaUI",
    image: "",
    stars: 4,
    premiumUser: false,
    date: "03/08/2022",
  },
  {
    name: "React Query",
    image: "",
    stars: 3,
    premiumUser: false,
    date: "04/08/2022",
  },
];

const user: {
  firstName: string;
  lastName: string;
  age: Age;
  isStudent: boolean;
  school: (string | number)[];
  scores: number[];
  contact: [number, string];
  permission: Permission;
} = {
  firstName: "Minh",
  lastName: "Duy",
  age: 20,
  isStudent: true,
  school: ["TDTU", "UIT", "FPT", 20],
  scores: [10, 9, 8],
  contact: [12345, "minhduy.dev@gmail.com"],
  permission: Permission.ADMIN,
};

function displayReview(totalReview: number, name: string, premium: boolean) {
  return (
    <>
      Review total <strong>{totalReview}</strong> | Last reviewed by{" "}
      <strong>{name}</strong> {premium ? "⭐️" : ""}
    </>
  );
}

function App() {
  return (
    <div>
      <div className="review">
        <div className="review-image">
          <img src="https://source.unsplash.com/random" alt="" />
        </div>
        <div className="review-info">
          {displayReview(
            reviews.length,
            reviews[0].name,
            reviews[0].premiumUser
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
