import React from "react";
import List from "../../components/List/List";
import { data } from "../../data/data";

const HomePage = () => {
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
      <List datas={data} />
    </div>
  );
};

export default HomePage;
