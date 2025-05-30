// src/pages/Dashboard.js
import React, { useEffect, useState, useRef } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  writeBatch,
  doc,
  deleteDoc,
} from "firebase/firestore";
import * as XLSX from "xlsx";

import EmployeeAddModal from "../components/EmployeeAddModal";
import EmployeeEditModal from "../components/EmployeeEditModal";
import EmployeeViewModal from "../components/EmployeeViewModal";

export default function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showView, setShowView] = useState(false);

  const [currentEmp, setCurrentEmp] = useState(null);

  const fileInputRef = useRef();

  // Fetch employees
  const fetchEmployees = async () => {
    const colRef = collection(db, "employees");
    const snapshot = await getDocs(colRef);
    const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setEmployees(list);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Handle Excel import
  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    const batch = writeBatch(db);
    const colRef = collection(db, "employees");

    jsonData.forEach((item) => {
      const docRef = doc(colRef);
      batch.set(docRef, {
        name: item.name || item.Name || "",
        gipId: item.gipId || item.gipID || item.GipId || "",

        address: item.address || item.Address || "",
        telephoneNumber: item.telephoneNumber || item["Telephone Number"] || "",
        mobileNumber: item.mobileNumber || item["Mobile Number"] || "",
        emailAddress: item.emailAddress || item["Email Address"] || "",

        birthPlace: item.birthPlace || item["Birth Place"] || "",
        birthDate: item.birthDate || item["Birth Date"] || "",
        age: item.age || item.Age || "",

        gender: item.gender || item.Gender || "",
        civilStatus: item.civilStatus || item["Civil Status"] || "",

        validIdType: item.validIdType || item["Valid ID Type"] || "",
        validIdNumber: item.validIdNumber || item["Valid ID Number"] || "",
        validIdIssued: item.validIdIssued || item["Valid ID Issued"] || "",

        placeOfAssignment: item.placeOfAssignment || item["Place of Assignment"] || "",
        natureOfWork: item.natureOfWork || item["Nature of Work"] || "",
        lbpAccountNumber: item.lbpAccountNumber || item["LBP Account Number"] || "",
        employmentStatus: item.employmentStatus || item["Employment Status"] || "",
        lgu: item.lgu || item.LGU || "",
        dateHired: item.dateHired || item["Date Hired"] || "",
        dateEnded: item.dateEnded || item["Date Ended"] || "",

        workDays: item.workDays || item["Work Days"] || "",
        daysAbsent: item.daysAbsent || item["Days Absent"] || "",
        minutesLate: item.minutesLate || item["Minutes Late"] || "",
        netWorkDays: item.netWorkDays || item["Net Work Days"] || "",

        remarks: item.remarks || item.Remarks || ""

      });
    });

    try {
      await batch.commit();
      alert("Imported successfully!");
      fetchEmployees();
      fileInputRef.current.value = null;
    } catch (err) {
      alert("Import error: " + err.message);
    }
  };

  // Delete employee
  const handleDelete = async (id) => {
    if (window.confirm("Delete this employee?")) {
      try {
        await deleteDoc(doc(db, "employees", id));
        fetchEmployees();
      } catch (err) {
        alert("Error deleting employee: " + err.message);
      }
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Employee Dashboard</h1>

      <div className="mb-4 flex items-center gap-4">
        <button
          onClick={() => fileInputRef.current.click()}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Import Excel
        </button>
        <input
          type="file"
          accept=".xlsx,.xls"
          ref={fileInputRef}
          onChange={handleFile}
          style={{ display: "none" }}
        />
        <button
          onClick={() => setShowAdd(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add New Employee
        </button>
      </div>

      {/* Employee Table */}
      <table className="w-full border border-gray-300 border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">GIP ID</th>
            <th className="border p-2">Address</th>
            <th className="border p-2">Telephone Number</th>
            <th className="border p-2">Mobile Number</th>
            <th className="border p-2">Email Address</th>
            <th className="border p-2">Birth Place</th>
            <th className="border p-2">Birth Date</th>
            <th className="border p-2">Age</th>
            <th className="border p-2">Gender</th>
            <th className="border p-2">Civil Status</th>
            <th className="border p-2">Valid ID Type</th>
            <th className="border p-2">Valid ID Number</th>
            <th className="border p-2">Valid ID Issued</th>
            <th className="border p-2">Place of Assignment</th>
            <th className="border p-2">Nature of Work</th>
            <th className="border p-2">LBP Account Number</th>
            <th className="border p-2">Employment Status</th>
            <th className="border p-2">LGU</th>
            <th className="border p-2">Date Hired</th>
            <th className="border p-2">Date Ended</th>
            <th className="border p-2">Work Days</th>
            <th className="border p-2">Days Absent</th>
            <th className="border p-2">Minutes Late</th>
            <th className="border p-2">Net Work Days</th>
            <th className="border p-2">Remarks</th>
            <th className="border p-2">Actions</th> {/* View / Edit / Delete */}
 
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
            <td className="border p-2">{emp.name}</td>
            <td className="border p-2">{emp.gipId}</td>
            <td className="border p-2">{emp.address}</td>
            <td className="border p-2">{emp.telephoneNumber}</td>
            <td className="border p-2">{emp.mobileNumber}</td>
            <td className="border p-2">{emp.emailAddress}</td>
            <td className="border p-2">{emp.birthPlace}</td>
            <td className="border p-2">{emp.birthDate}</td>
            <td className="border p-2">{emp.age}</td>
            <td className="border p-2">{emp.gender}</td>
            <td className="border p-2">{emp.civilStatus}</td>
            <td className="border p-2">{emp.validIdType}</td>
            <td className="border p-2">{emp.validIdNumber}</td>
            <td className="border p-2">{emp.validIdIssued}</td>
            <td className="border p-2">{emp.placeOfAssignment}</td>
            <td className="border p-2">{emp.natureOfWork}</td>
            <td className="border p-2">{emp.lbpAccountNumber}</td>
            <td className="border p-2">{emp.employmentStatus}</td>
            <td className="border p-2">{emp.lgu}</td>
            <td className="border p-2">{emp.dateHired}</td>
            <td className="border p-2">{emp.dateEnded}</td>
            <td className="border p-2">{emp.workDays}</td>
            <td className="border p-2">{emp.daysAbsent}</td>
            <td className="border p-2">{emp.minutesLate}</td>
            <td className="border p-2">{emp.netWorkDays}</td>
            <td className="border p-2">{emp.remarks}</td>
              <td className="border p-2 space-x-2">
                <button
                  className="bg-yellow-500 px-2 py-1 rounded text-white"
                  onClick={() => {
                    setCurrentEmp(emp);
                    setShowEdit(true);
                  }}
                >
                  Edit
                </button>
                <button
                  className="bg-red-600 px-2 py-1 rounded text-white"
                  onClick={() => handleDelete(emp.id)}
                >
                  Delete
                </button>
                <button
                  className="bg-gray-700 px-2 py-1 rounded text-white"
                  onClick={() => {
                    setCurrentEmp(emp);
                    setShowView(true);
                  }}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
          {employees.length === 0 && (
            <tr>
              <td colSpan="6" className="text-center p-4">
                No employees found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modals */}
      <EmployeeAddModal
        visible={showAdd}
        onClose={() => setShowAdd(false)}
        onAdded={fetchEmployees}
      />
      {currentEmp && (
        <EmployeeEditModal
          visible={showEdit}
          onClose={() => setShowEdit(false)}
          employee={currentEmp}
          onUpdated={() => {
            fetchEmployees();
            setShowEdit(false);
          }}
        />
      )}
      {currentEmp && (
        <EmployeeViewModal
          visible={showView}
          onClose={() => setShowView(false)}
          employee={currentEmp}
        />
      )}
    </div>
  );
}
