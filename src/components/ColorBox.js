import React from "react";
import ColorContext from "../contexts/color";
const ColorBox = () => {
  return (
    <ColorContext.Consumer>
      { value => 
        <div style={{ width: "400px", height: "400px", background: value.color }} />
      }
    </ColorContext.Consumer>
  );
};

export default ColorBox;