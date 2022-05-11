import React from "react";
import List from "../../components/List/List";
// import { data } from "../../data/data";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FabButton from "../../components/FabButton/FabButton";

const HomePage = () => {
  const dispatch = useDispatch();
  const addressList = useSelector((state) => state.addresses.value);

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
      <List datas={addressList} />
      <FabButton />
    </div>
  );
};

export default HomePage;
