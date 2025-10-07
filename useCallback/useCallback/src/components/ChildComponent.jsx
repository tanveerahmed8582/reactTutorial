import React from "react";

const ChildComponents = React.memo(({ btnName, handleIncrement }) => {
  console.log("child-component re-render");
  return <button onClick={handleIncrement}>{btnName}</button>;
});

export default ChildComponents;

//React.memo -> wrap -> component -> component re-render tabhi hoga jab props change honge nahi toh rerender nhi hoga.

//if you sending a function, than Reach.memo won't be able to save you from re-render
