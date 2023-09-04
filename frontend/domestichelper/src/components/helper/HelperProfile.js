import React from 'react';
import './HelperProfile.css'; // Import your custom CSS file
import bg from "./bg.jpg";

const HelperProfile = () => {
  const storedUserData = localStorage.getItem('LoginHelperData');
  const userData = JSON.parse(storedUserData);

  return (
    <div  className="container-fluid" style={{ backgroundImage: `url(${bg})`, height: '1000px', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: 'cover' }} >
    <div className="container HelperProfile">
      <h2>Welcome to the Home Page</h2>
      <div className="helper-info">
        <div className="row">
          <div className="col-md-4">
            <strong>Helper Name:</strong>
          </div>
          <div className="col-md-8">
            <span>{userData.helperName}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <strong>Email:</strong>
          </div>
          <div className="col-md-8">
            <span>{userData.helperEmail}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <strong>Mobile Number:</strong>
          </div>
          <div className="col-md-8">
            <span>{userData.helperMobileNumber}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <strong>Address:</strong>
          </div>
          <div className="col-md-8">
            <span>{userData.helperAddress}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <strong>City:</strong>
          </div>
          <div className="col-md-8">
            <span>{userData.helperCity}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <strong>Pincode:</strong>
          </div>
          <div className="col-md-8">
            <span>{userData.helperPincode}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <strong>Service Name:</strong>
          </div>
          <div className="col-md-8">
            <span>{userData.servicename}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <strong>Is Available:</strong>
          </div>
          <div className="col-md-8">
            <span>{userData.isAvalible ? 'Yes' : 'No'}</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HelperProfile;
