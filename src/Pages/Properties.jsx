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
        <>
        {/* Background balls */}
                      <div className="background-balls">
                        <div className="ball ball1"></div>
                        <div className="ball ball2"></div>
                        <div className="ball ball3"></div>
                        <div className="ball ball4"></div>
                        <div className="ball ball5"></div>
                        <div className="ball ball6"></div>
                        <div className="ball ball7"></div>
                        <div className="ball ball8"></div>
                    </div>
                {/* <h1>All Properties</h1> */}
                  <div className="my-properties">
                    {
                      loading ? (
                        <>
                        {properties?.slice(0, 6).map((property, index) => (
                          <div className="skeleton-loader" key={index}>
                            <div className="skeleton-loader-wrapper">
                              <div className="skeleton-loader-circle"></div> 
                              <div className="line-1"></div>
                              <div className="line-2"></div>
                              <div className="line-3"></div>
                              <div className="line-3a"></div>
                              <div className="line-4"></div>
                            </div>
                          </div>
                        ))}
                        </>
                      ) : (
                        <>
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
                        </>
                      )
                    }
                    
                  </div>
              </>
        </div>
      </div>
      );
    
}

export default Properties