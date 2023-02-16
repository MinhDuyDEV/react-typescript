import React, { useEffect } from "react";

const Card = () => {
  useEffect(() => {
    // Type casting
    const input = document.querySelector("input") as HTMLInputElement;
    console.log(input.value);
  }, []);
  return (
    <div>
      <input type="text" />
    </div>
  );
};

export default Card;
