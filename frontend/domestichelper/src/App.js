import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLogin from './components/user/UserLogin';
import About from './components/About';
import Home from './components/Home';
import HelperLogin from './components/helper/HelperLogin'
import UserSignup from './components/user/UserSignup';
import HelperSignup from './components/helper/HelperSignup'
import Navbar from './Navbar';
import UserDashboard from './components/user/UserDashboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HelperDashboard from './components/helper/HelperDasboard';
import HelperProfile from './components/helper/HelperProfile'
import HelperUpdateProfile from './components/helper/HelperUpdateProfile'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BookingDetails from './components/helper/BookingDetails'
import UserBookingDetails from'./components/user/GetAllHelpers'
import UserProfile from './components/user/UserProfile';
import UserHome from './components/user/UserHome'
function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/helperlogin" element={<HelperLogin />} />
        <Route path="/usersignup" element={<UserSignup />} />
        <Route path="/helpersignup" element={<HelperSignup />} />
        <Route path="/userdashboard" element={<UserDashboard/>} />
        <Route path="/helperdashboard" element={<HelperDashboard/>} />
        <Route path="/helper/profile" element={<HelperProfile/>} />
        <Route path="/helper/updateprofile" element={<HelperUpdateProfile/>} />
        <Route path="/helper/bookingdetails" element={<BookingDetails/>} />
        <Route path="/user/bookingdetails" element={<UserBookingDetails/>} />
        <Route path="/user/profile" element={<UserProfile/>} />
        <Route path="/user/home" element={<UserHome/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
