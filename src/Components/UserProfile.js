import "../ComponentsCss/UserProfile.css";

const user = {
  profilePic: "profile.png",
  name: "Michael Kleemoff",
  title: "React Developer",
  hobby: "Acrylic Painting"
}

const UserProfile = () => {
  return (
		<main className="container">
			<img
				src={user.profilePic}
				alt="profile"	
				className="profile-pic"
			/>
			<section className="profile-style">
				<h2>{user.name}</h2>
				<h3>{user.title}</h3>
				<p>{user.hobby}</p>
			</section>
		</main>
	);
  
}

export default UserProfile;