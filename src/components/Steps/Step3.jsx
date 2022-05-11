import React, { useEffect } from "react";
import { dateConverter } from "../../util/dateConverter";
import Input from "../Input/Input";
import { FaUser } from "react-icons/fa";
const Step3 = (props) => {
  const { handleChange, values, errors } = props;

  return (
    <div className="create-or-edit__form__col">
      {values.imageUrl !== "" ? (
        <img
          src={values.imageUrl}
          style={{ marginBottom: "40px" }}
          className="summary__img"
        />
      ) : (
        <FaUser size={180} />
      )}
      <div className="create-or-edit__form">
        <Input
          type="text"
          name="imageUrl"
          onChange={handleChange}
          defaultValue={values.imageUrl}
          value={values.imageUrl}
          placeholder="imageUrl.."
          error={errors.imageUrl}
          labelName="Image Url"
        />
        <Input
          type="text"
          name="family_intimacy"
          onChange={handleChange}
          defaultValue={values.family_intimacy}
          value={values.family_intimacy}
          placeholder="family_intimacy.."
          error={errors.family_intimacy}
          labelName="Family Intimacy"
        />

        <Input
          type="text"
          name="category"
          onChange={handleChange}
          defaultValue={values.category}
          value={values.category}
          placeholder="category.."
          error={errors.category}
          labelName="Category"
        />

        <Input
          type="text"
          name="place_of_birth"
          onChange={handleChange}
          defaultValue={values.place_of_birth}
          value={values.place_of_birth}
          placeholder="place_of_birth.."
          error={errors.place_of_birth}
          labelName="Place Of Birth"
        />

        <Input
          type="date"
          name="birth_date"
          id="birth_date"
          defaultValue={dateConverter(
            values.birth_date ? values.birth_date : new Date().toString()
          )}
          onChange={handleChange}
          value={dateConverter(
            values.birth_date ? values.birth_date : new Date().toString()
          )}
          placeholder="birth_date.."
          error={errors.birth_date}
          labelName="Birth Date"
        />
      </div>
    </div>
  );
};

export default Step3;
