import "./App.css";
import AppName from "./components/AppName";
import AppTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "08/09/2025",
    },
    {
      name: "Go to Collage",
      dueDate: "24/09/2025",
    },
    {
      name: "Practice Coding",
      dueDate: "daily",
    },
  ];

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AppTodo />
        <TodoItems todoItems={todoItems} />
      </center>
    </>
  );
}

export default App;
