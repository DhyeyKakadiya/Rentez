import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
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



  return (
      <nav className='navbar'>
      {/*nav-left */}
        <div className="nav-left">
          <Link to='/'>
            <img style={{height:'100%', width:'150px'}}  src={logo} alt='logo' />
          </Link>
        </div>

      {/*nav-middle */}
       <div className="nav-right flex">
        <ul>
          <li><button onClick={() => navigate('/')}>Home</button></li>
          <li><button onClick={() => navigate('/properties')}>Properties</button></li>
          <li><button onClick={() => navigate('/plans')}>Plans</button></li>
          <li><button onClick={() => navigate('/about')}>About Us</button></li>
          <li><button onClick={() => navigate('/contact')}>Contact Us</button></li>
        </ul>
       </div>

     {/* <div className="nav-right">
      <div className="nav-right1">
          <button onClick={() => navigate('/login')}>
            Log In
          </button>
        </div>

        <div className="nav-right2">
          <button onClick={() => navigate('/signup')}>
            Sign Up
          </button>
        </div>
     </div> */}

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
        {token !== null && 
        <Link to={'/dashboard'}>
        <div className="profilepic">
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className=""
          />
        </div>
      </Link>
      }
        {token !==null && (
          <div className="nav-right3">
            <button className='nav-right4' onClick={() => {dispatch(logout(navigate))}}>Log out <TbLogout className='logout-icon'/></button>
          </div>
        )}
    </div>

    </nav>
    
    

  )
}

export default Navbar