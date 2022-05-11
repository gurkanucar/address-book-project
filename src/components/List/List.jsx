import React from "react";
import ListItem from "../ListItem/ListItem";
import "./List.css";

const List = (props) => {
  const { datas } = props;
  console.log(datas);
  return (
    <div className="list__root">
      {datas.map((item, index) => {
        return <ListItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default List;
