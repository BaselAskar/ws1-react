import React from "react";

const TableHeader = (props) => {
  return (
    <thead>
      <tr>
        {props.headers.map((header, index) => (
          <td key={index} scope="col">
            {header}
          </td>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
