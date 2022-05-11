import React, { useState } from "react";
import "./CreateOrEditPage.css";

import { useParams } from "react-router-dom";

import "./CreateOrEditPage.css";

//formik
import { useFormik } from "formik";
//yup for validation scheme
import * as Yup from "yup";
import Input from "../../components/Input/Input";
import SelectComponent from "../../components/SelectComponent/SelectComponent";
import { countries } from "../../data/Countries";

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

  const max = 4;

  const [step, setStep] = useState(1);

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      first_name: "asd",
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

  const stepHandler = (val) => {
    if (val == -1) {
      if (step > 1) {
        let tmp = step - 1;
        setStep(tmp);
      } else {
        setStep(max);
      }
    } else if (val == 1) {
      if (step < max) {
        let tmp = step + 1;
        setStep(tmp);
      } else {
        setStep(1);
      }
    }
  };

  return (
    <div className="create-or-edit__div">
      <span>
        CreateOrEditPage {props.isNew == true ? "NEW" : "EDIT " + params.id}
      </span>
      <button
        onClick={() => stepHandler(-1)}
        className="create-or-edit__cancel__btn"
      >
        {"x"}
      </button>
      <div className="create-or-edit__step">
        <button
          onClick={() => stepHandler(-1)}
          className="create-or-edit__step__btn"
        >
          {"<"}
        </button>

        <form>
          {step == 1 ? (
            <div className="create-or-edit__form">
              <Input
                type="text"
                name="first_name"
                onChange={handleChange}
                values={values.first_name}
                defaultValue={values.first_name}
                placeholder="Name.."
                error={errors.first_name}
                labelName="First Name"
              />

              <Input
                type="text"
                name="last_name"
                onChange={handleChange}
                values={values.last_name}
                defaultValue={values.last_name}
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
                defaultValue={values.email}
                error={errors.email}
                labelName="E-mail"
              />

              {/* <Input
                type="text"
                name="gender"
                onChange={handleChange}
                defaultValue={values.gender}
                values={values.gender}
                placeholder="Gender.."
                error={errors.gender}
                labelName="Gender"
              /> */}

              <SelectComponent
                type="text"
                name="gender"
                onChange={handleChange}
                defaultValue={values.gender}
                values={values.gender}
                placeholder="Gender.."
                error={errors.gender}
                options={[
                  { value: "male", text: "Male" },
                  { value: "female", text: "Female" },
                ]}
                labelName="Gender"
              />

              <Input
                type="text"
                name="job"
                onChange={handleChange}
                defaultValue={values.job}
                values={values.job}
                placeholder="Job.."
                error={errors.job}
                labelName="Job"
              />

              <Input
                type="text"
                name="phone_number"
                onChange={handleChange}
                defaultValue={values.phone_number}
                values={values.phone_number}
                placeholder="phone.."
                error={errors.phone_number}
                labelName="Phone Number"
              />
            </div>
          ) : null}

          {step == 2 ? (
            <div className="create-or-edit__form">
              <Input
                type="text"
                name="work_phone_number"
                onChange={handleChange}
                defaultValue={values.work_phone_number}
                values={values.work_phone_number}
                placeholder="phone.."
                error={errors.work_phone_number}
                labelName="Work Phone Number"
              />

              <Input
                type="text"
                name="home_phone_number"
                onChange={handleChange}
                defaultValue={values.home_phone_number}
                values={values.home_phone_number}
                placeholder="phone.."
                error={errors.home_phone_number}
                labelName="Home Phone Number"
              />

              {/* <Input
                type="text"
                name="country"
                onChange={handleChange}
                defaultValue={values.country}
                values={values.country}
                placeholder="country.."
                error={errors.country}
                labelName="Country"
              /> */}

              <SelectComponent
                type="text"
                name="country"
                onChange={handleChange}
                defaultValue={values.country}
                values={values.country}
                placeholder="country.."
                error={errors.country}
                options={countries}
                labelName="Country"
              />

              <Input
                type="text"
                name="city"
                onChange={handleChange}
                defaultValue={values.city}
                values={values.city}
                placeholder="city.."
                error={errors.city}
                labelName="City"
              />
              <Input
                type="text"
                name="home_address"
                onChange={handleChange}
                defaultValue={values.home_address}
                values={values.home_address}
                placeholder="home_address.."
                error={errors.home_address}
                labelName="Home Address"
              />

              <Input
                type="text"
                name="work_address"
                onChange={handleChange}
                defaultValue={values.work_address}
                values={values.work_address}
                placeholder="work_address.."
                error={errors.work_address}
                labelName="Work Address"
              />
            </div>
          ) : null}

          {step == 3 ? (
            <div className="create-or-edit__form">
              <Input
                type="text"
                name="family_intimacy"
                onChange={handleChange}
                defaultValue={values.family_intimacy}
                values={values.family_intimacy}
                placeholder="family_intimacy.."
                error={errors.family_intimacy}
                labelName="Family Intimacy"
              />

              <Input
                type="text"
                name="category"
                onChange={handleChange}
                defaultValue={values.category}
                values={values.category}
                placeholder="category.."
                error={errors.category}
                labelName="Category"
              />

              <Input
                type="text"
                name="place_of_birth"
                onChange={handleChange}
                defaultValue={values.place_of_birth}
                values={values.place_of_birth}
                placeholder="place_of_birth.."
                error={errors.place_of_birth}
                labelName="Place Of Birth"
              />

              <Input
                type="text"
                name="imageUrl"
                onChange={handleChange}
                defaultValue={values.imageUrl}
                values={values.imageUrl}
                placeholder="imageUrl.."
                error={errors.imageUrl}
                labelName="Image Url"
              />
            </div>
          ) : null}

          {step == 4 ? (
            <div className="create-or-edit__form">
              <Input
                type="text"
                name="facebook"
                onChange={handleChange}
                defaultValue={values.facebook}
                values={values.facebook}
                placeholder="facebook.."
                error={errors.facebook}
                labelName="Facebook"
              />

              <Input
                type="text"
                name="instagram"
                onChange={handleChange}
                defaultValue={values.instagram}
                values={values.instagram}
                placeholder="instagram.."
                error={errors.instagram}
                labelName="Instagram"
              />

              <Input
                type="text"
                name="twitter"
                onChange={handleChange}
                defaultValue={values.twitter}
                values={values.twitter}
                placeholder="twitter.."
                error={errors.twitter}
                labelName="Twitter"
              />

              <Input
                type="text"
                name="linkedin"
                onChange={handleChange}
                defaultValue={values.linkedin}
                values={values.linkedin}
                placeholder="linkedin.."
                error={errors.linkedin}
                labelName="LinkedIn"
              />

              <Input
                type="text"
                name="github"
                onChange={handleChange}
                defaultValue={values.github}
                values={values.github}
                placeholder="github.."
                error={errors.github}
                labelName="GitHub"
              />
            </div>
          ) : null}
        </form>

        <button
          onClick={() => stepHandler(1)}
          className="create-or-edit__step__btn"
        >
          {">"}
        </button>
      </div>

      <h1>{step}</h1>

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
