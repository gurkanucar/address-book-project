import React from "react";
import { useNavigate } from "react-router-dom";
import { isTodayToMonthAndDay } from "../../util/dateConverter";
import "./UpComingBirthdays.css";
import { FaBirthdayCake } from "react-icons/fa";

const BirthDayItem = (props) => {
  const navigate = useNavigate();
  const { data } = props;

  return (
    <div
      className="birthday-item"
      style={{
        backgroundColor:
          isTodayToMonthAndDay(data.birth_date) === true
            ? "#8133ff"
            : "#b385ff",
      }}
      onClick={() => navigate("/addresses/details/" + data.id)}
    >
      <span>{`${
        isTodayToMonthAndDay(data.birth_date) === true ? "┌iii┐" : ""
      } ${data.first_name} ${data.last_name}`}</span>
      <span>{new Date(data.birth_date).toLocaleDateString()}</span>
    </div>
  );
};

export default BirthDayItem;
