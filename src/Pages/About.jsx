import React from "react"

import aboutusheader from '../assests/images/aboutus-header.svg'

import ContactFormSection from "../components/core/AboutPage/ContactFormSection"

import foundingstory1 from '../assests/images/foundingstory.svg'
import ourmission from '../assests/images/ourmission.svg'
import ourvision from '../assests/images/ourvision.svg'

const About = () => {
  return (
      <div className="aboutus-wrapper">
      <section className="aboutus-section1">
        <div className="aboutus-section1-left">
          <header className="header">
          Innovating the Rental Industry
          </header>
          <p className="subheader">
            Rentez pioneers innovation in the rental industry, 
            offering a unified platform for all property types, 
            minimizing search time for customers. Our commitment 
            to streamlining the rental process distinguishes us as 
            industry leaders.
          </p>
        </div>

        <div className="aboutus-section1-right floating1">
          <div><img src={aboutusheader} alt="aboutusheader"/></div>
        </div>
        
      </section>

      <section className="border-richblack-700">
        <div className="content-wrapper">
          <div className="passion-statement">
            <span>We are dedicated to transforming the renting experience.
            Our groundbreaking platform merges technology, expertise,
            and community to deliver an unmatched rental journey.</span>
          </div>
        </div>
      </section>

      <div className="partition1" />

      <section>
        <div className="content-wrapper">
          <div className="flex-container">
            <div className="founding-story">
              <h1 className="founder-title">Our Founding Story</h1>
              <p className="text">
                Our property rental platform came into being from a 
                collective desire and dedication to revolutionize the real 
                estate market.It all started with a team of property 
                managers, developers, and real estate enthusiasts who 
                identified the growing demand for accessible, 
                customizable, and premium rental options in an 
                ever-expanding urban landscape.
              </p>
              <p id="text2" className="text">
                With years of experience in property management, 
                we encountered firsthand the constraints and complexities of 
                traditional renting processes.We firmly believed that 
                the search for a perfect rental should not be limited by 
                geographical constraints or constrained by outdated practices.
              </p>
            </div>
            <div className="founder-image">
              <img src={foundingstory1} alt="" />
            </div>
          </div>

          <div className="flex-container" style={{flexDirection:'row-reverse'}}>
            <div className="vision">
              <h1 className="vision-title">Our Vision</h1>
              <p className="text">
              With this mission at heart, we embarked on a journey to 
              create a premier rental platform that would redefine the 
              rental experience. Our team of seasoned professionals 
              worked diligently to craft a seamless and user-friendly 
              platform that merges advanced technology with comprehensive 
              property listings, facilitating a streamlined and 
              hassle-free renting process.
              </p>
              <p id="text2" className="text">
              Drawing from our extensive experience in property 
              management, we encountered the shortcomings and 
              complexities of traditional renting methods. 
              We strongly advocated for a rental ecosystem that 
              transcends physical limitations and geographic boundaries, 
              ensuring accessibility and convenience for all.
              </p>
            </div>
            <div className="founder-image1">
              <img src={ ourvision} alt="" />
            </div>
          </div>

          <div className="flex-container" >
            <div className="mission">
              <h1 className="mission-title">Our Mission</h1>
              <p className="text">
              Our mission extends beyond merely providing rental listings. 
              We aimed to cultivate a thriving community of renters, 
              where individuals can connect, share experiences, and 
              learn from each other. We understand that the rental journey 
              is enriched through collaboration and dialogue, and we 
              actively promote this culture through discussion forums, 
              live events, and networking opportunities.
              </p>
              <p id="text2" className="text">
              Leveraging our expertise in property management, 
              we firsthandly observed the limitations and hurdles of 
              traditional rental processes. We firmly believed in 
              breaking free from the confines of conventional practices,
              advocating for a rental landscape that transcends physical 
              barriers and geographic constraints.
              </p>
            </div>
            <div className="founder-image">
              <img src={ourmission} alt="" />
            </div>

          </div>
        </div>
      </section>


      {/* <div className="custom-shape-divider-top-1707325734">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
          </svg>
      </div> */}

      {/* <StatsComponenet /> */}

      {/* <div className="custom-shape-divider-top-1707326481">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
      </div> */}

      <div className="partition" />

      {/* contact form */}
      <section className="footer-section">
        <div className="content-wrapper">
          <ContactFormSection />
        </div>
      </section>
      </div>
    
    
  );
};

export default About;