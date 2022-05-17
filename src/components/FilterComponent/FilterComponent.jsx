import React from "react";
import { countries } from "../../data/countries";
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
    { value: "", text: "...not selected" },
    { value: "male", text: "male" },
    { value: "female", text: "female" },
  ];
  const categoryOptions = [
    { value: "", text: "...not selected" },
    { value: "family", text: "family" },
    { value: "friend", text: "friend" },
    { value: "job", text: "job" },
    { value: "sport", text: "sport" },
    { value: "school", text: "school" },
    { value: "other", text: "other" },
  ];

  const countryOptions = [{ value: "", text: "...not selected" }, ...countries];

  return (
    expand && (
      <div className="filter-component__div">
        <SelectComponent
          className="filter-component__item"
          type="text"
          name="country"
          onChange={(e) => setCountry(e.target.value)}
          value={country}
          labelName="Country"
          options={countryOptions}
        />

        <SelectComponent
          className="filter-component__item"
          type="text"
          name="gender"
          onChange={(e) => setGender(e.target.value.toLowerCase())}
          value={gender}
          labelName="Gender"
          options={genderOptions}
        />

        <SelectComponent
          className="filter-component__item"
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
