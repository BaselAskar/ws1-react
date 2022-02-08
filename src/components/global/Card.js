import React from "react";

const Card = (props) => {
  return (
    <div className={`container rounded-3 shadow ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;
