import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  const handleIncrement = () => {
    console.log("mai har baar render ho rha hu");
    setCount(count + 1);
  };

  const expansiveTask = (num) => {
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
  };

  let doubleValue = useMemo(() => expansiveTask(input), [input]);

  return (
    <>
      <div>
        <h1>Counter: {count}</h1>
        <br />
        <br />
        <button onClick={handleIncrement}>Increment</button>
      </div>
      <div>
        <input
          type="number"
          placeholder="Enter number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <br />
        double: {doubleValue}
      </div>
    </>
  );
}

export default App;
