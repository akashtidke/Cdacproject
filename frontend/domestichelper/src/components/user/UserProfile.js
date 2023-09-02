import React from 'react';




const UserProfile = () => {
    const storedUserData = localStorage.getItem('UserLoginData');
const userData = storedUserData;


  return (
    <div>
      <h2>Welcome to the Home Page{userData}</h2>
    </div>
  );
};

export default UserProfile;
