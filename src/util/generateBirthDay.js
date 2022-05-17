export const generateBirthDay = () => {
  const today = new Date();
  const value = `${(today.getMonth() + 1).toString()}-${today
    .getDate()
    .toString()}-1963`;

  return new Date(value.toString());
};
