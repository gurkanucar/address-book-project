import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import "./DetailPage.css";
import { FaChevronCircleLeft } from "react-icons/fa";

import DetailListComponent from "../../components/DetailListComponent/DetailListComponent";
import UserImageComponent from "../../components/ImageComponent/UserImageComponent";

const DetailPage = (props) => {
  let params = useParams();
  let navigate = useNavigate();

  const addresses = useSelector((state) => state.addresses.value);

  const [data, setData] = useState();

  const checkID = () => {
    return params.id !== null && params.id !== undefined;
  };

  //find data if exists
  useEffect(() => {
    if (checkID()) {
      const id = Number(params.id);
      const item = addresses.find((x) => x.id === id);
      if (item === undefined) {
        navigate("/404");
      } else {
        setData(item);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="details-bg">
      <div className="details-page__wrapper fadeIn">
        <div
          onClick={() => {
            navigate("/home");
          }}
        >
          <FaChevronCircleLeft className="details-page__back" size={40} />
        </div>

        <div className="details-page__root">
          <UserImageComponent
            className="details-page__img"
            color="b15fd6"
            img={data?.imageUrl}
          />
          <DetailListComponent data={data} />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
