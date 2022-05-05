
const up = {
    name: "Jordan Walke",
    position: "React Developer",
    text: "Lorem Ipsom"
}

const UserProfile = () => {
    return (
        <div>
            <article>
            <h4>{up.name}</h4>
            <h6>{up.position}</h6>
            <h6>{up.text}</h6>
            </article>
        </div>
    )
}
export default UserProfile