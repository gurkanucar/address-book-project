import React, { useEffect, useState } from "react";
import { _calculateAge } from "../../util/ageCalculator";
import { randomNumber } from "../../util/randomGenerator";
import CardDetail from "../CardDetail/CardDetail";
import Summary from "../Summary/Summary";

import "./ListItem.css";

import ItemActions from "../ItemActions/ItemActions";
import ShowMoreComponent from "../ShowMoreComponent/ShowMoreComponent";

const ListItem = (props) => {
  const { item, setIsAlertModalOpen, setId } = props;

  const [expand, setExpand] = useState(false);

  const { id } = item;

  return (
    <div className="list-item__root fadeIn">
      <ItemActions
        id={id}
        setIsAlertModalOpen={setIsAlertModalOpen}
        setId={setId}
      />
      <Summary data={item} />
      <CardDetail data={item} expand={expand} />

      <ShowMoreComponent setExpand={setExpand} expand={expand} />
    </div>
  );
};

export default ListItem;
