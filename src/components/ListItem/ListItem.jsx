import React, { useEffect, useState } from "react";
import { _calculateAge } from "../../util/ageCalculator";
import { randomNumber } from "../../util/randomGenerator";
import CardDetail from "../CardDetail/CardDetail";
import Summary from "../Summary/Summary";

import "./ListItem.css";
import {
  MdEdit,
  MdDelete,
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
} from "react-icons/md";

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
      <div className="list-item__actions">
        <MdEdit size={25} />
        <MdDelete size={25} color={"#f2493d"} />
      </div>
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
        {expand == true ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </h1>
    </div>
  );
};

export default ListItem;
