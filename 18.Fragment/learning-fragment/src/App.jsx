import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";

function App() {
  //let foodItems = [];
  let foodItems = ["Dal", "Roti", "Salad", "Green Vegetable", "Milk", "Ghee"];

  return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMessage />
      <FoodItems />
    </>
  );
}

export default App;
