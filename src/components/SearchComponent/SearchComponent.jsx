import React, { useEffect, useState } from "react";
import "./SearchComponent.css";
import Input from "../Input/Input";
import { countries } from "../../data/Countries";
import ShowMoreComponent from "../ShowMoreComponent/ShowMoreComponent";
const SearchComponent = (props) => {
  const {
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

  const [expand, setExpand] = useState(false);

  return (
    <div className="search-component__div">
      <input
        className="input-component__input"
        value={searchedText}
        onChange={(e) => setSearchedText(e.target.value.toLowerCase())}
        placeholder="words.."
      />

      <select
        onChange={(e) => setCountry(e.target.value.toLowerCase())}
        value={country}
        className="input-component__input"
      >
        {countries.map((x, index) => {
          return (
            <option key={index} value={x.value}>
              {x.text}
            </option>
          );
        })}
      </select>

      <select
        onChange={(e) => setGender(e.target.value.toLowerCase())}
        value={gender}
        className="input-component__input"
      >
        {genderOptions.map((x, index) => {
          return (
            <option key={index} value={x.value}>
              {x.text}
            </option>
          );
        })}
      </select>

      <select
        onChange={(e) => setCategory(e.target.value.toLowerCase())}
        value={category}
        className="input-component__input"
      >
        {categoryOptions.map((x, index) => {
          return (
            <option key={index} value={x.value}>
              {x.text}
            </option>
          );
        })}
      </select>

      <ShowMoreComponent setExpand={setExpand} expand={expand} />
    </div>
  );
};

export default SearchComponent;
