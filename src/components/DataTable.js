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

  useEffect(() => {
    setStudentsList(studentsData);
  }, []);

  return (
    <table className="table">
      <TableHeader
        headers={["Id", "First Name", "Last Name", "Age", "Action"]}
      />
      <TableRow students={studentsList} />
    </table>
  );
};

export default DataTable;
