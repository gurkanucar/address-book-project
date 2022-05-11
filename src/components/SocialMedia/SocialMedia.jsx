import React from "react";
import "./SocialMedia.css";
import { FaShareAlt } from "react-icons/fa";
const SocialMedia = (props) => {
  const { instagram, facebook, linkedin, twitter, github } = props.data;

  return (
    <div className="card-details__item">
      {/* <hr className="hr"></hr> */}

      <div className="card-details__title">
        <FaShareAlt />
        <span className="social-media__title">Social Media</span>
      </div>

      {facebook && (
        <h3 className="social-media__label">
          <strong>Facebook:</strong> {facebook}
        </h3>
      )}
      {instagram && (
        <h3 className="social-media__label">
          <strong>Instagram:</strong> {instagram}
        </h3>
      )}
      {twitter && (
        <h3 className="social-media__label">
          <strong>Twitter:</strong> {twitter}
        </h3>
      )}
      {linkedin && (
        <h3 className="social-media__label">
          <strong>LinkedIn:</strong> {linkedin}
        </h3>
      )}
      {github && (
        <h3 className="social-media__label">
          <strong>GitHub:</strong> {github}
        </h3>
      )}
    </div>
  );
};

export default SocialMedia;
