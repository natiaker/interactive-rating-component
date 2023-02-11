import React from "react";
import illustration from "../images/illustration-thank-you.svg";

const ThankYou = ({rating}) => {  
  return (
    <div className='container'>
      <img
        src={illustration}
        alt='thank-you-illustration'
        style={{ display: "block", margin: "0 auto" }}
      />
      <p className='result'>You selected {rating} out of 5</p>
      <h2
        className='heading'
        style={{ textAlign: "center" }}
      >
        Thank you!
      </h2>
      <p style={{ textAlign: "center" }}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default ThankYou;
