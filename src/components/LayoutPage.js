import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import { useNavigate } from "react-router-dom";

function LayoutPage(props) {
  const BUTTONS = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
  };

  const [isClicked, setIsClicked] = useState();
  const [mousedOver, setMousedOver] = useState(false);
  const navigate = useNavigate();

  const handleClick = (buttonId) => {
    setIsClicked(buttonId);

    console.log(buttonId);

    return buttonId;
  };

  const handleMouseOver = () => {
    setMousedOver(true);
  };

  const handleMouseOut = () => {
    setMousedOver(false);
  };

  return (
    <div
      style={{
        backgroundColor: "hsl(213, 19%, 18%)",
        border: "1px solid black",
        borderRadius: "30px",
        margin: "auto",
        marginTop: "10%",
        width: "360px",
        textAlign: "left",
        textJustify: "inter-word",
        paddingBottom: "30px",
      }}
    >
      <svg
        width="17"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          backgroundColor: "hsl(205, 30%, 30%)",
          borderRadius: "50%",
          border: "1px solid hsl(213, 19%, 18%)",
          padding: "10px",
          margin: "20px",
        }}
      >
        <path
          d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
          fill="#FC7614"
        />
      </svg>
      <div>
        <h2 style={{ marginLeft: "20px", marginTop: "0px", color: "white" }}>
          How did we do?
        </h2>
        <p
          style={{
            margin: "20px",
            color: "hsl(217, 12%, 63%)",
            fontSize: "15px",
          }}
        >
          Please let us know how we did with your support request. All feedback
          us appreciated to help us improve our offering!
        </p>
      </div>
      <div style={{ textAlign: "center" }}>
        <div style={{ position: "relative" }}>
          <Fab
            id="1"
            size="small"
            style={{
              margin: "10px",
              color: "hsl(216, 12%, 54%)",
              backgroundColor:
                isClicked === BUTTONS.one
                  ? "hsl(25, 97%, 53%)"
                  : "hsl(205, 30%, 30%)",
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
              color: "hsl(216, 12%, 54%)",
              backgroundColor:
                isClicked === BUTTONS.two
                  ? "hsl(25, 97%, 53%)"
                  : "hsl(205, 30%, 30%)",
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
              color: "hsl(216, 12%, 54%)",
              backgroundColor:
                isClicked === BUTTONS.three
                  ? "hsl(25, 97%, 53%)"
                  : "hsl(205, 30%, 30%)",
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
              color: "hsl(216, 12%, 54%)",
              backgroundColor:
                isClicked === BUTTONS.four
                  ? "hsl(25, 97%, 53%)"
                  : "hsl(205, 30%, 30%)",
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
              color: "hsl(216, 12%, 54%)",
              backgroundColor:
                isClicked === BUTTONS.five
                  ? "hsl(25, 97%, 53%)"
                  : "hsl(205, 30%, 30%)",
            }}
            onClick={() => handleClick(BUTTONS.five)}
          >
            5
          </Fab>
        </div>
        <div>
          <Fab
            onClick={() => navigate("/thankyou")}
            onMouseOut={handleMouseOut}
            onMouseOver={handleMouseOver}
            variant="extended"
            size="medium"
            style={{
              marginTop: "15px",
              paddingTop: "0px",
              paddingLeft: "110px",
              paddingRight: "110px",
              color: mousedOver ? "hsl(25, 97%, 53%)" : "white",
              backgroundColor: mousedOver ? "white" : "hsl(25, 97%, 53%)",
            }}
          >
            Submit
          </Fab>
        </div>
      </div>
    </div>
  );
}

export default LayoutPage;
