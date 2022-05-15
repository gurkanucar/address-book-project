import React, { useEffect, useState } from "react";
import "./SearchComponent.css";
import { countries } from "../../data/Countries";
import ShowMoreComponent from "../ShowMoreComponent/ShowMoreComponent";
import FilterComponent from "../FilterComponent/FilterComponent";
import Input from "../Input/Input";
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
    setRestricted,
  } = props.searchData;

  const [expand, setExpand] = useState(false);

  useEffect(() => {
    setRestricted(!expand);
  }, [expand]);

  return (
    <div className="search-component__div">
      <Input
        className="search-component__input"
        type="text"
        name="search"
        value={searchedText}
        onChange={(e) => setSearchedText(e.target.value.toLowerCase())}
        placeholder="search something.."
        labelName="Search"
        hideError={true}
      />

      <FilterComponent
        expand={expand}
        searchedText={searchedText}
        setSearchedText={setSearchedText}
        country={country}
        setCountry={setCountry}
        category={category}
        setCategory={setCategory}
        gender={gender}
        setGender={setGender}
      />

      <ShowMoreComponent
        className="search-component__show__more"
        setExpand={setExpand}
        expand={expand}
      />
    </div>
  );
};

export default SearchComponent;
