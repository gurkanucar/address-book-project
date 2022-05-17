import React from "react";
import "./DetailListComponent.css";

import DetailItem from "./DetailItem";
import DetailComponent from "./DetailComponent";

import {
  checkAddresses,
  checkBirth,
  checkPhoneNumbers,
  checkSocialMedias,
} from "../../util/checkDatas";

const DetailListComponent = (props) => {
  const { data } = props;

  return (
    <div className="detail-list-component__card__list">
      <DetailComponent>
        <DetailItem value={data?.first_name} text="First Name:" />
        <DetailItem value={data?.last_name} text="Last Name:" />
        <DetailItem value={data?.email} text="Email:" />
        <DetailItem value={data?.job} text="Job:" />
        <DetailItem value={data?.gender} text="Gender:" />
      </DetailComponent>

      {checkPhoneNumbers(data) && (
        <DetailComponent>
          <DetailItem value={data?.phone_number} text="Phone Number:" />
          <DetailItem
            value={data?.work_phone_number}
            text="Work Phone Number:"
          />
          <DetailItem
            value={data?.home_phone_number}
            text="Home Phone Number:"
          />
        </DetailComponent>
      )}

      {checkAddresses(data) && (
        <DetailComponent>
          <DetailItem value={data?.country} text="Country:" />
          <DetailItem value={data?.city} text="City:" />
          <DetailItem value={data?.home_address} text="Home Address:" />
          <DetailItem value={data?.work_address} text="Work Address:" />
        </DetailComponent>
      )}

      {checkSocialMedias(data) && (
        <DetailComponent>
          <DetailItem value={data?.facebook} text="Facebook:" />
          <DetailItem value={data?.instagram} text="Instagram:" />
          <DetailItem value={data?.twitter} text="Twitter:" />
          <DetailItem value={data?.linkedin} text="LinkedIn:" />
          <DetailItem value={data?.github} text="GitHub:" />
        </DetailComponent>
      )}

      {checkBirth(data) && (
        <DetailComponent>
          <DetailItem value={data?.category} text="Category:" />
          <DetailItem
            value={new Date(data?.created).toLocaleDateString()}
            text="Created:"
          />
          <DetailItem value={data?.nick_name} text="Nick Name:" />
          <DetailItem
            value={new Date(data?.birth_date).toLocaleDateString()}
            text="Birth Date:"
          />
          <DetailItem value={data?.place_of_birth} text="Place of Birth:" />
        </DetailComponent>
      )}
    </div>
  );
};

export default DetailListComponent;
