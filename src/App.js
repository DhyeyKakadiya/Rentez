import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import OpenRoute from "./components/core/Auth/OpenRoute";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import VerifyEmail from './Pages/VerifyEmail';
import ForgotPassword from './Pages/ForgotPassword';
import UpdatePassword from './Pages/UpdatePassword';
import Navbar from './components/common/Navbar';
import Dashboard from './Pages/Dashboard';
import Error from './Pages/Error'
import MyProfile from "./components/core/Dashboard/MyProfile";
import Settings from './components/core/Dashboard/Settings';
import { ACCOUNT_TYPE } from "./utils/contsants";
import { useSelector } from 'react-redux';
import ListProperty from './components/core/Dashboard/ListProperty';
import MyListing from './components/core/Dashboard/MyListing';


function App() {

  const { user } = useSelector((state) => state.profile)

  const location = useLocation();
  const hideNavbarPaths = ['/login', '/signup', '/verify-email', '/forgot-password', '/update-password/:id'];
  const HideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <div>
      {!HideNavbar && <Navbar />}
      <Routes>
        <Route path='/' element={<Home/> }/>
        <Route 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="dashboard/my-profile" element={<MyProfile />} />
      
          <Route path="dashboard/Settings" element={<Settings />} /> 

      {
        user?.accountType === ACCOUNT_TYPE.SELLER && (
          <>
          <Route path="dashboard/create-listing" element={<ListProperty />} />
          <Route path="dashboard/my-listing" element={<MyListing/>} />
          </>
        )
      }


        </Route>
        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
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
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
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
        /> 

          <Route path="*" element={<Error />} />
        </Routes>
    </div>
    
  );
}
// eslint-disable-next-line 
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
    
