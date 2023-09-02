import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetAllHelpers = () => {
    const storedUserData = localStorage.getItem('UserLoginData');
    const userData =JSON.parse(storedUserData);
  const [profileList, setProfileList] = useState([]);

  useEffect(() => {
    // Fetch helper profile data
    const fetchProfileData = async () => {
      try {
        const response = await axios.post('http://localhost:8080/user/bookingInfoUser', userData);

        const profileDataList = response.data;
      console.log(profileDataList)
     
        setProfileList(profileDataList);
        localStorage.setItem('getBooked', JSON.stringify(profileDataList));
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);
  const getUserData = localStorage.getItem('getBooked');
  const parsedUserData = JSON.parse(getUserData);
  
  return (
    <div className="container mt-5">
    <h1>Profile List</h1>
    <ul>
      {parsedUserData.map((profile, index) => (
        <li key={index}>
          <p>Name: {profile.helperName}</p>
          <p>Email: {profile.helperEmail}</p>
          
          
          <p>Address: {profile.helperAddress}</p>
          <p>Pnicode: {profile.helperPincode}</p>
          <p>City: {profile.helperCity}</p>
          <p>MobileNumber: {profile.helperMobileNumber}</p>
          {/* Add more properties you want to display */}
        </li>
      ))}
    </ul>
  </div>

  );
};

export default GetAllHelpers;
