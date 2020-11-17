import React, { useContext } from "react";
import ColorContext2, { ColorConsumer } from "../contexts/color2";

const ColorBox2 = () => {
  const { state } = useContext(ColorContext2)
  return (
    <div style={{ width: "400px", height: "400px", background: state.color }} />
  );
};

export default ColorBox2;