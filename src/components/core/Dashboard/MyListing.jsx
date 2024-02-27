import React from "react";
import Card from "../../../components/common/Card";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { getSellersListings } from "../../../services/operations/propertyAPI";
import { Link } from "react-router-dom";

const MyListing = () => {

  const [properties, setProperties] = useState([]);
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const getProperty = async () => {
      setLoading(true);
      try {
        const result = await getSellersListings(token);
        if (result) {
          setProperties(result);
          console.log('result: ', result);
        }
      } catch (error) {
        console.error("Failed to fetch properties", error);
      } finally {
        setLoading(false);
      }
    };
  
    getProperty();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mylisting-container">
      <div className="my-listings-wrapper">
        {loading ? (
          <div className="loader">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
          </div>
        ) : properties.length > 0 ? (
          <>
            <h1 className="my-listings-wrapper-h1">My Listings</h1>
            <div className="my-listings">
              {properties.map((property, index) => (
                <Card
                  key={index}
                  isSeller={true}
                  propertyId={property._id}
                  img={property.thumbnail}
                  bhk={property.bhk}
                  bath={property.bathrooms}
                  size={property.size}
                  price={property.price}
                  pricePer={property.pricePer}
                  city={property.city}
                  state={property.state}
                  type={property.propertyType}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="no-listing-found">
            <h2>No listings found</h2>
            <Link to='/dashboard/create-listing'>
              <button>Add Listing</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
  
};

export default MyListing;