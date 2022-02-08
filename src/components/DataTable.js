import React, { useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const studentsData = [
  {
    id: 1,
    firstName: "Basel",
    lastName: "Askar",
    birthDate: new Date("1991-09-03"),
  },
  {
    id: 2,
    firstName: "Karmand",
    lastName: "Aziz",
    birthDate: new Date("1994-03-15"),
  },
  {
    id: 3,
    firstName: "Haris",
    lastName: "Gusinac",
    birthDate: new Date("1989-04-17"),
  },
];

const DataTable = () => {
  const [studentsList, setStudentsList] = useState([]);

  const getStudentHandler = (studentId) => {
    const student = studentsList.filter((s) => s.id === studentId);
    return student[0];
  };

  useEffect(() => {
    setStudentsList(studentsData);
  }, []);

  return (
    <table className="table">
      <TableHeader
        headers={["Id", "First Name", "Last Name", "Age", "Action"]}
      />
      <TableRow students={studentsData} onGetStudent={getStudentHandler} />
    </table>
  );
};

export default DataTable;
