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
  if (
    monthGreaterThan(a, b) ||
    dateGreaterThan(a, b) ||
    yearGreaterThan(a, b)
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
        date.getMonth() === startDate.getMonth()
      )
    ) {
      flag = true;
    }
  }

  return flag;
};

const monthGreaterThan = (a, b) => {
  return a.getMonth() > b.getMonth();
};

const dateGreaterThan = (a, b) => {
  return a.getDate() > b.getDate() && a.getMonth() === b.getMonth();
};

const yearGreaterThan = (a, b) => {
  return (
    a.getDate() === b.getDate() &&
    a.getMonth() === b.getMonth() &&
    a.getFullYear() > b.getFullYear()
  );
};
