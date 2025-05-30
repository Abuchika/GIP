// src/components/EmployeeAddModal.js
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function EmployeeAddModal({ visible, onClose, onAdded }) {
  const [form, setForm] = useState({

    // Table Headers
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

  if (!visible) return null;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "employees"), form);
      onAdded();
      onClose();
      setForm({
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
    } catch (err) {
      alert("Error adding employee: " + err.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96 max-w-full">
        <h2 className="text-xl font-bold mb-4">Add New Employee</h2>
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
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
