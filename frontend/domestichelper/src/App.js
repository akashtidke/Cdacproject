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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
