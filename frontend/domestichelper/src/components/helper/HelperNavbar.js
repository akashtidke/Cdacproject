import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/helper/profile">Profile</Link>
        </li>
        
        <li>
          <Link to="/helper/updateprofile">Update Profile</Link>
        </li>
        <li>
          <Link to="/helper/bookingdetails">Booking Details</Link>
        </li>
       
        <li>
          <Link to="/helper/Logout">Logout</Link>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
