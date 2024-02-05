import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPropertyDetail } from "../services/operations/propertyAPI";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosPricetags } from "react-icons/io";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";

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


  //

  const sliderHighlightRef = useRef();

  const sliderHighlightSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  


  return(
    <div className="property-details-container">
    {/* <h1>Property Detail Page</h1> */}

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

      <div className="property-highlight-container">
  {properties.photos && properties.photos.length > 0 && (
    <Slider {...sliderHighlightSettings} ref={sliderHighlightRef} className="property-highlight-slider">
      {properties.photos.map((photo, index) => (
        <div key={index} className="slider-item">
          <img
            src={photo}
            alt="photos"
            onClick={() => handleImageClick(index)}
            className={index === selectedImageIndex ? "selected" : ""}
          />
        </div>
      ))}
    </Slider>
  )}
</div>

      {/* <div className="property-highlight">
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
      </div> */}

    <div className="property-content">
      <div className="property-highlights">
        <div className="property-title">

          <div className="property-type">
            {properties.propertyType}
          </div>

          <div className="property-seller">
            Listed by - {`${properties.seller?.firstName} ${properties.seller?.lastName}`}
          </div>

        </div>
        
        <div className="property-address">
          {properties.address}, <br/> {properties.city}, {properties.state},<br/> {properties.pincode}
        </div>
        
        <div className="property-price">
          <div className="flex" style={{alignItems:'center',gap:'10px', color:'gray'}}>
            <IoIosPricetags/>Price
          </div> 
          <div>
            ₹{properties.price}/{properties.pricePer}
          </div>
        </div>

        <div className="property-description">{properties.description}</div>

        <div className="property-features">
          <div className="feature-item">BHK: {properties.bhk}</div>
          <div className="feature-item">Bathrooms: {properties.bathrooms}</div>
          <div className="feature-item">Size: {properties.size}</div>
        </div>
      </div>

      <div className="seller-form">
        <h2>seller form</h2>
      </div>
    </div>

    <Footer/>
            
  </div>
  );
  
};

export default PropertyDetails;