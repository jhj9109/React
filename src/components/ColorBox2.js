import React from "react";
import { ColorConsumer } from "../contexts/color2";
const ColorBox = () => {
  return (
    <ColorConsumer>
      { ({ state }) => 
        <div style={{ width: "400px", height: "400px", background: state.color }} />
      }
    </ColorConsumer>
  );
};

export default ColorBox;