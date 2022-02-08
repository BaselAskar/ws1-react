import React from "react";

import TableAction from "./TableAction.js";

import dateServices from "../services/DateServices.js";

const TableRow = (props) => {
  const content = props.students.map((student) => {
    return (
      <tr key={Math.random()}>
        <td>{student.id}</td>
        <td>{student.firstName}</td>
        <td>{student.lastName}</td>
        <td>{dateServices.getAge(student.birthDate)}</td>
        <td>
          <TableAction id={student.id} />
        </td>
      </tr>
    );
  });

  return <tbody>{content}</tbody>;
};

export default TableRow;
