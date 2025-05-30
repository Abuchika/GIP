// src/components/EmployeeViewModal.js
import React from "react";

export default function EmployeeViewModal({ visible, onClose, employee }) {
  if (!visible || !employee) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96 max-w-full">
        <h2 className="text-xl font-bold mb-4">Employee Details</h2>
        <div className="space-y-2">
          {Object.entries(employee).map(([key, value]) => {
            if (key === "id") return null;
            return (
              <div key={key} className="flex justify-between border-b py-1">
                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>
                <span>{value || "-"}</span>
              </div>
            );
          })}
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-400 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
