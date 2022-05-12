export const searchFilter = (arr, text) => {
  console.log("text filter", text);
  return arr.filter((x) => textSearch(x, text));
};

export const searchFilterRestrict = (arr, text, category, country, gender) => {
  console.log("restrict filter", text, category, country, gender);
  return arr.filter(
    (x) =>
      textSearch(x, text) &&
      (category == "" ? x.category.includes("") : x.category === category) &&
      (gender == "" ? x.gender.includes("") : x.gender === gender) &&
      (country == "" ? x.country.includes("") : x.country === country)
  );
};

const textSearch = (x, text) => {
  return (
    x.first_name.toLowerCase().includes(text) ||
    x.last_name.toLowerCase().includes(text) ||
    x.job.toLowerCase().includes(text) ||
    x.email.toLowerCase().includes(text) ||
    x.phone_number.toLowerCase().includes(text) ||
    x.work_phone_number.toLowerCase().includes(text) ||
    x.home_phone_number.toLowerCase().includes(text) ||
    x.city.toLowerCase().includes(text) ||
    x.home_address.toLowerCase().includes(text) ||
    x.work_address.toLowerCase().includes(text) ||
    x.facebook.toLowerCase().includes(text) ||
    x.instagram.toLowerCase().includes(text) ||
    x.twitter.toLowerCase().includes(text) ||
    x.nick_name.toLowerCase().includes(text)
  );
};
