import React from "react";
import { countries } from "../../data/Countries";
import Input from "../Input/Input";
import SelectComponent from "../SelectComponent/SelectComponent";

const Step2 = (props) => {
  const { handleChange, values, errors } = props;

  return (
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
  );
};

export default Step2;
