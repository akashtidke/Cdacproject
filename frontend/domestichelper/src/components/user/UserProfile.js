import React from 'react';
import './UserProfile.css'; // Import your custom CSS file
import bg from "./bg.jpg";

const UserProfile = () => {
  const storedUserData = localStorage.getItem('UserLoginData');
  const userData = JSON.parse(storedUserData);

  return (
    <div className="container-fluid" style={{ backgroundImage: `url(${bg})`, height: '1000px', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
    <div className="container UserProfile">
      <h2>Welcome to the Home Page</h2>
      <div className="user-info">
        <div className="row">
          <div className="col-md-4">
            <strong>User Name:</strong>
          </div>
          <div className="col-md-8">
            <span>{userData.userName}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <strong>Email:</strong>
          </div>
          <div className="col-md-8">
            <span>{userData.userEmail}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <strong>Mobile Number:</strong>
          </div>
          <div className="col-md-8">
            <span>{userData.userMobileNumber}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <strong>Address:</strong>
          </div>
          <div className="col-md-8">
            <span>{userData.userAddress}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <strong>Aadhar Card:</strong>
          </div>
          <div className="col-md-8">
            <span>{userData.userAdharcard}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <strong>City:</strong>
          </div>
          <div className="col-md-8">
            <span>{userData.userCity}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <strong>Pincode:</strong>
          </div>
          <div className="col-md-8">
            <span>{userData.userPincode}</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default UserProfile;
