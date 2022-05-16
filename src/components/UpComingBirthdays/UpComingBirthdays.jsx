import React from "react";
import { sortBirthdays } from "../../util/sortBirthdays";
import BirthDayItem from "./BirthDayItem";

import { AiFillCloseCircle } from "react-icons/ai";

import "./UpComingBirthdays.css";
const UpComingBirthdays = (props) => {
  const { data } = props;
  return props.upComingBirthDaysShow === true ? (
    <div className="upcoming-birthday-div">
      <div className="upcoming-birthday-title">
        <h2>Upcoming Birthdays</h2>
        <AiFillCloseCircle
          size={35}
          style={{ cursor: "pointer" }}
          onClick={props.onClick}
          color="#fd2d26"
        />
      </div>
      <div className="birthday-list">
        {sortBirthdays(data)?.map((x, index) => {
          return <BirthDayItem data={x} key={index} />;
        })}
      </div>
    </div>
  ) : null;
};

export default UpComingBirthdays;
