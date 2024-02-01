import React, { useState } from 'react'
// import { toast } from 'react-toastify';
import { PROPERTY_STATUS } from '../../../utils/contsants';import { useDispatch, useSelector } from 'react-redux';
import Card from '../../common/Card';


const MyListing = ({properties}) => {

  // const [properties, setproperties] = useState([])
  console.log('Properties in PropertyList component:', properties);


  return (

    <div className='mylisting-wrapper' style={{height: '800px', width:'500px'}}>
      <h1>My Properties</h1>
      {properties.map((property) => (
      <Card key={property._id} property={property} />
      ))}
    </div>
  )
}

export default MyListing