import Item from "./Item";

function FoodItems({ items }) {
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item
            key={item}
            foodItem={item}
            handleBuyButton={() => console.log(`${item} being bought`)}
          />
        ))}
      </ul>
    </>
  );
}
export default FoodItems;
