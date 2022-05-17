import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { dateConverterFormatted } from "../../util/dateConverter";
import "./DetailPage.css";
import { FaUser, FaChevronCircleLeft } from "react-icons/fa";

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
          <div className="details-page__img">
            {data?.imageUrl !== "" ? (
              <img
                src={data?.imageUrl}
                style={{ height: 250, width: 250 }}
                className="summary__img"
              />
            ) : (
              <FaUser style={{ marginBottom: "40px" }} size={250} />
            )}
          </div>

          <div className="details-page__card__list">
            <div className="details-page__card">
              {data?.first_name && (
                <div className="details-page__item">
                  <span className="details-page__title">First Name:</span>
                  <span className="details-page__value">
                    {data?.first_name}
                  </span>
                </div>
              )}

              {data?.last_name && (
                <div className="details-page__item">
                  <span className="details-page__title">Last Name:</span>
                  <span className="details-page__value">{data?.last_name}</span>
                </div>
              )}

              {data?.email && (
                <div className="details-page__item">
                  <span className="details-page__title">Email:</span>
                  <span className="details-page__value">{data?.email}</span>
                </div>
              )}
              {data?.job && (
                <div className="details-page__item">
                  <span className="details-page__title">Job:</span>
                  <span className="details-page__value">{data?.job}</span>
                </div>
              )}
              {data?.gender && (
                <div className="details-page__item">
                  <span className="details-page__title">Gender:</span>
                  <span className="details-page__value">{data?.gender}</span>
                </div>
              )}
            </div>

            <div className="details-page__card">
              {data?.phone_number && (
                <div className="details-page__item">
                  <span className="details-page__title">Phone Number:</span>
                  <span className="details-page__value">
                    {data?.phone_number}
                  </span>
                </div>
              )}
              {data?.work_phone_number && (
                <div className="details-page__item">
                  <span className="details-page__title">
                    Work Phone Number:
                  </span>
                  <span className="details-page__value">
                    {data?.work_phone_number}
                  </span>
                </div>
              )}
              {data?.home_phone_number && (
                <div className="details-page__item">
                  <span className="details-page__title">
                    Home Phone Number:
                  </span>
                  <span className="details-page__value">
                    {data?.home_phone_number}
                  </span>
                </div>
              )}
            </div>

            <div className="details-page__card">
              {data?.country && (
                <div className="details-page__item">
                  <span className="details-page__title">Country:</span>
                  <span className="details-page__value">{data?.country}</span>
                </div>
              )}
              {data?.city && (
                <div className="details-page__item">
                  <span className="details-page__title">City:</span>
                  <span className="details-page__value">{data?.city}</span>
                </div>
              )}
              {data?.home_address && (
                <div className="details-page__item">
                  <span className="details-page__title">Home Address:</span>
                  <span className="details-page__value">
                    {data?.home_address}
                  </span>
                </div>
              )}
              {data?.work_address && (
                <div className="details-page__item">
                  <span className="details-page__title">Work Address:</span>
                  <span className="details-page__value">
                    {data?.work_address}
                  </span>
                </div>
              )}
            </div>

            <div className="details-page__card">
              {data?.facebook && (
                <div className="details-page__item">
                  <span className="details-page__title">Facebook:</span>
                  <span className="details-page__value">{data?.facebook}</span>
                </div>
              )}
              {data?.instagram && (
                <div className="details-page__item">
                  <span className="details-page__title">Instagram:</span>
                  <span className="details-page__value">{data?.instagram}</span>
                </div>
              )}
              {data?.twitter && (
                <div className="details-page__item">
                  <span className="details-page__title">Twitter:</span>
                  <span className="details-page__value">{data?.twitter}</span>
                </div>
              )}
              {data?.linkedin && (
                <div className="details-page__item">
                  <span className="details-page__title">LinkedIn:</span>
                  <span className="details-page__value">{data?.linkedin}</span>
                </div>
              )}
              {data?.github && (
                <div className="details-page__item">
                  <span className="details-page__title">GitHub:</span>
                  <span className="details-page__value">{data?.github}</span>
                </div>
              )}
            </div>

            <div className="details-page__card">
              {data?.category && (
                <div className="details-page__item">
                  <span className="details-page__title">Category:</span>
                  <span className="details-page__value">{data?.category}</span>
                </div>
              )}
              {data?.created && (
                <div className="details-page__item">
                  <span className="details-page__title">Created:</span>
                  <span className="details-page__value">
                    {dateConverterFormatted(data?.created)}
                  </span>
                </div>
              )}
              {data?.nick_name && (
                <div className="details-page__item">
                  <span className="details-page__title">Nick Name:</span>
                  <span className="details-page__value">{data?.nick_name}</span>
                </div>
              )}
              {data?.birth_date && (
                <div className="details-page__item">
                  <span className="details-page__title">Birth Date:</span>
                  <span className="details-page__value">
                    {dateConverterFormatted(data?.birth_date)}
                  </span>
                </div>
              )}
              {data?.place_of_birth && (
                <div className="details-page__item">
                  <span className="details-page__title">Place of Birth:</span>
                  <span className="details-page__value">
                    {data?.place_of_birth}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
