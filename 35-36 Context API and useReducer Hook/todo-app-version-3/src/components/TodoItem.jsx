import { useContext } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <>
      <div className="container ">
        <div className="row my-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger my-button"
              onClick={() => {
                deleteItem(todoName);
              }}
            >
              <AiTwotoneDelete />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default TodoItem;
