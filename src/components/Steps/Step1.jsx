import React from "react";
import Input from "../Input/Input";
import SelectComponent from "../SelectComponent/SelectComponent";

const Step1 = (props) => {
  const { handleChange, values, errors } = props;

  console.log(values);

  return (
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
  );
};

export default Step1;
