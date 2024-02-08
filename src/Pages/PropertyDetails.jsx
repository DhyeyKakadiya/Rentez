import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPropertyDetail, notifySeller } from "../services/operations/propertyAPI";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosPricetags } from "react-icons/io";
import { SlLocationPin  } from "react-icons/sl";
import { TbResize } from "react-icons/tb";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Carousel } from 'react-responsive-carousel';

import Footer from "./Footer";
import ReadMore from "./ReadMore";

const PropertyDetails = () => {

  const [properties, setProperties] = useState([null]);
  const [loading, setLoading] = useState(true);

  const { propertyId } = useParams();
  const { user } = useSelector((state) => state.profile)

  // const [response, setResponse] = useState(null)
  // const [confirmationModal, setConfirmationModal] = useState(null)

  useEffect(() => {
    const getProperty = async () => {
      setLoading(true);
      const result = await getPropertyDetail(propertyId);
      console.log(result);
      if (result) {
        setProperties(result);
      }
    };
    getProperty();
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propertyId]);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const sliderRef = useRef(); 
  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index); // Manually move the slider to the selected index
    }
  };

  const sliderSettings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setSelectedImageIndex(next),
    
  };
  
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    contactNumber: "",
    msg: "",
  });

  const { email, fullName, contactNumber, msg } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    notifySeller(properties?.seller?.email, email, fullName, contactNumber, msg);
    // navigate("/");
    setFormData({
      email: "",
      fullName: "",
      contactNumber: "",
      msg: "",
    });
  };

  return(

    
    <div className="property-details-container">
    {/* <h1>Property Detail Page</h1> */}

{/* main slider */}
    <div className="property-img-slider">
        {properties.photos && properties.photos.length > 0 && (
          <Slider {...sliderSettings} ref={sliderRef} initialSlide={selectedImageIndex}>
            {properties.photos.map((photo, index) => (
              <div key={index} className="slider-item">
                <img src={photo} alt="photos" />
              </div>
            ))}
          </Slider>
        )}
      </div>

      {/* main 2 */}
      <div className="property-highlight">
        {properties.photos && properties.photos.length > 0 && (
          properties.photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt="photos"
              onClick={() => handleImageClick(index)}
              className={index === selectedImageIndex ? 'selected' : ''}
            />
          ))
        )}
      </div>


    <div className="property-content">

     <div className="property-highlights-wrapper">

      <div className="property-highlights">
        <div className="property-title">

          <div className="property-type">
            {properties.propertyType}
          </div>

          {/* <div className="property-seller">
            Listed by - {`${properties.seller?.firstName} ${properties.seller?.lastName} ${properties.seller?.email}`}
          </div> */}

        </div>
        
        <div className="property-address">
          <div className="property-address-inside">
          <SlLocationPin  style={{fontSize:'20px', color:'#3770FF',marginRight:'5px'}}/>
          {properties.address}, {properties.city}, {properties.state} - {properties.pincode}
          </div>
          
        </div>
        
        <div className="property-price">
          <div className="flex" style={{alignItems:'center',gap:'10px',fontWeight:'500'}}>
            <IoIosPricetags style={{ color:'#3770FF'}}/>Price:
          </div> 
          <div style={{color:'#3770FF', fontWeight: '500'}}>
            ₹{properties.price}/{properties.pricePer}
          </div>
        </div>

        <div className="property-description">
          <h3>Property Information</h3>
          <ReadMore text={properties.description}
          maxLength={400}
          />
          
        </div>

        <div className="property-features">
          <h2>
            Home Details
          </h2>
          <div className="feature-item-container flex">
            
            <div className="feature-item flex flex-col">
            <IoBedOutline style={{color:'#3770FF', fontSize:'30px'}}/>
              <div style={{fontSize:'20px' , gap:"5px",display:'flex'}}>
                <span style={{color:'#3770FF'}}>
                  {properties.bhk}
                </span>
                BHK
              </div>
            </div>

            <div className="feature-item flex flex-col">
              <LuBath style={{color:'#3770FF', fontSize:'30px'}}/>
              <div style={{fontSize:'20px', gap:"5px",display:'flex'}}>
                <span style={{color:'#3770FF'}}>
                  {properties.bathrooms}
                </span> 
                Baths
              </div>
            </div>

            <div className="feature-item flex flex-col">
              <TbResize style={{color:'#3770FF', fontSize:'30px'}}/>
              <div style={{fontSize:'20px', gap:"5px",display:'flex'}}>
                <span style={{color:'#3770FF'}}>
                  {properties.size}
                </span> 
                Sq.ft
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="property-seller">

        <img src={`${properties.seller?.image}`} alt="profile-photo" style={{width:'70px', height:'70px',borderRadius: '30px'}} />
      
        <div className="flex flex-col" style={{ width:'100%',justifyContent:'center', gap:'10px'}}>

          <div className="flex" style={{justifyContent:'space-between', width:'100%',alignItems:'center'}}>
            <p style={{textTransform:'capitalize'}}>
            {`${properties.seller?.firstName}
            ${properties.seller?.lastName}`}
            </p>

            <p>{`${properties.seller?.email}`}</p>
          </div>

          <p>{properties.seller?.additionalDetails?.about ?? "About Seller"}</p>

        </div>

      </div>

      </div>

      <div className="seller-form-container">
            <form className="seller-form" onSubmit={handleOnSubmit}>
              <h1>Request an Inquiry</h1>
              <input
                required
                type="text"
                name="fullName"
                value={fullName}
                onChange={handleOnChange}
                placeholder="Full Name*"
                className="input-seller-form"
                id="input-seller-form1"
              />
              <input
                required
                type="text"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Email*"
                className="input-seller-form"
              />
              <input
                required
                type="number"
                name="contactNumber"
                value={contactNumber}
                max="10"
                min="10"
                onChange={handleOnChange}
                placeholder="Phone Number*"
                className="input-seller-form"
              />
              <input
                required
                type="text"
                name="msg"
                value={msg}
                onChange={handleOnChange}
                placeholder="Message*"
                className="input-seller-form"
              />
              <div className="send-req">
                <button type="submit" className="special-btn">
                  Send Request
                </button>
              </div>
            </form>
      </div>

    </div>

    <Footer/>
            
  </div>
  );
  
};

export default PropertyDetails;