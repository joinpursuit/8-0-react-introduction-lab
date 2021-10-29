import image from "/Users/EricCave_1/Documents/pursuit_labs/8-0-react-introduction-lab/src/Components/IMG_6560.JPG";

function UserProfile() {
  return (
    <div class="profile">
      <div>
        <img src={image} alt="Me" width="100" height="100" />
      </div>

      <h1>Eric Cave</h1>
      <h2>Full Stack Developer</h2>
      <p>Lorem Ipsem</p>
    </div>
  );
}

export default UserProfile;
