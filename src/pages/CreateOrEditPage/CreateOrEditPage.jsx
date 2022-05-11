import React from "react";
import "./CreateOrEditPage.css";

import { useParams } from "react-router-dom";

const CreateOrEditPage = (props) => {
  let params = useParams();

  return (
    <div>
      CreateOrEditPage {props.isNew == true ? "NEW" : "EDIT " + params.id}
    </div>
  );
};

export default CreateOrEditPage;
