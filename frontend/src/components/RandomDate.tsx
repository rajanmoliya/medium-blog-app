export default function RandomDate() {
  function randomDate(start: Date, end: Date) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    ).toDateString();
  }

  return <span>{randomDate(new Date(2020, 0, 1), new Date())}</span>;
}
