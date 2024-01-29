import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FaLock } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { login } from '../services/operations/authAPI';
import { Link } from 'react-router-dom';

function LoginModal({ closeModal }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const { email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    closeModal(); // Close the modal after submitting
  };

  return (
    <div className="login-modal flex">
        <div className="login-page flex wrap flex-col">

        <button className="close-button" onClick={closeModal}>
          &times; {/* This is the "x" character for the close button */}
        </button>

      {/* Your modal content here */}
      <h1>Login</h1>
      <form onSubmit={handleOnSubmit} className="login-form">
        {/* ... (same as your existing login form) */}
        <div className="input flex" style={{marginTop:'30px'}}>
            <IoMail fontSize={18} className='user-icon' />
              <input
                required
                type="text"
                name="email"
                value={email}
                onChange={handleOnChange}
              />
              <label for="">Email Address<sup style={{color:'red'}}> *</sup></label>
            </div>

            <div className="input flex password">
              <FaLock className='lock-icon'/>
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={handleOnChange}
                />
                <label for="">Password<sup style={{color:'red'}}> *</sup></label>

                <span
                  onClick={() => setShowPassword((prev) => !prev)}
                  className='eye-btn'
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible fontSize={22} fill="#000000" />
                  ) : (
                    <AiOutlineEye fontSize={22} fill="#000000" />
                  )}
                </span>
            </div>

            <div className="login-bottom flex flex-col">

              <div className='forgot-password-div'>
                <Link to = '/forgot-password'style={{textDecoration:'none',color:'#0072E5'}} >
                  Forgot Password?
                </Link>  
              </div>

              <div className='signin-btn flex flex-col'>
                <button
                  type="submit"
                  className='custom-btn btn-1'
                >
                  Login In
                </button>
              </div>

              <div className="line">
                
              </div>

              <div className="link flex wrap">
                Don't have an account? <a href="/signup">Sign up!</a>
              </div>
            </div>
      </form>
    </div>
    </div>
  );
}

export default LoginModal;
