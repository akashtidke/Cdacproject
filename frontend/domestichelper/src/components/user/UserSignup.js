import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UserSignup = () => {
  const [formData, setFormData] = useState({
    userName: '',
    userPassword: '',
    userEmail: '',
    userMobileNumber: '',
    userAddress: '',
    userAdharcard: '',
    userCity: '',
    userPincode: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8080/user/insert', formData); // Replace with your API endpoint
      alert('User registered successfully!');
      // Optionally, you can redirect the user to a new page
    } catch (error) {
      console.error('Error registering user:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container mt-5">
      <h2>User Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="userName"
            className="form-control"
            placeholder="Username"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="userPassword"
            className="form-control"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="userEmail"
            className="form-control"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="userMobileNumber"
            className="form-control"
            placeholder="Mobile Number"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="userAddress"
            className="form-control"
            placeholder="Address"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="userAdharcard"
            className="form-control"
            placeholder="Adhar Card"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="userCity"
            className="form-control"
            placeholder="City"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="userPincode"
            className="form-control"
            placeholder="Pincode"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  );
};

export default UserSignup;
