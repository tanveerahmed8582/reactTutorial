import { useState, useEffect } from "react";

const Timer = () => {
  const [second, setSecond] = useState(0);
  useEffect(() => {
    const secondId = setInterval(() => {
      setSecond((prevSecond) => prevSecond + 1);
    }, 1000);
    return () => {
      clearInterval(secondId);
    };
  }, []);

  return (
    <div>
      <h1>Second: {second}</h1>
    </div>
  );
};
export default Timer;
