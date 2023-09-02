import React from 'react';
import UserNavbar from './UserNavbar'
const UserDashboard = () => {
  return (
    <div className="container mt-5">
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard! This is a protected area.</p>
<UserNavbar/>
    </div>
  );
};

export default UserDashboard;
