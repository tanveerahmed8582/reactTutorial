import style from "./Item.module.css";

function Item({ foodItem }) {
  return (
    <>
      <li className={`${style["my-item"]}`}>
        <span className={`${style["my-span"]}`}>{foodItem}</span>
      </li>
    </>
  );
}
export default Item;
