import React, { useEffect, useState } from 'react'
import { Link, useNavigate, matchPath, useLocation } from 'react-router-dom'
import logo from '../../assests/logo/Logo-svg-rbg.svg'
import { useSelector, useDispatch } from 'react-redux'
import { TbLogout } from "react-icons/tb";
import { logout } from "../../services/operations/authAPI"
import ConfirmationModal from '../common/ConfirmationModal'



const Navbar = ({ whiteBackground }) => {

  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const location = useLocation()
  const [confirmationModal, setConfirmationModal] = useState(null)

  //no logout button in dashboard
  const dashboardRoutes = ['/dashboard/my-profile', '/dashboard/settings','/dashboard/my-listing','/dashboard/create-listing'];
  const isDashboardPage = dashboardRoutes.some(route => location.pathname.includes(route));

  //css active on nav routes
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  const NavbarLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Properties",
      path: '/properties',
    },
    {
      title: "Plans",
      path: '/plans',
    },
    {
      title: "About Us",
      path: "/about",
    },
  ];
  console.log(NavbarLinks);

  // white navbar on scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // scroll handling logic here
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };


  return (
    <nav className={`navbar ${whiteBackground ? 'white-background' : 'blue-background'}`}>
      {/*nav-left */}
        <div className="nav-left">
          <Link to='/'>
            <img style={{height:'100%', width:'150px'}}  src={logo} alt='logo' />
          </Link>
        </div>

      {/*nav-middle */}
       <div className="nav-middle flex">
        <ul>
          {
            NavbarLinks.map((link, index) => (
              <li key={index}>
                <button onClick={() => navigate(link?.path)}>
                  <span
                    className={`${
                      matchRoute(link?.path)
                        ? 'active'
                        : ''
                    }`}
                  >
                    {link.title}
                  </span>
                </button>
              </li>
            ))
          }
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
            <button className='nav-right4' onClick={() => 
            setConfirmationModal({
              text1: "Are you sure?",
              text2: "You will be logged out of your account.",
              btn1Text: "Logout",
              btn2Text: "Cancel",
              btn1Handler: () => {dispatch(logout(navigate));
                                  setConfirmationModal(null)},
              btn2Handler: () => setConfirmationModal(null),
          })}>
              <TbLogout className='logout-icon'/>Log out
            </button>
          </div>
        )}
    </div>
    {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}

    </nav>
    
    

  )
}

export default Navbar