import React from "react";
import "./SocialMedia.css";
import { FaShareAlt } from "react-icons/fa";
import InfoElement from "../InfoElement/InfoElement";
const SocialMedia = (props) => {
  const { instagram, facebook, linkedin, twitter, github } = props.data;

  return (
    <div className="card-details__item">
      <div className="card-details__title">
        <FaShareAlt />
        <span className="social-media__title">Social Media</span>
      </div>
      <InfoElement value={facebook}>Facebook:</InfoElement>
      <InfoElement value={instagram}>Instagram:</InfoElement>
      <InfoElement value={twitter}>Twitter:</InfoElement>
      <InfoElement value={linkedin}>LinkedIn:</InfoElement>
      <InfoElement value={github}>GitHub:</InfoElement>
    </div>
  );
};

export default SocialMedia;
