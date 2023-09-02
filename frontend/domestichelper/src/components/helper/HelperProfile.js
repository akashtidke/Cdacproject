import React from 'react';




const HelperProfile = () => {
    const storedUserData = localStorage.getItem('LoginHelperData');
const userData = storedUserData;

  return (
    <div>
      <h2>Welcometo the Home Page{userData}</h2>
    </div>
  );
};

export default HelperProfile;
