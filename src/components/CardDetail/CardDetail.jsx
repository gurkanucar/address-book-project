import React from "react";
import {
  checkAddresses,
  checkBirth,
  checkPhoneNumbers,
  checkSocialMedias,
} from "../../util/checkDatas";
import AddressComponent from "../AddressComponent/AddressComponent";
import BirthComponent from "../BirthComponent/BirthComponent";
import PhoneNumbers from "../PhoneNumbers/PhoneNumbers";
import SocialMedia from "../SocialMedia/SocialMedia";
import "./CardDetail.css";

const CardDetail = (props) => {
  const { data } = props;

  return (
    <div className="card-detail__root">
      {/* <hr className="hr"></hr> */}
      {checkPhoneNumbers(data) && <PhoneNumbers data={data} />}
      {checkSocialMedias(data) && <SocialMedia data={data} />}
      {checkAddresses(data) && <AddressComponent data={data} />}
      {checkBirth(data) && <BirthComponent data={data} />}
    </div>
  );
};

export default CardDetail;
