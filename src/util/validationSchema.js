//yup for validation scheme
import * as Yup from "yup";

export const validationSchema = () => {
  return Yup.object({
    first_name: Yup.string().required("Zorunlu alan"),
    last_name: Yup.string().required("Zorunlu alan"),
    email: Yup.string()
      .email("Geçersiz e-mail adresi")
      .required("Zorunlu alan"),
    gender: Yup.string(),
    job: Yup.string().required("Zorunlu alan"),
    phone_number: Yup.string().required("Zorunlu alan"),
    work_phone_number: Yup.string(),
    home_phone_number: Yup.string(),
    country: Yup.string(),
    city: Yup.string().required("Zorunlu alan"),
    home_address: Yup.string(),
    work_address: Yup.string(),
    facebook: Yup.string(),
    instagram: Yup.string(),
    twitter: Yup.string(),
    linkedin: Yup.string(),
    github: Yup.string(),
    family_intimacy: Yup.string(),
    category: Yup.string(),
    created: Yup.date(),
    color: Yup.string(),
    birth_date: Yup.date().required("Zorunlu alan"),
    place_of_birth: Yup.string(),
    imageUrl: Yup.string(),
  });
};
