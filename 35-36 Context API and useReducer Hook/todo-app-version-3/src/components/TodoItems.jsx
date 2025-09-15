import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ onDeleteClick }) => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <>
      <div className={styles.itemContainer}>
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoName={item.name}
            todoDate={item.dueDate}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
