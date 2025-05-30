// src/components/EmployeeEditModal.js
import React, { useState, useEffect } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function EmployeeEditModal({
  visible,
  onClose,
  employee,
  onUpdated,
}) {
  const [form, setForm] = useState({
  name: "",
  
  // Table Headers
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

  // Education & Documents
  educationalAttainment: "",
  school1Name: "",
  school1InclusiveDate: "",
  school1Course: "",
  school2Name: "",
  school2InclusiveDate: "",
  school2Course: "",
  school3Name: "",
  school3InclusiveDate: "",
  school3Course: "",

  company1Name: "",
  company1Position: "",
  company1Engagement: "",
  company2Name: "",
  company2Position: "",
  company2Engagement: "",
  company3Name: "",
  company3Position: "",
  company3Engagement: "",

  // Disadvantage Group
  pwd: "",
  ip: "",
  victimOfArmedConflict: "",
  rebelReturnee: "",
  fourPs: "",
  others: "",

  // Emergency Contact & Documents
  emergencyName: "",
  emergencyContact: "",
  emergencyAddress: "",
  beneficiaryName: "",
  relationship: "",
  birthCertificate: "",
  transcriptOfRecords: "",
  diploma: "",
  form137Or138: "",
  applicationLetter: "",
  barangayCertificate: "",
  otherDocuments: ""
  });

  useEffect(() => {
    if (employee) {
      setForm({
      name: employee.name || "",
      email: employee.email || "",
      phone: employee.phone || "",

      gipId: employee.gipId || "",
      address: employee.address || "",
      telephoneNumber: employee.telephoneNumber || "",
      mobileNumber: employee.mobileNumber || "",
      emailAddress: employee.emailAddress || "",
      birthPlace: employee.birthPlace || "",
      birthDate: employee.birthDate || "",
      age: employee.age || "",
      gender: employee.gender || "",
      civilStatus: employee.civilStatus || "",
      validIdType: employee.validIdType || "",
      validIdNumber: employee.validIdNumber || "",
      validIdIssued: employee.validIdIssued || "",
      placeOfAssignment: employee.placeOfAssignment || "",
      natureOfWork: employee.natureOfWork || "",
      lbpAccountNumber: employee.lbpAccountNumber || "",
      employmentStatus: employee.employmentStatus || "",
      lgu: employee.lgu || "",
      dateHired: employee.dateHired || "",
      dateEnded: employee.dateEnded || "",
      workDays: employee.workDays || "",
      daysAbsent: employee.daysAbsent || "",
      minutesLate: employee.minutesLate || "",
      netWorkDays: employee.netWorkDays || "",
      remarks: employee.remarks || "",

      // Education & Documents
      educationalAttainment: employee.educationalAttainment || "",
      school1Name: employee.school1Name || "",
      school1Date: employee.school1Date || "",
      school1Degree: employee.school1Degree || "",
      school2Name: employee.school2Name || "",
      school2Date: employee.school2Date || "",
      school2Degree: employee.school2Degree || "",
      school3Name: employee.school3Name || "",
      school3Date: employee.school3Date || "",
      school3Degree: employee.school3Degree || "",

      company1: employee.company1 || "",
      position1: employee.position1 || "",
      engagement1: employee.engagement1 || "",
      company2: employee.company2 || "",
      position2: employee.position2 || "",
      engagement2: employee.engagement2 || "",
      company3: employee.company3 || "",
      position3: employee.position3 || "",
      engagement3: employee.engagement3 || "",

      // Disadvantaged Group
      pwd: employee.pwd || "",
      ip: employee.ip || "",
      victimArmedConflict: employee.victimArmedConflict || "",
      rebelReturnee: employee.rebelReturnee || "",
      fourPs: employee.fourPs || "",
      others: employee.others || "",

      // Emergency Contact
      emergencyName: employee.emergencyName || "",
      emergencyContact: employee.emergencyContact || "",
      emergencyAddress: employee.emergencyAddress || "",
      beneficiaryName: employee.beneficiaryName || "",
      beneficiaryRelationship: employee.beneficiaryRelationship || "",

      // Documents
      birthCertificate: employee.birthCertificate || "",
      transcriptOfRecords: employee.transcriptOfRecords || "",
      diploma: employee.diploma || "",
      form137: employee.form137 || "",
      applicationLetter: employee.applicationLetter || "",
      barangayCertificate: employee.barangayCertificate || "",
      otherDocuments: employee.otherDocuments || ""
      });
    }
  }, [employee]);

  if (!visible) return null;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, "employees", employee.id);
      await updateDoc(docRef, form);
      onUpdated();
      onClose();
    } catch (err) {
      alert("Error updating employee: " + err.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96 max-w-full">
        <h2 className="text-xl font-bold mb-4">Edit Employee</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          {["name", "gipId", "address",
            "telephoneNumber", "mobileNumber", "emailAddress", "birthPlace", "birthDate", "age",
            "gender", "civilStatus", "validIdType", "validIdNumber", "validIdIssued",
            "placeOfAssignment", "natureOfWork", "lbpAccountNumber", "employmentStatus", "lgu",
            "dateHired", "dateEnded", "workDays", "daysAbsent", "minutesLate", "netWorkDays",
            "remarks", "educationalAttainment", "school1Name", "school1Date", "school1Course",
            "school2Name", "school2Date", "school2Course", "school3Name", "school3Date", "school3Course",
            "company1Name", "company1Position", "company1Period", "company2Name", "company2Position",
            "company2Period", "company3Name", "company3Position", "company3Period", "pwd", "ip",
            "armedConflictVictim", "rebelReturnee", "fourPs", "otherDisadvantage",
            "emergencyName", "emergencyContact", "emergencyAddress", "beneficiaryName",
            "beneficiaryRelationship", "birthCertificate", "transcriptOfRecords", "diploma",
            "form137", "applicationLetter", "barangayCertificate", "otherDocuments"].map(
            (field) => (
              <input
                key={field}
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={form[field]}
                onChange={handleChange}
                required
                className="border px-2 py-1 w-full rounded"
              />
            )
          )}

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-400 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-yellow-500 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
