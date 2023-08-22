import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [formData, setFormData] = useState({
    userId: '',
    userName: '',
    userPassword: '',
    userEmail: '',
    userMobileNumber: '',
    userAddress: '',
    userAdharcard: '',
    userCity: '',
    userPincode: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8092/user/userinsert', formData);
      console.log('Data sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>UserID:</label>
      <input type="text" name="userId" value={formData.userId} onChange={handleChange} />
      <label>userPassword:</label>
      <input type="text" name="userPassword" value={formData.userPassword} onChange={handleChange} />
      <label>userEmail:</label>
      <input type="text" name="userEmail" value={formData.userEmail} onChange={handleChange} />
      <label>userMobileNumber:</label>
      <input type="text" name="userMobileNumber" value={formData.userMobileNumber} onChange={handleChange} />
      <label>userAddress:</label>
      <input type="text" name="userAddress" value={formData.userAddress} onChange={handleChange} />
      <label>userAdharcard:</label>
      <input type="text" name="userAdharcard" value={formData.userAdharcard} onChange={handleChange} />
      <label>userCity:</label>
      <input type="text" name="userCity" value={formData.userCity} onChange={handleChange} />
      <label>userPicode:</label>
      <input type="text" name="userPicode" value={formData.userPicode} onChange={handleChange} />
      

      {/* Other input fields here... */}

      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;