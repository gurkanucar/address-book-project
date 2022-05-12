import React from "react";
import List from "../../components/List/List";
// import { data } from "../../data/data";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FabButton from "../../components/FabButton/FabButton";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import { searchFilter, searchFilterRestrict } from "../../util/filterData";

const HomePage = () => {
  const dispatch = useDispatch();
  const addressList = useSelector((state) => state.addresses.value);
  const [searchedText, setSearchedText] = useState("");
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");

  const [restricted, setRestricted] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Address Book</h1>
      <SearchComponent
        searchedText={searchedText}
        setSearchedText={setSearchedText}
        country={country}
        setCountry={setCountry}
        category={category}
        setCategory={setCategory}
        gender={gender}
        setGender={setGender}
        setRestricted={setRestricted}
      />
      <List
        datas={
          restricted == true
            ? searchFilter(addressList, searchedText)
            : searchFilterRestrict(
                addressList,
                searchedText,
                category,
                country,
                gender
              )
        }
      />
      <FabButton />
    </div>
  );
};

export default HomePage;
