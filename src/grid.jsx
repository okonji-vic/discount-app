import React from "react";

const Grid = () => {
    const empty = ["", "", "", "", "", "", "", ""];
  return (
    <div style={{
        display: "grid",
            gridTemplateColumns: "repeat(4, minmax(50px, 1fr))",
            gap: "3vw",
            padding: "1rem",
            border: "10px solid white",
            width: "49vw",
            height: "auto",
            backgroundColor: "white",
            borderRadius: "10px",
            margin: "auto",
    }}>{empty.map((item, index) => (
        <div key={index} style={{
            padding: "2.5vw",
            border: "1px dashed gray",
            width: "5vw",
            height: "5vw",
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