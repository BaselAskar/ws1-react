import React, { useState } from "react";
import reactDom from "react-dom";

import TableAction from "./TableAction.js";
import StudentDetails from "./StudentDetails.js";

import dateServices from "../services/DateServices.js";

const TableRow = (props) => {
  const [student, setStudent] = useState({});
  const [isShowStudent, setIsShowStudent] = useState(false);

  const showStudentDetailsHandler = (studentId) => {
    const student = props.onGetStudent(studentId);
    setStudent(student);
    setIsShowStudent(true);
  };

  const onShowStudentHandlar = (event) => {
    const id = +event.target.dataset.id;
    showStudentDetailsHandler(id);
  };

  const onHideDetailsHandlar = () => {
    setIsShowStudent(false);
  };

  const content = props.students.map((student) => (
    <tr key={student.id}>
      <td>{student.id}</td>
      <td>{student.firstName}</td>
      <td>{student.lastName}</td>
      <td>{dateServices.getAge(student.birthDate)}</td>
      <td>
        <TableAction id={student.id} onClick={onShowStudentHandlar} />
      </td>
    </tr>
  ));

  return (
    <React.Fragment>
      {isShowStudent &&
        reactDom.createPortal(
          <StudentDetails
            studentDetails={student}
            onHideDetails={onHideDetailsHandlar}
          />,
          document.getElementById("user-details")
        )}
      <tbody>{content}</tbody>
    </React.Fragment>
  );
};

export default TableRow;
