export const dateConverter = (val) => {
  let curr;
  if (val === undefined || val === null) {
    curr = new Date();
  } else {
    curr = new Date(val);
  }

  curr.setDate(curr.getDate());
  const date = curr.toISOString().split("T")[0];
  return date;
};

export const dateConverterFormatted = (val) => {
  return new Date(dateConverter(val)).toLocaleDateString("en-US");
};