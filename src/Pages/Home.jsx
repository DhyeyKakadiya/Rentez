import React from 'react'
import '../index.css'
import house from '../assests/images/house.png'
import flat from '../assests/images/flat.png'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-router-dom'
// import home from '../assests/logo/home1.svg'
import home from '../assests/logo/wired-gradient-63-home-semi-loop.gif'
import eye from '../assests/logo/wired-gradient-69-eye (1).gif'
// import eye from '../assests/logo/eye.svg'
import happyface from '../assests/logo/wired-gradient-261-emoji-smile.gif'
// import happyface from '../assests/logo/happyface.svg'
import search from '../assests/logo/wired-gradient-19-magnifier-zoom-search.gif'
// import search from '../assests/logo/search1.svg'
import { useNavigate } from 'react-router-dom'
// import fire from 'https://iconscout.com/lottie-animation/rupee-8472086'
// import './section3.css'
import { Fade, JackInTheBox, Slide } from "react-awesome-reveal";

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className='container selector'>
      {/* section-1 hero */}
        <section className='section-wrapper wrap'>
        <div className='home-hero1 flex wrapper'>
          
          <div className='home-hero1-left'>
            <Fade triggerOnce direction='left' duration='2000'>
              <h1>
                <span className='text-description'>Unlock your ideal space with seamless renting - </span>
                <span className='typeanimation'>
                  <TypeAnimation
                  style={{whiteSpace: 'pre-line'}}
                  sequence={['\nFlat',1000,'\nVilla',1000,'\nFarmhouse',1000,'\nBunglow',1000,'\nLand',1000]}
                  repeat={Infinity}
                  />
                </span>
              </h1>
            </Fade>
              
            <Fade triggerOnce direction='right' duration='2000'>
              <div className='get-started-div'>
                  <button className="custom-btn btn-1" onClick={() => navigate('/signup')}>Get Started</button>
              </div>
            </Fade>
              
          </div>

          <div className='home-hero1-right floating'>
              <img src={house} alt='house'></img>
          </div>

        </div>
        </section>

        {/* curve img */}
        <div className="custom-shape-divider-top-1705728335">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" className="shape-fill"></path>
          </svg>
        </div>

    {/* section-2 hero2*/}

      <section className="home-hero2">
        <div className="home-hero2-main">

          {/* left */}
          <div className="custom-left">
            <div className="custom-left-under flex">
              <p>
                Simple & easy way to find your dream Appointment.
              </p>
              <h3>
                Simple & easy way to find your dream Appointment.
              </h3>

              <button style={{alignItems:'flex-end',display:'flex'}} className="custom-btn btn-1" onClick={() => navigate('/signup')} >Learn More</button>
            </div>
              
            
          </div>

          {/* right */}
          <div className="custom-right">
            <div className="custom-grid">
              <div className="custom-element">
                  <img className="custom-icon" src={search} alt='search'></img>
                  <p className="custom-item-text">
                    Search <br /> your Location
                  </p>
              </div>
              <div className="custom-element">
                  <img className="custom-icon" src={eye} alt='eye'></img>
                  <p className="custom-item-text">
                    Visit <br /> Appointment
                  </p>
              </div>
              <div className="custom-element">
                    <img className="custom-icon" src={home} alt='home'></img>
                  <p className="custom-item-text">
                    Get your <br /> Dream House
                  </p>
              </div>
              <div className="custom-element">
                  <img className="custom-icon" src={happyface} alt='happyface'></img>
                  <p className="custom-item-text">
                    Enjoy your <br /> Appointment
                  </p>
              </div>
            </div>
          </div>
        </div>
      </section>
        

        {/* section-3 hero3*/}
        <section className="home-hero3 section-wrapper flex wrap">

        <div className="padding flex">
        <div className="home-hero3-under-1">
              <img style={{height: '30px', width: '30px',boxShadow: 'rgba(0, 0, 0, 0.1) 0px 5px 16px',borderRadius:'10px', backgroundColor:'white'}} src={search} alt='search'></img>
              <div>
                <p style={{fontSize: '35px',fontWeight: '600',paddingTop: '15px'}}>
                  ₹5.1L
                </p>
                <p style={{fontSize: '25px',fontWeight: '500',paddingTop: '15px'}}>
                  Total
                </p>
                <p style={{fontSize: '25px',fontWeight: '500'}}>Properties transactions</p>
              </div>
            </div>

          <div className="home-hero3-under-2">
            <img style={{height: '30px', width: '30px',boxShadow: 'rgba(0, 0, 0, 0.1) 0px 5px 16px',borderRadius:'10px', backgroundColor:'white'}} src={search} alt='search'></img>
            <div>
              <p style={{fontSize: '35px',fontWeight: '600',paddingTop: '15px'}}>
              12K+
              </p>
              <p style={{fontSize: '25px',fontWeight: '500',paddingTop: '15px'}}>
              Properties for Rent
              </p>
              <p style={{fontSize: '25px',fontWeight: '500'}}>Successfully</p>
            </div>
          </div>
          
          <div className="home-hero3-under-3">
            <img style={{height: '30px', width: '30px' ,boxShadow: 'rgba(0, 0, 0, 0.1) 0px 5px 16px',borderRadius:'10px', backgroundColor:'white'}} src={search} alt='search'></img>
            <div>
              <p style={{fontSize: '35px',fontWeight: '600',paddingTop: '15px'}}>
                150
              </p>
              <p style={{fontSize: '25px',fontWeight: '500',paddingTop: '15px'}}>
                Daily completed
              </p>
              <p style={{fontSize: '25px',fontWeight: '500'}}>transactions</p>
            </div>
          </div>

          <div className="home-hero3-under-4">
            <img style={{height: '30px', width: '30px' ,boxShadow: 'rgba(0, 0, 0, 0.1) 0px 5px 16px',borderRadius:'10px', backgroundColor:'white'}} src={search} alt='search'></img>
            <div>
              <p style={{fontSize: '35px',fontWeight: '600',paddingTop: '15px'}}>
                600+
              </p>
              <p style={{fontSize: '25px',fontWeight: '500',paddingTop: '15px'}}>
                Regular Clients
              </p>
              <p style={{fontSize: '25px',fontWeight: '500'}}>Across Globe</p>
            </div>
          </div>
        </div>
            

        </section>


        {/* <div className="custom-shape-divider-bottom-1705730206">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
          </svg>
        </div> */}

      {/* section-4 hero4*/}
      <div className="hero4">

      </div>

      {/* section-5 hero5*/}

    </div>
  )
}

export default Home