import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assests/logo/Logo-svg-rbg.svg'
import logo1 from '../../assests/logo/new-logo.svg'
import logo2 from '../../assests/logo/logo2.svg'


const Navbar = () => {

  const navigate = useNavigate();

  return (
      <div className='navbar'>
      {/*nav-left */}
        <Link to='/'>
          <img style={{height:'100%', width:'150px'}}  src={logo} alt='logo' />
        </Link>

      {/*nav-middle */}
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/properties">Properties</a></li>
          <li><a href="/plans">Plans</a></li>
          <li><a href="/aboutus">About Us</a></li>
          <li><a href="/contactus">Contact Us</a></li>
        </ul>

      <div className="nav-right">
        <button onClick={() => navigate('/signup')}>
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default Navbar