import React from "react";
import List from "../../components/List/List";
// import { data } from "../../data/data";

import "./HomePage.css";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FabButton from "../../components/FabButton/FabButton";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import { searchFilter, searchFilterRestrict } from "../../util/filterData";
import UpComingBirthdays from "../../components/UpComingBirthdays/UpComingBirthdays";

const HomePage = () => {
  const dispatch = useDispatch();
  const addressList = useSelector((state) => state.addresses.value);
  const [searchedText, setSearchedText] = useState("");
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [upComingBirthDaysShow, setUpComingBirthDaysShow] = useState(true);

  const [restricted, setRestricted] = useState(false);

  return (
    <div className="home-page-bg">
      <div
        className="fadeIn "
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingTop:"40px"
        }}
      >
        <UpComingBirthdays
          onClick={() => setUpComingBirthDaysShow(false)}
          upComingBirthDaysShow={upComingBirthDaysShow}
          data={addressList}
        />
        <SearchComponent
          searchData={{
            searchedText,
            setSearchedText,
            country,
            setCountry,
            category,
            setCategory,
            gender,
            setGender,
            setRestricted,
          }}
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
    </div>
  );
};

export default HomePage;
