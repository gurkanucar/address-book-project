import React from "react";
import AddressComponent from "../AddressComponent/AddressComponent";
import BirthComponent from "../BirthComponent/BirthComponent";
import PhoneNumbers from "../PhoneNumbers/PhoneNumbers";
import SocialMedia from "../SocialMedia/SocialMedia";
import "./CardDetail.css";

const CardDetail = (props) => {
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
  } = props.data;

  return (
    <div className="card-detail__root">
      {/* <hr className="hr"></hr> */}
      <PhoneNumbers data={props.data} />
      <SocialMedia data={props.data} />
      <AddressComponent data={props.data} />
      <BirthComponent data={props.data} />
    </div>
  );
};

export default CardDetail;
