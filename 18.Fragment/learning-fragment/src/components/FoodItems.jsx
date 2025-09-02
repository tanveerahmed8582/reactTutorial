function FoodItems() {
  let foodItems = ["Dal", "Roti", "Salad", "Green Vegetable", "Milk", "Ghee"];
  return (
    <>
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default FoodItems;
