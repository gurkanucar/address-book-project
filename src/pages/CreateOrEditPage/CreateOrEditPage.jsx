import React from "react";
import "./CreateOrEditPage.css";

import { useParams } from "react-router-dom";

import "./CreateOrEditPage.css";

//formik
import { useFormik } from "formik";
//yup for validation scheme
import * as Yup from "yup";
import Input from "../../components/Input/Input";

const validationSchema = Yup.object({
  first_name: Yup.string().required("Zorunlu alan"),
  last_name: Yup.string().required("Zorunlu alan"),
  email: Yup.string().email("Geçersiz e-mail adresi").required("Zorunlu alan"),
  gender: "",
  job: Yup.string().required("Zorunlu alan"),
  phone_number: Yup.string().required("Zorunlu alan"),
  work_phone_number: Yup.string(),
  home_phone_number: Yup.string(),
  country: Yup.string().required("Zorunlu alan"),
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

  firstName: Yup.string().required("Zorunlu alan"),
  lastName: Yup.string().required("Zorunlu alan"),
  email: Yup.string().email("Geçersiz e-mail adresi").required("Zorunlu alan"),
});

const CreateOrEditPage = (props) => {
  let params = useParams();

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      gender: "male",
      job: "",
      phone_number: "",
      work_phone_number: "",
      home_phone_number: "",
      country: "",
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
      birth_date: "",
      place_of_birth: "",
      imageUrl: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="create-or-edit__div">
      <span>
        CreateOrEditPage {props.isNew == true ? "NEW" : "EDIT " + params.id}
      </span>
      <form className="create-or-edit__form">
        <Input
          type="text"
          name="first_name"
          onChange={handleChange}
          values={values.first_name}
          placeholder="Name.."
          error={errors.first_name}
          labelName="First Name"
        />

        <Input
          type="text"
          name="last_name"
          onChange={handleChange}
          values={values.last_name}
          placeholder="Last Name.."
          error={errors.last_name}
          labelName="Last Name"
        />

        <Input
          type="text"
          name="email"
          onChange={handleChange}
          values={values.email}
          placeholder="Email.."
          error={errors.email}
          labelName="E-mail"
        />

        <Input
          type="text"
          name="gender"
          onChange={handleChange}
          values={values.gender}
          placeholder="Gender.."
          error={errors.gender}
          labelName="Gender"
        />

        <Input
          type="text"
          name="job"
          onChange={handleChange}
          values={values.job}
          placeholder="Job.."
          error={errors.job}
          labelName="Job"
        />

        <Input
          type="text"
          name="phone_number"
          onChange={handleChange}
          values={values.phone_number}
          placeholder="phone.."
          error={errors.phone_number}
          labelName="Phone Number"
        />

        <Input
          type="text"
          name="work_phone_number"
          onChange={handleChange}
          values={values.work_phone_number}
          placeholder="phone.."
          error={errors.work_phone_number}
          labelName="Work Phone Number"
        />

        <Input
          type="text"
          name="home_phone_number"
          onChange={handleChange}
          values={values.home_phone_number}
          placeholder="phone.."
          error={errors.home_phone_number}
          labelName="Home Phone Number"
        />

        <Input
          type="text"
          name="country"
          onChange={handleChange}
          values={values.country}
          placeholder="country.."
          error={errors.country}
          labelName="Country"
        />

        <Input
          type="text"
          name="city"
          onChange={handleChange}
          values={values.city}
          placeholder="city.."
          error={errors.city}
          labelName="City"
        />

        <Input
          type="text"
          name="home_address"
          onChange={handleChange}
          values={values.home_address}
          placeholder="home_address.."
          error={errors.home_address}
          labelName="Home Address"
        />

        <Input
          type="text"
          name="work_address"
          onChange={handleChange}
          values={values.work_address}
          placeholder="work_address.."
          error={errors.work_address}
          labelName="Work Address"
        />

        <Input
          type="text"
          name="facebook"
          onChange={handleChange}
          values={values.facebook}
          placeholder="facebook.."
          error={errors.facebook}
          labelName="Facebook"
        />

        <Input
          type="text"
          name="instagram"
          onChange={handleChange}
          values={values.instagram}
          placeholder="instagram.."
          error={errors.instagram}
          labelName="Instagram"
        />

        <Input
          type="text"
          name="twitter"
          onChange={handleChange}
          values={values.twitter}
          placeholder="twitter.."
          error={errors.twitter}
          labelName="Twitter"
        />

        <Input
          type="text"
          name="linkedin"
          onChange={handleChange}
          values={values.linkedin}
          placeholder="linkedin.."
          error={errors.linkedin}
          labelName="LinkedIn"
        />

        <Input
          type="text"
          name="github"
          onChange={handleChange}
          values={values.github}
          placeholder="github.."
          error={errors.github}
          labelName="GitHub"
        />

        <Input
          type="text"
          name="family_intimacy"
          onChange={handleChange}
          values={values.family_intimacy}
          placeholder="family_intimacy.."
          error={errors.family_intimacy}
          labelName="Family Intimacy"
        />

        <Input
          type="text"
          name="category"
          onChange={handleChange}
          values={values.category}
          placeholder="category.."
          error={errors.category}
          labelName="Category"
        />

        <Input
          type="text"
          name="place_of_birth"
          onChange={handleChange}
          values={values.place_of_birth}
          placeholder="place_of_birth.."
          error={errors.place_of_birth}
          labelName="Place Of Birth"
        />

        <Input
          type="text"
          name="imageUrl"
          onChange={handleChange}
          values={values.imageUrl}
          placeholder="imageUrl.."
          error={errors.imageUrl}
          labelName="Image Url"
        />
      </form>
      <button
        onClick={handleSubmit}
        className="create-or-edit__btn"
        type="submit"
      >
        Save
      </button>
    </div>
  );
};

export default CreateOrEditPage;
