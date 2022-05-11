export const searchFilter = (arr, text, category, country, gender) => {
  return arr.filter(
    (x) =>
      x.first_name.toLowerCase().includes(text) ||
      x.last_name.toLowerCase().includes(text) ||
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
      x.category.toLowerCase().includes(category) ||
      x.gender.toLowerCase().includes(gender) ||
      x.country.toLowerCase().includes(country)
  );
};

export const searchFilterRestrict = (arr, text, category, country, gender) => {
  return arr.filter(
    (x) =>
      x.first_name.toLowerCase().includes(text) ||
      x.last_name.toLowerCase().includes(text) ||
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
      (x.category.toLowerCase().includes(category) &&
        x.gender.toLowerCase().includes(gender) &&
        x.country.toLowerCase().includes(country))
  );
};
