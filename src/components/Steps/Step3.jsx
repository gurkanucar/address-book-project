import React from "react";
import Input from "../Input/Input";

const Step3 = (props) => {
  const { handleChange, values, errors } = props;

  return (
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
        type="date"
        name="birth_date"
        onChange={handleChange}
        defaultValue={values.birth_date}
        values={values.birth_date}
        placeholder="birth_date.."
        error={errors.birth_date}
        labelName="Birth Date"
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
  );
};

export default Step3;
