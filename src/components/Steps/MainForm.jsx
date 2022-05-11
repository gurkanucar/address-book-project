import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const MainForm = (props) => {
  const { handleChange, values, errors, step } = props;
  return (
    <div>
      <form>
        {step == 1 ? (
          <Step1 handleChange={handleChange} values={values} errors={errors} />
        ) : null}

        {step == 2 ? (
          <Step2 handleChange={handleChange} values={values} errors={errors} />
        ) : null}

        {step == 3 ? (
          <Step3 handleChange={handleChange} values={values} errors={errors} />
        ) : null}

        {step == 4 ? (
          <Step4 handleChange={handleChange} values={values} errors={errors} />
        ) : null}
      </form>
    </div>
  );
};

export default MainForm;
