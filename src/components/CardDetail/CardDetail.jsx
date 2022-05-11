import React from "react";
import AddressComponent from "../AddressComponent/AddressComponent";
import BirthComponent from "../BirthComponent/BirthComponent";
import PhoneNumbers from "../PhoneNumbers/PhoneNumbers";
import SocialMedia from "../SocialMedia/SocialMedia";
import "./CardDetail.css";

const CardDetail = (props) => {
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
