import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import ColorBox from "./components/ColorBox";
import ColorBox2 from "./components/ColorBox2";
import ColorContext from "./contexts/color";
import ColorContext2, { ColorProvider, ColorConsumer } from "./contexts/color2";

function App() {
  // const [backColor, setBackColor] = useState("white");

  return (
    <div className="App">
      <header className="App-header">
        <ColorContext.Provider value={{ color: "red" }}>
          <ColorBox />
        </ColorContext.Provider>
        <ColorProvider>
          <ColorConsumer>
            {({ state, actions }) => (
              <input
                value={state.color}
                onChange={(e) => actions.setColor(e.target.value)}
              />
            )}
          </ColorConsumer>
          <ColorBox2 />
          {/* ColorBox2와 동일한 코드 */}
          {/* <ColorConsumer>
            {({ state }) => {
              console.log("ColorBox2", state);
              return (
                <div
                  style={{
                    width: "400px",
                    height: "400px",
                    background: state.color,
                  }}
                />
              );
            }}
          </ColorConsumer> */}
        </ColorProvider>
      </header>
    </div>
  );
}

export default App;
