import React from "react";
import { useNavigate } from "react-router-dom";
import { isTodayMonthDay } from "../../util/dateConverter";
import "./UpComingBirthdays.css";
const BirthDayItem = (props) => {
  const navigate = useNavigate();
  const { data } = props;

  return (
    <div
      className="birthday-item"
      style={{
        backgroundColor:
          isTodayMonthDay(data.birth_date) === true ? "#8133ff" : "#b385ff",
      }}
      onClick={() => navigate("/addresses/details/" + data.id)}
    >
      <span>{`${data.first_name} ${data.last_name}`}</span>
      <span>{new Date(data.birth_date).toLocaleDateString()}</span>
    </div>
  );
};

export default BirthDayItem;
