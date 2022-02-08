import React from "react";

const TableHeader = (props) => {
  return (
    <thead>
      <tr>
        {props.headers.map((header) => (
          <td>{header}</td>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
