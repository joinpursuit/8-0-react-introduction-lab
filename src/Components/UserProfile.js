import React from "react";



class UserProfile extends React.Component{
    constructor(){
        super()
    }

    render(){
        return (
            <div className="User-profile">
                <img src="https://cdn.pastemagazine.com/www/blogs/lists/2020/10/29/johnny-bravo-sq.png" alt="photo" />
                <div className="User-basic-info">
                    <h3>Jordan Walke</h3>
                    <h4>React Creator</h4>
                    <p>Lorem Ipsem</p>
                </div>
            </div>
        );
    }
}

export default UserProfile;