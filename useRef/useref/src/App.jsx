import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  let val = useRef(0);
  let btnRef = useRef();

  function handleIncrement() {
    val.current = val.current + 1;
    console.log("value of val: ", val);
    setCount(count + 1);
  }

  function handleBackgroundColor() {
    btnRef.current.style.backgroundColor = "red";
  }

  useEffect(() => {
    console.log("this application is render every time");
  });
  return (
    <>
      <div>
        <button ref={btnRef} onClick={handleIncrement}>
          Increment
        </button>
      </div>
      <br />
      <br />
      <button onClick={handleBackgroundColor}>
        Change background color of 1st button
      </button>
      <div>
        <h4>Count: {count}</h4>
      </div>
    </>
  );
}

export default App;
