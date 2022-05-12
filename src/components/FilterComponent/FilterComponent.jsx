import React from "react";
import { countries } from "../../data/Countries";
import SelectComponent from "../SelectComponent/SelectComponent";
import "./FilterComponent.css";
const FilterComponent = (props) => {
  const {
    expand,
    searchedText,
    setSearchedText,
    category,
    setCategory,
    country,
    setCountry,
    gender,
    setGender,
  } = props;

  const genderOptions = [
    { value: "", text: "" },
    { value: "male", text: "male" },
    { value: "female", text: "female" },
  ];
  const categoryOptions = [
    { value: "", text: "" },
    { value: "family", text: "family" },
    { value: "friend", text: "friend" },
    { value: "job", text: "job" },
    { value: "sport", text: "sport" },
    { value: "school", text: "school" },
    { value: "other", text: "other" },
  ];

  const countryOptions = [{ value: "", text: "" }, ...countries];

  return (
    expand && (
      <div className="filter-component__div">
        <SelectComponent
          type="text"
          name="country"
          onChange={(e) => setCountry(e.target.value)}
          value={country}
          labelName="Country"
          options={countryOptions}
        />

        <SelectComponent
          type="text"
          name="gender"
          onChange={(e) => setGender(e.target.value.toLowerCase())}
          value={gender}
          labelName="Gender"
          options={genderOptions}
        />

        <SelectComponent
          type="text"
          name="category"
          onChange={(e) => setCategory(e.target.value.toLowerCase())}
          value={category}
          labelName="Category"
          options={categoryOptions}
        />
      </div>
    )
  );
};

export default FilterComponent;
