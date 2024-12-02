import React, { useState } from "react";

export default function Discount() {
  return (
    <div className="App">
        <h1>Discount Calculator</h1>
      <Product />
    </div>
  );
}

function Product() {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState(null);
  const [notDiscountedPrice, setNotDiscountedPrice] = useState(null);

  const handleCalculate = () => {
    const numericPrice = parseFloat(price);
    const numericDiscount = parseFloat(discount);

    if (isNaN(numericPrice) || isNaN(numericDiscount)) {
      console.log("Please enter valid numbers for price and discount.");
      setDiscountedPrice(null);
      setNotDiscountedPrice("Please enter a number.");
      return;
    }

    const calculatedPrice =
      numericPrice - (numericPrice * numericDiscount) / 100;

    if (calculatedPrice < 0) {
      console.log("Discounted price cannot be negative.");
      setDiscountedPrice(null);
      setNotDiscountedPrice("price cannot be negative");
    } else {
      console.log(`Discounted price is $${calculatedPrice.toFixed(2)}`);
      setDiscountedPrice(calculatedPrice.toFixed(2));
      setNotDiscountedPrice(null);
    }
  };

  return (
    <div>
      <p>
        Price: $
        <input
          type=""
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter price"
        />
      </p>
      <p>
        Discount: 

        <input
          type=""
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          placeholder="Enter discount"
          />
        %
      </p>
      <button onClick={handleCalculate}>Calculate Discount</button>
      {discountedPrice !== null && <p>Discounted Price: ${discountedPrice}</p>}
      {notDiscountedPrice !== null && (
        <p style={{ color: "red", fontSize: "20px" }}>{notDiscountedPrice}</p>
      )}
    </div>
  );
}
