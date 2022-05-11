import React, { useEffect, useState } from "react";
import "./CreateOrEditPage.css";

import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./CreateOrEditPage.css";

//formik
import { useFormik } from "formik";
//yup for validation scheme
import * as Yup from "yup";

import { validationSchema } from "../../util/validationSchema";
import { newRecord } from "../../data/newRecord";
import { stepHandler } from "../../util/stepHandler";

import { addRecord, updateRecord } from "../../store/addresses";
import { generateId } from "../../util/generateId";
import MainForm from "../../components/Steps/MainForm";

import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";

const CreateOrEditPage = (props) => {
  let params = useParams();
  const dispatch = useDispatch();
  const addresses = useSelector((state) => state.addresses.value);

  let navigate = useNavigate();

  const max = 4;
  const [step, setStep] = useState(1);
  const [data, setData] = useState(newRecord);

  const checkID = () => {
    return params.id !== null && params.id !== undefined;
  };

  //find data if exists
  useEffect(() => {
    if (checkID()) {
      const id = Number(params.id);
      const item = addresses.find((x) => x.id === id);
      if (item === undefined) {
        navigate("/404");
      } else {
        setData(item);
      }
    }
  }, []);

  const { handleSubmit, handleChange, values, errors } = useFormik({
    enableReinitialize: true,
    initialValues: data,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      if (checkID()) {
        dispatch(updateRecord({ id: Number(params.id), values: values }));
      } else {
        dispatch(
          addRecord({
            id: generateId(addresses),
            ...values,
          })
        );
      }
      navigate("/");
    },
  });

  return (
    <div className="create-or-edit__div">
      {/* <span>
        CreateOrEditPage {props.isNew == true ? "NEW" : "EDIT " + params.id}
      </span> */}
      <span className="create-or-edit__step__text"> {step}</span>

      <MdCancel
        className="create-or-edit__cancel__btn"
        size={50}
        onClick={() => {
          navigate("/");
        }}
        color="#f02b2b"
      />

      <div className="create-or-edit__step">
        <BsCaretLeftFill
          size={80}
          className="create-or-edit__step__btn"
          onClick={() => stepHandler(-1, max, step, setStep)}
          color="#4b45a0"
        />

        <MainForm
          handleChange={handleChange}
          values={values}
          errors={errors}
          step={step}
        />

        <BsCaretRightFill
          size={80}
          className="create-or-edit__step__btn"
          onClick={() => stepHandler(1, max, step, setStep)}
          color="#4b45a0"
        />
      </div>

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
