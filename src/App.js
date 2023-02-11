import React, { useState } from "react";
import Home from "./Components/Home";
import ThankYou from "./Components/ThankYou";

function App() {
  const [rating, setRating] = useState(null);
  const [submit, setSubmit] = useState(false);
  
  let content;
  if(rating && submit) {
    content = <ThankYou rating={rating}/>
  } else {
    content = (
      <Home
        rating={rating}
        setRating={setRating}
        setSubmit={setSubmit}
      />
    );
  }

  return (
    <div>
      {content}
    </div>
  );

}

export default App;
