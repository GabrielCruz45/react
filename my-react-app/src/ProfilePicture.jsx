export default function ProfilePicture() {
    const imageURL = './src/assets/2.jpg';
    const height = 50;
    const width = 50;

    const handleClick = (event) => {event.target.style.display = "none"};

    return(
        <img className="profile-picture" src={imageURL} onClick={(event) => handleClick(event)} height={height} width={width}></img>
    );
};