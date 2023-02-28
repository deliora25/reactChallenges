import React, { useState } from "react";
import Fab from "@mui/material/Fab";

export const BUTTONS = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
};

function Button() {
  const [isClicked, setIsClicked] = useState();
  const [mousedOver, setMousedOver] = useState(false);

  const handleClick = (buttonId) => {
    setIsClicked(buttonId);
    return buttonId;
  };

  const handleMouseOver = () => {
    setMousedOver(true);
  };

  const handleMouseOut = () => {
    setMousedOver(false);
  };
  return (
    <div>
      <Fab
        id="1"
        size="small"
        style={{
          margin: "10px",
          backgroundColor: isClicked === BUTTONS.one ? "orange" : null,
        }}
        onClick={() => handleClick(BUTTONS.one)}
      >
        1
      </Fab>
      <Fab
        id="2"
        size="small"
        style={{
          margin: "10px",
          backgroundColor: isClicked === BUTTONS.two ? "orange" : null,
        }}
        onClick={() => handleClick(BUTTONS.two)}
      >
        2
      </Fab>
      <Fab
        id="3"
        size="small"
        style={{
          margin: "10px",
          backgroundColor: isClicked === BUTTONS.three ? "orange" : null,
        }}
        onClick={() => handleClick(BUTTONS.three)}
      >
        3
      </Fab>
      <Fab
        id="4"
        size="small"
        style={{
          margin: "10px",
          backgroundColor: isClicked === BUTTONS.four ? "orange" : null,
        }}
        onClick={() => handleClick(BUTTONS.four)}
      >
        4
      </Fab>
      <Fab
        id="5"
        size="small"
        style={{
          margin: "10px",
          backgroundColor: isClicked === BUTTONS.five ? "orange" : null,
        }}
        onClick={() => handleClick(BUTTONS.five)}
      >
        5
      </Fab>
      <Fab
        onMouseOut={handleMouseOut}
        onMouseOver={handleMouseOver}
        variant="extended"
        size="medium"
        style={{
          paddingTop: "0px",
          paddingLeft: "110px",
          paddingRight: "110px",
          color: mousedOver ? "orange" : "white",
          backgroundColor: mousedOver ? "white" : "orange",
        }}
      >
        Submit
      </Fab>
    </div>
  );
}

export default Button;
