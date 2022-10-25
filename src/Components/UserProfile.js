import React from "react";

const UserProfile = () => {
  return (
    <div
    className="userProfile"
    style={{
      display: "flex",
      background: "whitesmoke",
      boxShadow: "4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38)",
      padding: "10px",
    }}
  >
    <img
      src="https://xsgames.co/randomusers/avatar.php?g=male"
      style={{ borderRadius: "60%" }}
      width={150}
      alt="profile.png"
    />
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 10,
      }}
    >
      <h4 className="name" style={{}}>
        Jordan Walke
      </h4>
      <h6 className="jobTitle" style={{}}>
        React Creator
      </h6>
      <p className="loremIpsem">
        Lorem ipsum dolor sit amet. Vel expedita fugiat{" "}
        <em>
          Ut commodi qui vero iusto sit accusantium delectus qui aliquid
          veniam
        </em>
        . Ab inventore assumenda{" "}
        <strong>Est laborum qui quia tempore eum soluta illo</strong> et
        veritatis commodi.
      </p>
    </div>
  </div>
);
};

export default UserProfile;