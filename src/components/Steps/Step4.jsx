import React from "react";
import Input from "../Input/Input";

const Step4 = (props) => {
  const { handleChange, values, errors } = props;

  return (
    <div className="create-or-edit__form fadeIn">
      <Input
        type="text"
        name="facebook"
        onChange={handleChange}
        defaultValue={values.facebook}
        value={values.facebook}
        placeholder="facebook.."
        error={errors.facebook}
        labelName="Facebook"
      />

      <Input
        type="text"
        name="instagram"
        onChange={handleChange}
        defaultValue={values.instagram}
        value={values.instagram}
        placeholder="instagram.."
        error={errors.instagram}
        labelName="Instagram"
      />

      <Input
        type="text"
        name="twitter"
        onChange={handleChange}
        defaultValue={values.twitter}
        value={values.twitter}
        placeholder="twitter.."
        error={errors.twitter}
        labelName="Twitter"
      />

      <Input
        type="text"
        name="linkedin"
        onChange={handleChange}
        defaultValue={values.linkedin}
        value={values.linkedin}
        placeholder="linkedin.."
        error={errors.linkedin}
        labelName="LinkedIn"
      />

      <Input
        type="text"
        name="github"
        onChange={handleChange}
        defaultValue={values.github}
        value={values.github}
        placeholder="github.."
        error={errors.github}
        labelName="GitHub"
      />
    </div>
  );
};

export default Step4;
