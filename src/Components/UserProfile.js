import React from "react";  
import pic from './profile.png';

const UserProfile =() =>{
        return <div>
           <img src={pic} alt="profile" />
           <h2>Profile Name</h2>
           <p> React Developer</p>
        </div>
        
    }



export default UserProfile;
