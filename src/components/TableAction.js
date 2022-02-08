import React from "react";

const TableAction = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="btn btn-primary"
      data-id={props.id}
    >
      Details
    </button>
  );
};

export default TableAction;
