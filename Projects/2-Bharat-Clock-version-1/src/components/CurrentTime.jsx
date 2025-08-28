function CurrentTime() {
  let time = new Date();

  return (
    <p>
      This is Current time: {time.toDateString()} - {time.toTimeString()}
    </p>
  );
}
export default CurrentTime;
