import { createContext, useState } from "react";

const ColorContext2 = createContext({
  state: {
    color: "white",
  },
  actions: {
    setColor: () => {},
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("white");

  const value = {
    state: {
      color,
    },
    actions: {
      setColor,
    },
  };
  return (
    <ColorContext2.Provider value={value}>{children}</ColorContext2.Provider>
  );
};

const { Consumer: ColorConsumer } = ColorContext2;

export { ColorProvider, ColorConsumer };
export default ColorContext2;
