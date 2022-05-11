export const generateId = (arr) => {
  let max = 0;
  arr.forEach((x) => {
    if (x.id > max) {
      max = x.id;
    }
  });
  return max + 1;
};
