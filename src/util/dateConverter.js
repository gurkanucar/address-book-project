export const dateConverter = (val) => {
  let curr = new Date(val);
  curr.setDate(curr.getDate() + 1);
  const date = curr.toISOString().split("T")[0];
  console.log("date", date);
  return date;
};
