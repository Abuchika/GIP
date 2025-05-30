import React, { useState } from "react";
import EmployeeTable from "./EmployeeTable";
import EmployeeForm from "./EmployeeForm";
import EmployeeViewModal from "./EmployeeViewModal";

const initialForm = {
  name: "",
  gipId: "",
  address: "",
  telephoneNumber: "",
  mobileNumber: "",
  emailAddress: "",
  birthPlace: "",
  birthDate: "",
  age: "",
  gender: "",
  civilStatus: "",
  validIdType: "",
  validIdNumber: "",
  validIdIssued: "",
  placeOfAssignment: "",
  natureOfWork: "",
  lbpAccountNumber: "",
  employmentStatus: "",
  lgu: "",
  dateHired: "",
  dateEnded: "",
  workDays: "",
  daysAbsent: "",
  minutesLate: "",
  netWorkDays: "",
  remarks: "",
  educationalAttainment: "",
  firstNameOfSchool: "",
  firstInclusiveDate: "",
  firstDegreeCourse: "",
  secondNameOfSchool: "",
  secondInclusiveDate: "",
  secondDegreeCourse: "",
  thirdNameOfSchool: "",
  thirdInclusiveDate: "",
  thirdDegreeCourse: "",
  companyName1: "",
  position1: "",
  engagementPeriod1: "",
  companyName2: "",
  position2: "",
  engagementPeriod2: "",
  companyName3: "",
  position3: "",
  engagementPeriod3: "",
  pwd: false,
  ip: false,
  victimOfArmedConflict: false,
  rebelReturnee: false,
  fourP: false,
  others: "",
  emergencyContactName: "",
  emergencyContactDetails: "",
  emergencyContactAddress: "",
  beneficiaryName: "",
  beneficiaryRelationship: "",
  birthCertificate: "",
  transcriptOfRecords: "",
  diploma: "",
  form137or138: "",
  applicationLetter: "",
  barangayCertificate: "",
  otherDocuments: ""
};

export default function EmployeeManager() {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState(initialForm);
  const [formMode, setFormMode] = useState("add"); // 'add' or 'edit'
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  function handleAdd() {
    setFormData(initialForm);
    setFormMode("add");
    setIsFormOpen(true);
  }

  function handleEdit(employee) {
    setFormData(employee);
    setFormMode("edit");
    setIsFormOpen(true);
  }

  function handleView(employee) {
    setSelectedEmployee(employee);
    setIsViewOpen(true);
  }

  function handleFormSubmit(data) {
    if (formMode === "add") {
      // Add new employee
      setEmployees((prev) => [...prev, data]);
    } else {
      // Edit existing employee
      setEmployees((prev) =>
        prev.map((emp) => (emp.gipId === data.gipId ? data : emp))
      );
    }
    setIsFormOpen(false);
  }

  function handleFormCancel() {
    setIsFormOpen(false);
  }

  function handleViewClose() {
    setIsViewOpen(false);
  }

  return (
    <div>
      <h1>Employee Manager</h1>
      <button onClick={handleAdd}>Add Employee</button>
      <EmployeeTable
        employees={employees}
        onEdit={handleEdit}
        onView={handleView}
      />
      {isFormOpen && (
        <EmployeeForm
          formData={formData}
          setFormData={setFormData}
          mode={formMode}
          onSubmit={handleFormSubmit}
          onCancel={handleFormCancel}
        />
      )}
      {isViewOpen && selectedEmployee && (
        <EmployeeViewModal employee={selectedEmployee} onClose={handleViewClose} />
      )}
    </div>
  );
}
