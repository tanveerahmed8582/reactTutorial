import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);

  let timerRef = useRef(null);

  const handleStart = () => {
    timerRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const handleReset = () => {
    handleStop();
    setTime(0);
  };

  return (
    <>
      <h1>Stop Watch: {time} second</h1>
      <button onClick={handleStart}>Start</button>
      <br />
      <br />
      <button onClick={handleStop}>Stop</button>
      <br />
      <br />
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default App;
