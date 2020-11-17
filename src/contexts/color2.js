import { createContext, useState } from "react";

const ColorContext2 = createContext({
  state: {
    color: "yellow",
  },
  actions: {
    setColor: () => {console.log("뭐하십니까 Provier안에 넣으셔야죠")},
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("white");

  const value = {
    state: {
      color,
    },
    actions: {
      setColor
    },
  };
  return (
    <ColorContext2.Provider value={value}>{children}</ColorContext2.Provider>
  );
};

const { Consumer: ColorConsumer } = ColorContext2;

export { ColorProvider, ColorConsumer };
export default ColorContext2;
