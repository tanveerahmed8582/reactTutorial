import styles from "./AddTodo.module.css";
import { useState } from "react";

function AppTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [todoDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, todoDate);
    setTodoName("");
    setDueDate("");
  };
  return (
    <>
      <div className="container text-center">
        <div className="row my-row">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter Todo here"
              value={todoName}
              onChange={handleNameChange}
            />
          </div>
          <div className="col-4">
            <input type="date" value={todoDate} onChange={handleDateChange} />
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-success my-button"
              onClick={handleAddButtonClicked}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default AppTodo;
