function Random() {
  let number = Math.random() * 1000000;
  return (
    <>
      <h3>Random Number is {Math.round(number)}</h3>
    </>
  );
}
export default Random;
