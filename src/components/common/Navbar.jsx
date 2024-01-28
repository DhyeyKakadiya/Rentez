import React, { useEffect, useState } from 'react'
import { Link, useNavigate, matchPath, useLocation } from 'react-router-dom'
import logo from '../../assests/logo/Logo-svg-rbg.svg'
import logo1 from '../../assests/logo/new-logo.svg'
import logo2 from '../../assests/logo/logo2.svg'
import { useSelector, useDispatch } from 'react-redux'
import { ACCOUNT_TYPE } from "../../utils/contsants"
import { TbLogout } from "react-icons/tb";
import { logout } from "../../services/operations/authAPI"

const Navbar = () => {

  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const location = useLocation()

  const dashboardRoutes = ['/dashboard/my-profile', '/dashboard/settings', /* Add other dashboard routes here */];
  const isDashboardPage = dashboardRoutes.some(route => location.pathname.includes(route));

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Your scroll handling logic here
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };


  return (
      <nav className='navbar'>
      {/*nav-left */}
        <div className="nav-left">
          <Link to='/'>
            <img style={{height:'100%', width:'150px'}}  src={logo} alt='logo' />
          </Link>
        </div>

      {/*nav-middle */}
       <div className="nav-middle flex">
        <ul>
          <li><button onClick={() => navigate('/')}>Home</button></li>
          <li><button onClick={() => navigate('/properties')}>Properties</button></li>
          <li><button onClick={() => navigate('/plans')}>Plans</button></li>
          <li><button onClick={() => navigate('/about')}>About Us</button></li>
          <li><button onClick={() => navigate('/contact')}>Contact Us</button></li>
        </ul>
       </div>

    {/* nav-right */}
    <div className="nav-right">
      {token === null && (
         <div className="nav-right1">
         <button onClick={() => navigate('/login')}>
           Log In
         </button>
       </div>
      )}
      {token === null && (
        <div className="nav-right2">
        <button onClick={() => navigate('/signup')}>
          Sign Up
        </button>
      </div>
      )}
      {/* nav-right after login */}
      <div >
        <Link style={{textDecoration:'none'}} to={'dashboard/my-profile'}>
          <button className="f-name">
            {token !== null && <p>{user.firstName}</p>}
            {token !== null && 
              <div className="profilepic">
                <img
                  src={user?.image}
                  alt={`profile-${user?.firstName}`}
                  className=""
                />
              </div>
            }
          </button>
        </Link>   
      </div>

        {token !==null && !isDashboardPage && (
          <div className="nav-right3">
            <button className='nav-right4' onClick={() => {dispatch(logout(navigate))}}>
              <TbLogout className='logout-icon'/>Log out
            </button>
          </div>
        )}
    </div>

    </nav>
    
    

  )
}

export default Navbar