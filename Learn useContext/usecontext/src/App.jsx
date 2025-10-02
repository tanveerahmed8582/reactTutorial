import { createContext, useState } from "react";
import ChildA from "./components/ChildA";
import "./App.css";

//step-1 Create Context
//step-2 wrap all the child inside a provider
//step-3 pass value
//step-4 consumer k andar ja k consume krlo

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div
          id="container"
          style={{ backgroundColor: theme === "light" ? "aqua" : "black" }}
        >
          <ChildA />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
export { ThemeContext };
