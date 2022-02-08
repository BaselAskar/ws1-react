import React from "react";

import Card from "./global/Card";

import classes from "./StudentDetails.module.css";

const StudentDetails = (props) => {
  let { id, firstName, lastName, birthDate } = props.studentDetails;

  birthDate = new Intl.DateTimeFormat("sv", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(birthDate);

  return (
    <React.Fragment>
      <div className={classes.background}></div>
      <Card className={classes.student_card}>
        <h1 className="p-2">Student Details</h1>
        <div className="p-2">
          <h2>Sweden Växjö</h2>
          <div className="my-2">
            <strong>Id: </strong>
            {id}
          </div>
          <div className="my-2">
            <strong>Name:</strong>
            {firstName} {lastName}
          </div>
          <div className="my-2">
            <strong>BirthDate:</strong>
            {birthDate}
          </div>
        </div>
        <div className="my-2">
          <button
            onClick={props.onHideDetails}
            type="button"
            className="btn btn-outline-success m-2"
          >
            Hidden
          </button>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default StudentDetails;
