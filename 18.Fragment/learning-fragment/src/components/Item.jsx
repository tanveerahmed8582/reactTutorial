import styles from "./Item.module.css";

function Item({ foodItem, handleBuyButton }) {
  return (
    <>
      <li className={`${styles["my-item"]} list-group-item`}>
        <span className={`${styles["my-span"]}`}>{foodItem}</span>
        <button
          className={`${styles.button} btn btn-info`}
          onClick={handleBuyButton}
        >
          Buy
        </button>
      </li>
    </>
  );
}
export default Item;
