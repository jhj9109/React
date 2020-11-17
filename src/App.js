import React, { useState } from "react";
import "./App.css";
import ColorBox from "./components/ColorBox";
import ColorBox2 from "./components/ColorBox2";
import ColorContext from "./contexts/color"

function App() {
  const [backColor, setBackColor] = useState("blue");
  return (
    <div className="App">
      <header className="App-header">
        <ColorContext.Provider value={{color: "red"}}>
          <ColorBox />
        </ColorContext.Provider>
        <input value={backColor} onChange={(e)=>{setBackColor(e.target.value);}}/>
        <ColorBox2 />
      </header>
    </div>
  );
}

export default App;
