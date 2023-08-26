import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HelperSignup = () => {
    const storedUserData = localStorage.getItem('LoginHelperData');
const userData = JSON.parse( storedUserData);
  const [formData, setFormData] = useState({
    helperId:userData.helperId,
    helperName: userData.helperName,
    helperPassword: userData.helperPassword,
    helperEmail: userData.helperEmail,
    helperMobileNumber: userData.helperMobileNumber,
    helperAddress: userData.helperAddress,
    helperAdharcard: userData.helperAdharcard,
    helperCity: userData.helperCity,
    helperPincode: userData.helperPincode,
    servicename: userData.servicename,
    isAvalible: userData.isAvalible,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put('http://localhost:8080/helper/updateHelper', formData); // Replace with your API endpoint
     // toast.success("register succesfull");
      alert('Helper registered successfully!');
      // Optionally, you can redirect the user to a new page
    } catch (error) {
      console.error('Error registering helper:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  return (
    <div className="container mt-5">
      <h2>Helper Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="helperName"
            className="form-control"
            placeholder="Name"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="helperPassword"
            className="form-control"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="helperEmail"
            className="form-control"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="helperMobileNumber"
            className="form-control"
            placeholder="Mobile Number"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="helperAddress"
            className="form-control"
            placeholder="Address"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="helperAdharcard"
            className="form-control"
            placeholder="Adhar Card"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="helperCity"
            className="form-control"
            placeholder="City"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="helperPincode"
            className="form-control"
            placeholder="Pincode"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="servicename"
            className="form-control"
            placeholder="Service Name"
            onChange={handleChange}
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            name="isAvalible"
            className="form-check-input"
            onChange={handleChange}
          />
          <label className="form-check-label">Available</label>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Update</button>
      </form>
    </div>
  );
};

export default HelperSignup;
