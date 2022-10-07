import React from "react";

const ContactUserCard = () => {
  return (
    <div
      className="userProfile"
      style={{
        display: "flex",
        boxShadow: "0 6px 6px hsl(0deg 0% 0% / 0.3)",
        marginTop: "20px",
      }}
    >
      <img
        src="https://xsgames.co/randomusers/avatar.php?g=female"
        style={{}}
        width={100}
        alt="profile.png"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h4 className="name" style={{ paddingTop: "50px" }}>
          Emily Smith
        </h4>
        <h6 className="jobTitle" style={{}}>
          React Creator
        </h6>
        <p className="loremIpsem">
          Lorem ipsum dolor sit amet. Ut commodi qui vero iusto sit accusantium
          delectus qui aliquid veniam
        </p>
      </div>
    </div>
  );
};

export default ContactUserCard;
