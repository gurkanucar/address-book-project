import React from "react";
import "./SocialMedia.css";
const SocialMedia = (props) => {
  const { instagram, facebook, linkedin, twitter, github } = props.data;

  return (
    <div className="social-media__item">
      {/* <hr className="hr"></hr> */}

      {(instagram || facebook || linkedin || twitter || github) && (
        <span className="social-media__title">Social Media</span>
      )}

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
