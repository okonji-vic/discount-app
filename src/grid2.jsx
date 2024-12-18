function Grid2({ numRows, numCols }) {
    return (
      <div 
        style={{
          display: "grid",
          gridTemplateRows: `repeat(${numRows}, 1fr)`,
          gridTemplateColumns: `repeat(${numCols}, 1fr)`,
          gap: "5vw", // Optional: adds spacing between grid items
          backgroundColor: "lightgray",
          marginTop: "20px",
            padding: "5vw",
            width: "80vw",
            borderRadius: "10px",
        }} 
        className="grid"
      >
        {Array.from({ length: numRows * numCols }).map((_, index) => (
          <div 
            key={index} 
            style={{
              border: "1px solid black", // Example styling for grid cells
              padding: "10px",
              textAlign: "center",
              borderRadius: "5px",
              width: "10vw",
              height: "10vw",
            }}
          >
            {index + 1}
          </div>
        ))}
      </div>
    );
  }
export default Grid2;  