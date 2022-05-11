export const dateConverter = (val) => {
  let curr = new Date(val);
  curr.setDate(curr.getDate());
  const date = curr.toISOString().split("T")[0];
  return date;
};
