import React from "react";
import { useNavigate } from "react-router-dom";
import "./UpComingBirthdays.css";
const BirthDayItem = (props) => {
  const navigate = useNavigate();
  const { data } = props;

  return (
    <div
      className="birthday-item"
      onClick={() => navigate("/addresses/details/" + data.id)}
    >
      <span>{`${data.first_name} ${data.last_name}`}</span>
      <span>{new Date(data.birth_date).toLocaleDateString()}</span>
    </div>
  );
};

export default BirthDayItem;
