import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  let expansiveTask = function (num) {
    for (let i = 0; i <= 100000000; i++) {
      console.log("expansive task re-render");
      return num * 2;
    }
  };

  let doubleValue = expansiveTask(4);

  return (
    <>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={handleIncrement}>Increment</button>
      </div>
      <div>Double = {doubleValue}</div>
    </>
  );
}

export default App;
