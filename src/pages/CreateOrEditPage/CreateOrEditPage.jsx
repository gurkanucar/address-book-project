import React, { useEffect, useState } from "react";
import "./CreateOrEditPage.css";

import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Button from "../../components/Button/Button";

import "./CreateOrEditPage.css";

//formik
import { useFormik } from "formik";
//yup for validation scheme

import { validationSchema } from "../../util/validationSchema";
import { newRecord } from "../../data/newRecord";
import { stepHandler } from "../../util/stepHandler";

import MainForm from "../../components/Steps/MainForm";

import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import {
  checkID,
  update,
  create,
  getDataOrNavigate,
} from "./CreateOrEditPageFunctions";

const CreateOrEditPage = (props) => {
  let params = useParams();
  const dispatch = useDispatch();
  const addresses = useSelector((state) => state.addresses.value);
  let navigate = useNavigate();

  const maxStep = 4;
  const [stepCount, setStepCount] = useState(1);
  const [data, setData] = useState(newRecord);

  useEffect(() => {
    if (checkID(params)) {
      setData(getDataOrNavigate(params.id, addresses, navigate, "/404"));
    }
  }, []);

  const { handleSubmit, handleChange, values, errors } = useFormik({
    enableReinitialize: true,
    initialValues: data,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (checkID(params)) {
        update(dispatch, params, values);
      } else {
        create(dispatch, addresses, values);
      }
      navigate("/home");
    },
  });

  return (
    <div className="create-or-edit__bg fadeIn">
      <div className="create-or-edit__div">
        <span className="create-or-edit__step__text"> {stepCount}</span>

        <MdCancel
          className="create-or-edit__cancel__btn"
          size={50}
          onClick={() => {
            navigate("/home");
          }}
        />

        <div className="create-or-edit__step">
          <BsCaretLeftFill
            className="create-or-edit__step__btn"
            onClick={() => stepHandler(-1, maxStep, stepCount, setStepCount)}
            color="#4b45a0"
          />

          <MainForm
            handleChange={handleChange}
            values={values}
            errors={errors}
            step={stepCount}
          />

          <BsCaretRightFill
            className="create-or-edit__step__btn"
            onClick={() => stepHandler(1, maxStep, stepCount, setStepCount)}
            color="#4b45a0"
          />
        </div>
        <div className="create-or-edit__btn__wrapper">
          <Button
            onClick={handleSubmit}
            className={"create-or-edit__btn"}
            text="Save"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateOrEditPage;
