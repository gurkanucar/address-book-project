import React, { useEffect, useState } from "react";
import "./CreateOrEditPage.css";

import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./CreateOrEditPage.css";

//formik
import { useFormik } from "formik";
//yup for validation scheme
import * as Yup from "yup";

import Step1 from "../../components/Steps/Step1";
import Step2 from "../../components/Steps/Step2";
import Step3 from "../../components/Steps/Step3";
import Step4 from "../../components/Steps/Step4";
import { validationSchema } from "../../util/validationSchema";
import { newRecord } from "../../data/newRecord";
import { stepHandler } from "../../util/stepHandler";

const CreateOrEditPage = (props) => {
  let params = useParams();
  const dispatch = useDispatch();
  const addresses = useSelector((state) => state.addresses.value);

  let navigate = useNavigate();

  const max = 4;
  const [step, setStep] = useState(1);
  const [existingData, setExistingData] = useState();

  //find data if exists
  useEffect(() => {
    if (params.id !== null && params.id !== undefined) {
      const tmp = addresses.filter((x) => x.id == params.id);
      setExistingData(...tmp);
    }
  }, []);

  const { handleSubmit, handleChange, values, errors } = useFormik({
    enableReinitialize: true,
    initialValues: existingData ? existingData : newRecord,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="create-or-edit__div">
      <span>
        CreateOrEditPage {props.isNew == true ? "NEW" : "EDIT " + params.id}
      </span>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="create-or-edit__cancel__btn"
      >
        {"x"}
      </button>
      <div className="create-or-edit__step">
        <button
          onClick={() => stepHandler(-1, max, step, setStep)}
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
          onClick={() => stepHandler(1, max, step, setStep)}
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
