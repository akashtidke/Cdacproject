import React, { useState, useEffect } from 'react';
import axios from 'axios';
const storedUserData = localStorage.getItem('UserLoginData');
const userData =JSON.parse( storedUserData);
function sendData(helperId){
  
console.log(helperId);
console.log(userData.userId);
  const bookingData = {
    bookingStartDate: '2023-09-02', // Replace with your actual booking start date
    bookingEndDate: '2023-09-05',   // Replace with your actual booking end date
    helper: {
      helperId: helperId,                // Replace with the actual helper ID
      // Other helper properties here
    },
    user: {
      userId: userData.userId,                  // Replace with the actual user ID
      // Other user properties here
    },
  };
  axios.post('http://localhost:8080/user/bookingsend', bookingData)
    .then((response) => {
      // Handle the success response from the server
      console.log('Booking data sent successfully:', response.data);
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
      console.error('Error sending booking data:', error);
    });

     }
const UserHome = () => {
  
  const [profileList, setProfileList] = useState([]);

  useEffect(() => {
    // Fetch helper profile data
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/helper/list');

        const profileDataList = response.data;
      console.log(profileDataList)
     
        setProfileList(profileDataList);
        localStorage.setItem('getAllHelpers', JSON.stringify(profileDataList));
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);
  const getUserData = localStorage.getItem('getAllHelpers');
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
          <button type='submit'id={profile.helperId} onClick={() => sendData(profile.helperId)} > Book</button>
          {/* Add more properties you want to display */}
        </li>
      ))}
    </ul>
  </div>

  );
};

export default UserHome;
