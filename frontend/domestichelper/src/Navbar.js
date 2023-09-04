import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import bg from "./bg.jpg";
const Navbar = () => {
  return (
    

    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/userlogin">User Login</Link>
        </li>
        <li>
          <Link to="/helperlogin">Helper Login</Link>
        </li>
        <li>
          <Link to="/usersignup">User Signup</Link>
        </li>
        <li>
          <Link to="/helpersignup">Helper Signup</Link>
        </li>
      </ul>
    </nav>
    
  );
};

export default Navbar;
