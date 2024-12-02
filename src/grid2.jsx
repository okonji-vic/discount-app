function Grid2({ numRows, numCols }) {
    return (
      <div 
        style={{
          display: "grid",
          gridTemplateRows: `repeat(${numRows}, 1fr)`,
          gridTemplateColumns: `repeat(${numCols}, 1fr)`,
          gap: "10px", // Optional: adds spacing between grid items
          backgroundColor: "lightgray",
          marginTop: "20px",
            padding: "10px",
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
            }}
          >
            {index + 1}
          </div>
        ))}
      </div>
    );
  }
export default Grid2;  