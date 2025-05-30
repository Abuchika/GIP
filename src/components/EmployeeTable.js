import React from "react";

export default function EmployeeTable({ employees, onEdit, onView }) {
  return (
    <table border={1} cellPadding={5} style={{ marginTop: 20, width: "100%" }}>
      <thead>
        <tr>
          {/* Show only main fields on table */}
          <th>Name</th>
          <th>Suffix</th>
          <th>GIP ID</th>
          <th>Address</th>
          <th>Telephone Number</th>
          <th>Mobile Number</th>
          <th>Email Address</th>
          <th>Birth Place</th>
          <th>Birth Date</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Civil Status</th>
          <th>Valid ID Type</th>
          <th>Valid ID Number</th>
          <th>Valid ID Issued</th>
          <th>Place of Assignment</th>
          <th>Nature of Work</th>
          <th>LBP Account Number</th>
          <th>Employment Status</th>
          <th>LGU</th>
          <th>Date Hired</th>
          <th>Date Ended</th>
          <th>Work Days</th>
          <th>Days Absent</th>
          <th>Minutes Late</th>
          <th>Net Work Days</th>
          <th>Remarks</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.length === 0 && (
          <tr>
            <td colSpan={30} align="center">
              No employees added.
            </td>
          </tr>
        )}
        {employees.map((emp) => (
          <tr key={emp.gipId}>
            <td>{emp.name}</td>
            <td>{emp.gipId}</td>
            <td>{emp.address}</td>
            <td>{emp.telephoneNumber}</td>
            <td>{emp.mobileNumber}</td>
            <td>{emp.emailAddress}</td>
            <td>{emp.birthPlace}</td>
            <td>{emp.birthDate}</td>
            <td>{emp.age}</td>
            <td>{emp.gender}</td>
            <td>{emp.civilStatus}</td>
            <td>{emp.validIdType}</td>
            <td>{emp.validIdNumber}</td>
            <td>{emp.validIdIssued}</td>
            <td>{emp.placeOfAssignment}</td>
            <td>{emp.natureOfWork}</td>
            <td>{emp.lbpAccountNumber}</td>
            <td>{emp.employmentStatus}</td>
            <td>{emp.lgu}</td>
            <td>{emp.dateHired}</td>
            <td>{emp.dateEnded}</td>
            <td>{emp.workDays}</td>
            <td>{emp.daysAbsent}</td>
            <td>{emp.minutesLate}</td>
            <td>{emp.netWorkDays}</td>
            <td>{emp.remarks}</td>
            <td>
              <button onClick={() => onView(emp)}>View</button>{" "}
              <button onClick={() => onEdit(emp)}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
