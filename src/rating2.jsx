const RatingDisplay2 = () => {
    const reviews = [
      {
        title: "Winter's Orbit",
        rating: 5,
      },
      {
        title: "Dial D for Deadman",
        rating: 4,
      },
    ];
  
    // const filledStar = `https://sandpack-bundler.vercel.app/img/gold-star.svg`; // Path to the filled star image
    
  
    return (
      <div style={{ fontFamily: "Arial, sans-serif", margin: "0px", textAlign: "center", border: '0px solid ', width: '86vw' }}>
        {reviews.map((review, index) => (
          <div
            className="container"
            key={index}
            style={{
              border: "1px dashed gray",
              marginBottom: "20px",
              padding: "15px",
              borderRadius: "5px",
              width: "70vw",
              margin: "10px auto",
              
            }}
          >
            <h2 style={{ margin: "0 0 10px", fontSize: '5vw' }}>{review.title}</h2>
            <p style={{ fontSize: "3vw", margin: "10px 0" }}>Rating: {review.rating} / 5</p>
            <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
              {/* Render filled stars */}
              {Array.from({ length: review.rating }).map((_, index) => (
                <img
                  key={index}
                  src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
                  alt="Filled Star"
                  style={{ width: "4vw", height: "7vw" }}
                />
              ))}
  
              {/* Render empty stars */}
              {/* {Array.from({ length: 5 - review.rating }).map((_, i) => (
                <img
                  key={`empty-${i}`}
                  src={emptyStar}
                  alt="Empty Star"
                  style={{ width: "20px", height: "20px" }}
                />
              ))} */}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default RatingDisplay2;
  