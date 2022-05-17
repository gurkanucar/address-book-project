export const dateConverter = (val) => {
  const date = new Date();
  let local = new Date(val);
  local.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return local.toJSON().slice(0, 10);
};

export const isTodayToMonthAndDay = (val) => {
  const today = new Date();
  const compareDate = new Date(val);
  return (
    today.getDate() == compareDate.getDate() &&
    today.getMonth() == compareDate.getMonth()
  );
};
