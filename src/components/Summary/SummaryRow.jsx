import React from "react";

const SummaryRow = (props) => {
  const { text } = props;
  return (
    <div className="summary__row">
      {props.children} <span className="summary__row__text">{text}</span>
    </div>
  );
};

export default SummaryRow;
