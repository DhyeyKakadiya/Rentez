import React from 'react'
import { useSelector } from 'react-redux'
import IconBtn from '../../common/IconBtn'
import { Link, useNavigate } from 'react-router-dom'
import { RiEditBoxLine } from "react-icons/ri";
import { formattedDate } from "../../../utils/dateFormatter"

const MyProfile = () => {

  const { user } = useSelector((state) => state.profile)
  const navigate = useNavigate()

  return (
    // <div className="welcome-txt">
    //   <h1 style={{textTransform:'capitalize'}}>
    //     Hello, {user.firstName}
    //   </h1>

    //   <div className='profile-1'>

    //     <div className='profile-1-jr'>
    //       <img src={user?.image}
    //       alt={`profile=${user?.firstName}`} 
    //       />

    //       <div className="flex flex-col"
    //       style={{justifyContent:'center'}}>
    //         <p> {user?.firstName} {user?.lastName}</p>
    //         <p>{user?.email}</p>
    //       </div>

    //     </div>

    //     <IconBtn 
    //     text='Edit'
    //     onclick={()=>{
    //       navigate("/dashboard/settings")
    //     }}>

    //     </IconBtn>
        
    //     <Link to={'dashboard/settings'}>
    //       <button className="edit-btn">
    //         Edit
    //       </button>
    //     </Link>


    //   </div>

    // </div>


    <div className="profile-card">
      <h1> Hello, {user.firstName}</h1>

      <div className="profile-info-container">
        <div className="profile-details">
        <img src={user?.image}
          alt={`profile=${user?.firstName}`} 
          />
          <div className="space-y-1">
            <p className="text-richblack-5">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="text-richblack-300">{user?.email}</p>
          </div>
        </div>

          <button className="edit-btn"
              onClick={() => {
                navigate("/dashboard/settings");
              }}>
            <RiEditBoxLine />
          </button>

      </div>

      <div className="partition1"/>

      <div className="profile-section">

      <div className="details-container">
          <div className="details-header">
            <p className="text-richblack-5">Personal Details</p>
            <button
              className="edit-btn"
              onClick={() => {
                navigate("/dashboard/settings");
              }}
            >
              <RiEditBoxLine />
            </button>
          </div>
          <div className="personal-details">
            <div className="detail">
              <p className="label">First Name</p>
              <p className="value">{user?.firstName}</p>
            </div>
            <div className="detail">
              <p className="label">Last Name</p>
              <p className="value">{user?.lastName}</p>
            </div>
            <div className="detail">
              <p className="label">Email</p>
              <p className="value">{user?.email}</p>
            </div>
            <div className="detail">
              <p className="label">Gender</p>
              <p className="value">
                {user?.additionalDetails?.gender ?? "Add Gender"}
              </p>
            </div>
            <div className="detail">
              <p className="label">Phone Number</p>
              <p className="value">
                {user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
              </p>
            </div>
            <div className="detail">
              <p className="label">Date Of Birth</p>
              <p className="value">
                {formattedDate(user?.additionalDetails?.dateOfBirth) ??
                  "Add Date Of Birth"}
              </p>
            </div>
          </div>
        </div>
        

        <div className="partition1"/>

        

        <div className="details-container">
          <div className="details-header">
            <p className="text-richblack-5">About</p>
            <button
              className="edit-btn"
              onClick={() => {
                navigate("/dashboard/settings");
              }}
            >
              <RiEditBoxLine />
            </button>
          </div>
          <p
            className={`${
              user?.additionalDetails?.about
                ? "text-richblack-5"
                : "text-richblack-400"
            }`}
          >
            {user?.additionalDetails?.about ?? "Write Something About Yourself"}
          </p>
        </div>
      </div>
    </div>
  );
}
export default MyProfile