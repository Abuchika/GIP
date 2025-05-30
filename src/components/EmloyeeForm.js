import React from 'react';

export default function EmployeeForm({ formData, setFormData, onSubmit, onCancel, mode }) {
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(formData);
  }

  return (
    <div className="modal">
      <h2>{mode === 'add' ? 'Add New Employee' : 'Edit Employee'}</h2>
      <form onSubmit={handleSubmit}>

        <label>
          Full Name: 
          <input 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required
          />
        </label><br/>

        <label>
          First Name: 
          <input 
            name="firstName" 
            value={formData.firstName} 
            onChange={handleChange} 
            required
          />
        </label><br/>

        <label>
          Last Name: 
          <input 
            name="lastName" 
            value={formData.lastName} 
            onChange={handleChange} 
            required
          />
        </label><br/>

        <label>
          GIP ID: 
          <input 
            name="gipId" 
            value={formData.gipId} 
            onChange={handleChange} 
            required
            disabled={mode === 'edit'} // don't allow changing ID on edit
          />
        </label><br/>

        {/* Add more input fields for all other properties here as needed */}

        <label>
          Employment Status: 
          <select 
            name="employmentStatus" 
            value={formData.employmentStatus} 
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Permanent">Permanent</option>
            <option value="Contractual">Contractual</option>
            <option value="Probationary">Probationary</option>
          </select>
        </label><br/>

        <label>
          Date Hired: 
          <input 
            type="date" 
            name="dateHired" 
            value={formData.dateHired} 
            onChange={handleChange}
          />
        </label><br/>

        <label>
          Days Absent: 
          <input 
            type="number" 
            name="daysAbsent" 
            value={formData.daysAbsent} 
            onChange={handleChange}
          />
        </label><br/>

        <label>
          Remarks: 
          <textarea 
            name="remarks" 
            value={formData.remarks} 
            onChange={handleChange}
          />
        </label><br/>

        <button type="submit">{mode === 'add' ? 'Add' : 'Update'}</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
}
