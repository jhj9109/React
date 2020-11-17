import React from "react";
import { ColorConsumer } from "../contexts/color2";
const ColorBox2 = () => {
  return (
    <ColorConsumer>
      { ({ state }) =>{
        console.log("ColorBox2", state)
        return <div style={{ width: "400px", height: "400px", background: state.color }} />
      } 
      }
    </ColorConsumer>
  );
};

export default ColorBox2;