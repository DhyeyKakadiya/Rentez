import React from 'react'
import { useSelector } from 'react-redux'
import IconBtn from '../../common/IconBtn'
import { useNavigate } from 'react-router-dom'

const MyProfile = () => {

  const { user } = useSelector((state) => state.profile)
  const navigate = useNavigate()

  return (
    <div className="welcome-txt">
      <h1 style={{textTransform:'capitalize'}}>
        {user.firstName}'s Profile
      </h1>

      <div className='profile-1'>

        <div className='profile-1-jr'>
          <img src={user?.image}
          alt={`profile=${user?.firstName}`} 
          />

          <div className="flex flex-col"
          style={{justifyContent:'center'}}>
            <p> {user?.firstName} {user?.lastName}</p>
            <p>{user?.email}</p>
          </div>

        </div>

        <IconBtn 
        text='Edit'
        onclick={()=>{
          navigate("/dashboard/settings")
        }}>

        </IconBtn>
      </div>

    </div>


  )
}

export default MyProfile