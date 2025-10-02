import { useEffect, useState } from "react";
import Timer from "./components/timer";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(1);

  // function increment() {
  //   setCount(count + 1);
  // }
  // function decrement() {
  //   setCount(count - 1);
  // }

  // function totalIncrement() {
  //   setTotal(total + 1);
  // }

  // function totalDecrement() {
  //   setTotal(total - 1);
  // }

  //first -> side effect function
  //second -> clean-up function
  // third -> comma seperated depencies list
  // useEffect(() => {
  //   first
  //   return () => {
  //     second
  //   }
  // }, [third])

  //Variation: 1 -> That runs on each render
  // useEffect(() => {
  //   alert("runs on every render");
  // });

  //Variation: 2 -> That runs on only first render
  // useEffect(() => {
  //   alert("runs on only first render");
  // }, []);

  //Variation: 3 -> That runs on when count is updated render
  // useEffect(() => {
  //   alert("this will run when count is updated");
  // }, [count]);

  //Variation: 4 -> That runs on when count/total is updated render
  // useEffect(() => {
  //   alert("this will run when count is updated");
  // }, [count, total]);

  //Variation: 5 -> Ish baar clean-up function add karte hai.
  // useEffect(() => {
  //   alert("count is updated");

  //   return () => {
  //     alert("count is unmounted from UI");
  //   };
  // }, [count]);
  return (
    <>
      <Timer></Timer>
    </>
  );
}

export default App;
