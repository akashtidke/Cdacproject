import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetAllHelpers() {
  const [profileList, setProfileList] = useState([]);

  useEffect(() => {
    // Fetch helper profile data
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/helper/list');
        const profileDataList = response.data;
        console.log(profileDataList);
        setProfileList(profileDataList);
        localStorage.setItem('getAllHelpers', JSON.stringify(profileDataList));
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  const getUserData = localStorage.getItem('getAllHelpers');
  const parsedUserData = JSON.parse(getUserData) || [];

  return (
    <div
      className="container mt-5"
      style={{
        backgroundColor: '#f8f9fa',
        padding: '20px',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          color: '#007bff',
        }}
      >
        Profile List
      </h1>
      <ul
        style={{
          listStyleType: 'none',
          padding: '0',
        }}
      >
        {parsedUserData.map((profile, index) => (
          <li
            key={index}
            style={{
              border: '1px solid #ddd',
              borderRadius: '5px',
              padding: '10px',
              backgroundColor: '#fff',
              marginBottom: '10px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            <p>Name: {profile.helperName}</p>
            <p>Email: {profile.helperEmail}</p>
            <p>Address: {profile.helperAddress}</p>
            <p>Pincode: {profile.helperPincode}</p>
            <p>City: {profile.helperCity}</p>
            <p>MobileNumber: {profile.helperMobileNumber}</p>
            {/* Add more properties you want to display */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GetAllHelpers;
