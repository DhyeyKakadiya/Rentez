import React, { useEffect } from 'react'
import { useState } from "react"
import { FaCheck } from "react-icons/fa"
import { FiEdit2 } from "react-icons/fi"
import { HiClock } from "react-icons/hi"
import { RiDeleteBin6Line } from "react-icons/ri"
import { useNavigate } from "react-router-dom"

import {
    getAllProperty,
    getPropertyDetail,
} from "../../services/operations/propertyAPI"
import { PROPERTY_STATUS } from "../../utils/contsants"
import { useDispatch, useSelector } from 'react-redux'

const Card = (property) => {
    console.log('Property in Card component:', property);

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { token } = useSelector((state) => state.auth)
    const [loading, setLoading] = useState(false)
    const [properties, setProperties] = useState([]);
    // const [confirmationModal, setConfirmationModal] = useState(null)
    const TRUNCATE_LENGTH = 30

    const { thumbnail, propertyType, price, city, state } = property;

  return (
    <div className='card-container'>
         <img src={thumbnail} alt={propertyType} className="property-thumbnail" />
      <div className="property-details">
        <h3>{propertyType}</h3>
        <p>Price: ${price}</p>
        <p>{city}, {state}</p>
      </div>
    </div>
  )
}

export default Card