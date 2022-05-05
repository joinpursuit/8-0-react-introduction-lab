import React from "react";
import "./UserProfile.css"

const userInfo = {
    name : "Kenyetta Griffin",
    position : "Program Manager",
    adminName :"Kgrif1515",
}




const UserProfile = () => {
    return (
        <div className="userCardInfo">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" alt="User"></img>
            <h2>{userInfo.name}</h2>
            <h3>{userInfo.position}</h3>
            <h4>{userInfo.adminName}</h4>
        </div>
    )
};

export default UserProfile;