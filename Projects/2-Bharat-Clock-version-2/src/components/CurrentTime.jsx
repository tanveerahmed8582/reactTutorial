import { useState, useEffect } from "react";

function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
      matchMedia, -pp;
    };
  }, []);

  return (
    <p>
      This is Current time: {time.toDateString()} - {time.toTimeString()}
    </p>
  );
}
export default CurrentTime;
