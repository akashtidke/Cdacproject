import React from 'react';
import { Link } from 'react-router-dom';

const UserNavbar = () => {
  return (
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
  );
};

export default UserNavbar;
