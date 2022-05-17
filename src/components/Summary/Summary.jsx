import React from "react";
import { _calculateAge } from "../../util/ageCalculator";
import "./Summary.css";
import { FaPhone } from "react-icons/fa";
import { MdMail, MdLocationPin } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import SummaryRow from "./SummaryRow";
import UserImageComponent from "../ImageComponent/UserImageComponent";

const Summary = (props) => {
  const {
    first_name,
    country,
    category,
    city,
    last_name,
    email,
    job,
    phone_number,
    birth_date,
    imageUrl,
  } = props.data;

  return (
    <div className="summary__root">
      <div className="summary__body">
        <div className="summary__col">
          <span className="summary__name">
            {`${first_name} ${last_name.toUpperCase()}`}
            <span className="summary__age">
              {` - ${_calculateAge(new Date(birth_date))}`}
            </span>
          </span>
          <span className="summary__job">{job}</span>
          <br />
          <SummaryRow text={phone_number}>
            <FaPhone color="dfafff" size={25} />
          </SummaryRow>
          <SummaryRow text={email}>
            <MdMail color="dfafff" size={25} />
          </SummaryRow>
          <SummaryRow text={category}>
            <BiCategory color="dfafff" size={25} />
          </SummaryRow>
          <SummaryRow text={`${city}, ${country.toUpperCase()}`}>
            <MdLocationPin color="dfafff" size={25} />
          </SummaryRow>
        </div>
        <UserImageComponent color="dfafff" img={imageUrl} />
      </div>
    </div>
  );
};

export default Summary;
