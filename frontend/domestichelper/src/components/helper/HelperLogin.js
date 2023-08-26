import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './HelperLogin.module.css';
const UserLogin = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [formData, setFormData] = useState({
    helperEmail: '',
    helperPassword: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/helper/login', {
        helperEmail: formData.helperEmail,
        helperPassword: formData.helperPassword,
      });

      const isAuthenticated = response.data;
console.log(JSON.stringify(isAuthenticated));
      if (isAuthenticated) {
        toast.success('Login successful');

        // Store the authentication token in local storage
        localStorage.setItem('LoginHelperData', JSON.stringify(isAuthenticated)); // Replace 'yourAuthToken' with the actual token

        navigate('/helperdashboard'); // Redirect to dashboard page
      } else {
        toast.error('Invalid credentials');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      toast.error('An error occurred. Please try again.');
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
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
            type="password"
            name="helperPassword"
            className="form-control"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Log In
        </button>
      </form>
    </div>
  );
};

export default UserLogin;
