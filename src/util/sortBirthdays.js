export const sortBirthdays = (arr) => {
  let startDate;
  // startDate = new Date("1-1-2022");
  startDate = new Date();

  const endDate = new Date("12-31-" + startDate.getFullYear());

  const filtered = arr.filter((x) => {
    const date = new Date(x.birth_date);
    return compare(date, startDate, endDate);
  });

  const sorted = filtered.sort((a, b) => {
    return sortFunction(new Date(b.birth_date), new Date(a.birth_date));
  });

  return sorted;
};

const sortFunction = (a, b) => {
  let flag = 0;
  if (a.getMonth() > b.getMonth()) {
    flag = -1;
  } else if (a.getDate() > b.getDate() && a.getMonth() == b.getMonth()) {
    flag = -1;
  } else if (
    a.getDate() == b.getDate() &&
    a.getMonth() == b.getMonth() &&
    a.getFullYear() > b.getFullYear()
  ) {
    flag = -1;
  }
  return flag;
};

const compare = (date, startDate, endDate) => {
  let flag = false;

  if (
    date.getMonth() >= startDate.getMonth() &&
    date.getMonth() <= endDate.getMonth()
  ) {
    if (
      !(
        date.getDate() < startDate.getDate() &&
        date.getMonth() == startDate.getMonth()
      )
    ) {
      flag = true;
    }
  }

  return flag;
};
