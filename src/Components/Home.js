import { logDOM } from "@testing-library/react";
import React from "react";
import starIcon from "../images/icon-star.svg";
import ButtonGroup from "./ButtonGroup";

const Home = ({ rating, setRating, setSubmit }) => {
  const handleSubmit = () => {
    setSubmit(true);
    if (!rating) {
      setSubmit(false);
    }
  };

  return (
    <div className='container'>
      <div className='iconDiv'>
        <img
          src={starIcon}
          alt='star-icon'
        />
      </div>
      <h2 className='heading'>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <ButtonGroup setRating={setRating} />
      <button
        type='button'
        className='submitBtn'
        onClick={handleSubmit}
      >
        SUBMIT
      </button>
    </div>
  );
};

export default Home;
