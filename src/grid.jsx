import React from "react";

const Grid = () => {
    const empty = ["", "", "", "", "", "", "", ""];
  return (
    <div style={{
        display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0px, 1fr))",
            gap: "5vw",
            padding: "5vw",
            width: "80vw",
            height: "auto",
            backgroundColor: "white",
            borderRadius: "10px",
            margin: "auto",
    }}>{empty.map((item, index) => (
        <div key={index} style={{
            padding: "10px",
            border: "1px solid gray",
            width: "10vw",
            height: "10vw",
            borderRadius: "5px",
        }}>{item}</div>
    ))}
    {/* <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      {children}
    </div> */}
    </div>
  );
}

export default Grid;