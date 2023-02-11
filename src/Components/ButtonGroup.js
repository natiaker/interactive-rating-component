import React, {useState} from "react";
import Button from "../Components/Button";

const ButtonGroup = ({ setRating }) => {
  const buttonLabels = [1, 2, 3, 4, 5];
  const [prevBtn, setPrevBtn] = useState(null);

  const handleClick = event => {
    if(event.target.nodeName === "BUTTON") {      
      const newRating = event.target.innerText;
      setRating(newRating);
      event.target.style.backgroundColor = "#FC7614";
  
      if (prevBtn !== null) {
        prevBtn.style.backgroundColor = "#262E38";
      }
      setPrevBtn(event.target);
    }
  };

  return (
    <div
      className='buttonDiv'
      onClick={handleClick}
    >
      {buttonLabels.map((label, index) => {
        return (
          <Button
            key={index}
            label={label}
            setRating={setRating}
          />
        );
      })}
    </div>
  );
};

export default ButtonGroup;
