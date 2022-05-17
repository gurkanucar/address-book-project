export const generateBirthDay = () => {
  const today = new Date();
  const value = `${(today.getMonth() + 1).toString()}-${today
    .getDate()
    .toString()}-1963`;

  console.log("day", today.getDate(), "month", today.getMonth() + 1);

  return new Date(value.toString());
  // return new Date("5-11-2022");
};
