import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingDetails = () => {
  const storedUserData = localStorage.getItem('LoginHelperData');
const userData =JSON.parse( storedUserData);
  const [profileList, setProfileList] = useState([]);

  useEffect(() => {
    // Fetch helper profile data
    const fetchProfileData = async () => {
      try {
        const response = await axios.post('http://localhost:8080/helper/bookingInfoHelper', userData);

        const profileDataList = response.data;
      console.log(profileDataList)
     
        setProfileList(profileDataList);
        localStorage.setItem('getBookedDetails', JSON.stringify(profileDataList));
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);
  const getUserData = localStorage.getItem('getBookedDetails');
  const parsedUserData = JSON.parse(getUserData);
  return (
    <div className="container mt-5">
    <h1>Profile List</h1>
    <ul>
      {parsedUserData.map((profile, index) => (
        <li key={index}>
          <p>Name: {profile.userName}</p>
          <p>Email: {profile.userEmail}</p>
          
          
          <p>Address: {profile.userAddress}</p>
          <p>Pnicode: {profile.userPincode}</p>
          <p>City: {profile.userCity}</p>
          <p>MobileNumber: {profile.userMobileNumber}</p>
          {/* Add more properties you want to display */}
        </li>
      ))}
    </ul>
  </div>
  );
};

export default BookingDetails;
