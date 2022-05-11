import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  let navigate = useNavigate();

  return (
    <div className="wrapper">
      <div class="number">404</div>
      <div class="text">
        <span>Ooops...</span>
        <br />
        Address not found !
        <br />
        <h3 onClick={() => navigate("/")} className="redirect-home">
          home
        </h3>
      </div>
      <a
        class="me"
        href="https://codepen.io/uzcho_/pens/popular/?grid_type=list"
        target="_blank"
      ></a>
    </div>
  );
};

export default NotFoundPage;
