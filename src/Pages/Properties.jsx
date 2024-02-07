import React from 'react'
import Card from "../components/common/Card";
import { useEffect, useState } from "react";

import { getAllProperty } from "../services/operations/propertyAPI";
import { useSelector } from 'react-redux';

const Properties = () => {

    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useSelector((state) => state.profile)
    
    useEffect(() => {
      const getProperty = async () => {
        setLoading(true);
        const result = await getAllProperty();
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
        <div className="myproperties-container">
          <div className="my-properties-wrapper">
            {loading ? (
              <div className="loader">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
              </div>
            ) : (
              <>
                <h1>All Properties</h1>
                <div className="my-properties">
                  {properties?.map((property, index) => {
                    return (
                      <Card
                      className="property-card"
                        key={index}
                        isSeller={false}
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
    
}

export default Properties