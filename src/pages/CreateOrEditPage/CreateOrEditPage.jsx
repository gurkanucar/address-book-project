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
import Step1 from "../../components/Steps/Step1";
import Step2 from "../../components/Steps/Step2";
import Step3 from "../../components/Steps/Step3";
import Step4 from "../../components/Steps/Step4";

const validationSchema = Yup.object({
  first_name: Yup.string().required("Zorunlu alan"),
  last_name: Yup.string().required("Zorunlu alan"),
  email: Yup.string().email("Geçersiz e-mail adresi").required("Zorunlu alan"),
  gender: Yup.string().required("Zorunlu alan"),
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
            <Step1
              handleChange={handleChange}
              values={values}
              errors={errors}
            />
          ) : null}

          {step == 2 ? (
            <Step2
              handleChange={handleChange}
              values={values}
              errors={errors}
            />
          ) : null}

          {step == 3 ? (
            <Step3
              handleChange={handleChange}
              values={values}
              errors={errors}
            />
          ) : null}

          {step == 4 ? (
            <Step4
              handleChange={handleChange}
              values={values}
              errors={errors}
            />
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
