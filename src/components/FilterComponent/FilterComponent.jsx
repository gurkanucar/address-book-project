import React from "react";
import { categoryData } from "../../data/categoryData";
import { countryData } from "../../data/countryData";
import { genderData } from "../../data/genderData";

import SelectComponent from "../SelectComponent/SelectComponent";
import "./FilterComponent.css";
const FilterComponent = (props) => {
  const {
    expand,
    category,
    setCategory,
    country,
    setCountry,
    gender,
    setGender,
  } = props;

  const genderOptions = [{ value: "", text: "...not selected" }, ...genderData];
  const categoryOptions = [
    { value: "", text: "...not selected" },
    ...categoryData,
  ];
  const countryOptions = [
    { value: "", text: "...not selected" },
    ...countryData,
  ];

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
