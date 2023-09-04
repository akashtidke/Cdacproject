import React from 'react';
import { Link } from 'react-router-dom';
import bg from "./bg.jpg";
const UserNavbar = () => {
  return (
    <div className="container-fluid" style={{ backgroundImage: `url(${bg})`, height: '1000px', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>

      <nav>
      <ul>
      <li>
          <Link to="/user/home">Home</Link>
        </li>
        <li>
          <Link to="/user/profile">Profile</Link>
        </li>
        
        <li>
          <Link to="/user/updateprofile">Update Profile</Link>
        </li>
        <li>
          <Link to="/user/bookingdetails">Booking Details</Link>
        </li>
       
        <li>
          <Link to="/user/Logout">Logout</Link>
        </li>

      </ul>
    </nav>
  </div>
  );
};

export default UserNavbar;
