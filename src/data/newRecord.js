export const newRecord = () => {
  return {
    id: Math.random(),
    first_name: "",
    last_name: "",
    email: "",
    gender: "male",
    job: "",
    phone_number: "",
    work_phone_number: "",
    home_phone_number: "",
    country: "Turkey",
    city: "",
    home_address: "",
    work_address: "",
    facebook: "",
    instagram: "",
    twitter: "",
    linkedin: "",
    github: "",
    family_intimacy: "",
    category: "other",
    created: new Date(),
    color: "",
    birth_date: new Date(),
    place_of_birth: "",
    imageUrl: "",
  };
};
