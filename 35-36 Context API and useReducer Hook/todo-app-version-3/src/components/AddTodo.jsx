import styles from "./AddTodo.module.css";
import { CgAddR } from "react-icons/cg";
import { useRef } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

function AppTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
  };
  return (
    <>
      <div className="container text-center">
        <form className="row my-row" onSubmit={handleAddButtonClicked}>
          <div className="col-6">
            <input
              type="text"
              ref={todoNameElement}
              placeholder="Enter Todo here"
            />
          </div>
          <div className="col-4">
            <input ref={dueDateElement} type="date" />
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-success my-button">
              <CgAddR />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default AppTodo;
