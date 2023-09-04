import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from './UserLogin.module.css'
const UserLogin = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [formData, setFormData] = useState({
    userEmail: '',
    userPassword: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/user/login', {
        userEmail: formData.userEmail,
        userPassword: formData.userPassword,
      });

      const isAuthenticated = response.data;

      if (isAuthenticated) {
        toast.success('Login successful');
        alert("login successful");
        localStorage.setItem('UserLoginData', JSON.stringify(isAuthenticated));
        navigate('/userdashboard'); // Redirect to dashboard page
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
    <div className={styles.container}>
      <h2>USer Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            name="userEmail"
            className="form-control"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <br/>
        <div className="form-group">
          <input
            type="password"
            name="userPassword"
            className="form-control"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
       <center>
       <button type="submit" className="btn btn-primary mt-3">Login</button>
       </center>
        
        
      </form>
    </div>
  );
};

export default UserLogin;
