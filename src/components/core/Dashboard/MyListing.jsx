import React from "react";
import Card from "../../../components/common/Card";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { getSellersListings } from "../../../services/operations/propertyAPI";

const MyListing = () => {

  const [properties, setProperties] = useState([]);
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const getProperty = async () => {
      setLoading(true);
      const result = await getSellersListings(token);
      if (result) {
        setProperties(result);
        console.log('result: ',result)
      }
    };
    
    getProperty();
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mylisting-container">
      <div className="my-listings-wrapper">
        {loading ? (
          <span className="loader">loading...</span>
        ) : (
          <>
            <h1>My Listings</h1>
            <div className="my-listings">
              {properties?.map((property, index) => {
                return (
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
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MyListing;