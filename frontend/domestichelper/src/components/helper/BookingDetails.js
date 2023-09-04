import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BookingDetails.css'; // Import your custom CSS file
import bg from "./bg.jpg";
function cancelBooking() {
  alert("Booking cancle");
  console.log('Booking canceled');
}

const BookingDetails = () => {
  const storedUserData = localStorage.getItem('LoginHelperData');
  const userData = JSON.parse(storedUserData);
  const [profileList, setProfileList] = useState([]);

  useEffect(() => {
    // Fetch helper profile data
    const fetchProfileData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8080/helper/bookingInfoHelper',
          userData
        );

        const profileDataList = response.data;

        console.log(profileDataList);

        setProfileList(profileDataList);
        localStorage.setItem('getBookedDetails', JSON.stringify(profileDataList));
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  const getUserData = localStorage.getItem('getBookedDetails');
  const parsedUserData = JSON.parse(getUserData) || [];

  return (
    <div className="container-fluid" style={{ backgroundImage: `url(${bg})`, height: '1000px', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: 'cover' }} >
    <div className="container mt-5 BookingDetails">
      <h1 className="text-center text-primary">Booking Details</h1>
      <ul className="list-unstyled">
        {parsedUserData.map((profile, index) => (
          <li className="mb-4 profile-card" key={index}>
            <h3 className="text-primary">User Details</h3>
            <p className="mb-2">
              <strong>Name:</strong> {profile.userName}
            </p>
            <p className="mb-2">
              <strong>Email:</strong> {profile.userEmail}
            </p>
            <p className="mb-2">
              <strong>Address:</strong> {profile.userAddress}
            </p>
            <p className="mb-2">
              <strong>Pincode:</strong> {profile.userPincode}
            </p>
            <p className="mb-2">
              <strong>City:</strong> {profile.userCity}
            </p>
            <p className="mb-2">
              <strong>Mobile Number:</strong> {profile.userMobileNumber}
            </p>
            <button
              type="button"
              className="btn btn-danger"
              onClick={cancelBooking}
            >
              Cancel Booking
            </button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default BookingDetails;
