import React, { useEffect, useRef, useState } from "react";

export default function Discount() {
  return (
    <div className="App">
        <h1>Discount Calculator</h1>
      <Product />
      <App3 />
    </div>
  );
}

function Product() {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState(null);
  const [notDiscountedPrice, setNotDiscountedPrice] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [currentDay, setCurrentDay] = useState(new Date().toDateString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
      setCurrentDay(new Date().toDateString());
    }, 1000);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleCalculate = () => {
    const numericPrice = parseFloat(price);
    const numericDiscount = parseFloat(discount);

    // if (isNaN(numericPrice) || isNaN(numericDiscount)) {
    //   console.log("Please enter valid numbers for price and discount.");
    //   setDiscountedPrice(null);
    //   setNotDiscountedPrice("Please enter a number.");
    //   return;
    // }

    const calculatedPrice =
      numericPrice - (numericPrice * numericDiscount) / 100;

    if (calculatedPrice < 0) {
      console.log("Discounted price cannot be negative.");
      setDiscountedPrice(null);
      setNotDiscountedPrice("price cannot be negative");
      return;
    }
    else if (isNaN(numericPrice)) {
      console.log("Please enter a valid price and discount.");
      setDiscountedPrice(null);
      setNotDiscountedPrice("Please enter a valid price");
      return;
    }
    else if (isNaN(numericDiscount)) {
      console.log("Please enter a valid price and discount.");
      setDiscountedPrice(null);
      setNotDiscountedPrice("Please enter a valid discount");
      return;
    }
    else {
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
      <button onClick={handleCalculate} style={{display: "block", textAlign: 'center', margin: '0 auto'}}>Calculate Discount</button>
      {discountedPrice !== null && <p>Discounted Price: ${discountedPrice}</p>}
      {notDiscountedPrice !== null && (
        <p style={{ color: "red", fontSize: "20px" }}>{notDiscountedPrice}</p>
      )}
      <div style={{display: "inline", marginRight: '10px'}}>{currentDay}</div>
      <span>{currentTime}</span>
      
    </div>
  );
}

function App3() {
  const inputRef = useRef(null)

  const handleSubmit = () => {
    alert(`Input Value: ${inputRef.current.value}`)
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
      {inputRef.current && <p>{inputRef.current.value}</p>}
    </div>
  )
}


// function InputPage() {
//   const [inputValue, setInputValue] = useState("");
//   const [submittedValue, setSubmittedValue] = useState("");

//   const handleSubmit = () => {
//     setSubmittedValue(inputValue);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <button onClick={handleSubmit}>Submit</button>
//       {submittedValue && <p>Submitted Value: {submittedValue}</p>}
//     </div>
//   );
// }

