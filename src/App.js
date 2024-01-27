import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import OpenRoute from "./components/core/Auth/OpenRoute";
import VerifyEmail from './Pages/VerifyEmail';
import ForgotPassword from './Pages/ForgotPassword';
import UpdatePassword from './Pages/UpdatePassword';
import Navbar from './components/common/Navbar';
import Dashboard from './Pages/Dashboard';

function App() {

  const location = useLocation();
  const hideNavbarPaths = ['/login', '/signup', '/verify-email', '/forgot-password', '/update-password/:id'];

  const HideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <div>
      {!HideNavbar && <Navbar />}
      <Routes>
        <Route path='/' element={<Home/> }/>
        <Route path='/dashboard' element={<Dashboard/> }/>
        <Route path='/login' element={<Login/> }/>
        <Route path='/signup' element={<Signup/> }/>
        <Route path='/verify-email' element={<VerifyEmail/> }/>
        <Route path='/forgot-password' element={<ForgotPassword/> }/>
        <Route path='/update-password/:id' element={<UpdatePassword/> }/>
        </Routes>
    </div>
    
  );
}

export default App;
        
        {/* <Route
            path="/signup"
            element={
              <OpenRoute>
                <Signup />
              </OpenRoute>
            }
          />
      <Route
            path="/login"
            element={
              <OpenRoute>
                <Login />
              </OpenRoute>
            }
          />
              
      <Route
            path="forgot-password"
            element={
              <OpenRoute>
                <ForgotPassword />
              </OpenRoute>
            }
          />  

        <Route
            path="verify-email"
            element={
              <OpenRoute>
                <VerifyEmail />
              </OpenRoute>
            }
          />  

      <Route
            path="update-password/:id"
            element={
              <OpenRoute>
                <UpdatePassword />
              </OpenRoute>
            }
          /> */}
    
