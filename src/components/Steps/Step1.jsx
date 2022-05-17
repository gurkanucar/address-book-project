import React from "react";
import Input from "../Input/Input";
import SelectComponent from "../SelectComponent/SelectComponent";

const Step1 = (props) => {
  const { handleChange, values, errors } = props;

  return (
    <div className="create-or-edit__form fadeIn">
      <Input
        type="text"
        name="first_name"
        onChange={handleChange}
        value={values.first_name}
        defaultValue={values.first_name}
        placeholder="Name.."
        error={errors.first_name}
        labelName="First Name"
      />

      <Input
        type="text"
        name="last_name"
        onChange={handleChange}
        value={values.last_name}
        defaultValue={values.last_name}
        placeholder="Last Name.."
        error={errors.last_name}
        labelName="Last Name"
      />

      <Input
        type="text"
        name="email"
        onChange={handleChange}
        value={values.email}
        placeholder="Email.."
        defaultValue={values.email}
        error={errors.email}
        labelName="E-mail"
      />

      <SelectComponent
        type="text"
        name="gender"
        onChange={handleChange}
        defaultValue={values.gender}
        value={values.gender}
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
        value={values.job}
        placeholder="Job.."
        error={errors.job}
        labelName="Job"
      />

      <Input
        type="text"
        name="phone_number"
        onChange={handleChange}
        defaultValue={values.phone_number}
        value={values.phone_number}
        placeholder="phone.."
        error={errors.phone_number}
        labelName="Phone Number"
      />
    </div>
  );
};

export default Step1;
