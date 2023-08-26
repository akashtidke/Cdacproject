import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingDetails = () => {
  const [profileList, setProfileList] = useState([]);

  useEffect(() => {
    // Fetch helper profile data
    const fetchProfileData = async () => {
      try {
        const response = await axios.post('http://localhost:8080/helper/bookingInfoHelper', {
          // Add headers or authentication tokens if needed
        });

        const profileDataList = response.data;
       
        setProfileList(profileDataList);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div className="container mt-5">
     
    </div>
  );
};

export default BookingDetails;
