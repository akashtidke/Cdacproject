import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserHome.css'; // Import your custom CSS file

const storedUserData = localStorage.getItem('UserLoginData');
const userData = JSON.parse(storedUserData);

function sendData(helperId) {
  // ... Your sendData function code remains the same
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
  const getUserData = localStorage.getItem('getAllHelpers');
  const parsedUserData = JSON.parse(getUserData) || []; // Initialize as an empty array if null

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

  return (
    <div className="container mt-5 UserHome">
      <h1 className="text-center text-primary">Helper Profiles</h1>
      <ul className="list-unstyled">
        {parsedUserData.map((profile, index) => (
          <li className="mb-4 profile-card" key={index}>
            <h3 className="text-primary">{profile.helperName}</h3>
            <p className="mb-2">
              <strong>Email:</strong> {profile.helperEmail}
            </p>
            <p className="mb-2">
              <strong>Address:</strong> {profile.helperAddress}
            </p>
            <p className="mb-2">
              <strong>Pincode:</strong> {profile.helperPincode}
            </p>
            <p className="mb-2">
              <strong>City:</strong> {profile.helperCity}
            </p>
            <p className="mb-2">
              <strong>Mobile Number:</strong> {profile.helperMobileNumber}
            </p>
            <button
              type="button"
              className="btn btn-success"
              id={profile.helperId}
              onClick={() => sendData(profile.helperId)}
            >
              Book
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserHome;
