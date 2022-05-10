import React, { useState } from "react";
import { _calculateAge } from "../../util/ageCalculator";
import CardDetail from "../CardDetail/CardDetail";
import Summary from "../Summary/Summary";

import "./ListItem.css";

const ListItem = (props) => {
  const { item } = props;

  const [expand, setExpand] = useState(false);

  const {
    id,
    first_name,
    last_name,
    email,
    gender,
    job,
    phone_number,
    work_phone_number,
    home_phone_number,
    country,
    city,
    home_address,
    work_address,
    facebook,
    instagram,
    twitter,
    linkedin,
    github,
    family_intimacy,
    category,
    created,
    color,
    birth_date,
    imageUrl,
    place_of_birth,
  } = item;

  return (
    <div className="list-item__root">
      <Summary data={item} />
      {expand == true ? (
        <div>
          <hr className="hr"></hr>
          <CardDetail data={item} />
        </div>
      ) : null}

      <h1
        className="list-item__show__more"
        onClick={() => {
          setExpand(!expand);
        }}
      >
        {expand == true ? "▲" : "…"}
      </h1>
    </div>
  );
};

export default ListItem;
