import "./App.css";
import { useCallback, useState } from "react";
import ChildComponents from "./components/ChildComponent";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount((count) => count - 1);
  }, []);

  return (
    <>
      <div>
        <h1>Count: {count}</h1>
        <br />
        <br />
        <button onClick={handleIncrement}>Increment</button>
        <br />
        <br />
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <br />
      <div>
        <ChildComponents
          btnName="Click Me4"
          handleIncrement={handleIncrement}
        ></ChildComponents>
      </div>
    </>
  );
}

export default App;
