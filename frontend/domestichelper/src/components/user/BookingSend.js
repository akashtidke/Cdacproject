const axios = require('axios'); // Import the Axios library

// Define the booking data as an object
const BookingSend=()=>{
    console.log("booking send");
    const storedUserData = localStorage.getItem('UserLoginData');
const userData =JSON.parse( storedUserData);
const bookingData = {
  bookingStartDate: '2023-09-02', // Replace with your actual booking start date
  bookingEndDate: '2023-09-05',   // Replace with your actual booking end date
  helper: {
    helperId: 1,                // Replace with the actual helper ID
    // Other helper properties here
  },
  user: {
    userId: userData.userId,                  // Replace with the actual user ID
    // Other user properties here
  },
};

// Send the booking data to the server using Axios
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
export default BookingSend;
