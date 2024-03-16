import React from 'react'
import { useAuth } from './Auth'
import userimg from "../component/img/user-img.jpg";

export const Profile = () => {
    const auth=useAuth()
    const handlelogout=()=>{
        auth.logout()
    }
  return (
    <div className='pro-p'>
        <img src={userimg} style={{ width: '300px', height: '300px' , borderRadius:'50%'}} /><br></br>
      welcome to our website {auth.user}<br></br><br></br>
      <button onClick={handlelogout}>logout</button>
    </div>
  )
}
