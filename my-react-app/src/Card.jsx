import profilePicture from './assets/2.jpg';

function Card(){
    return(
        <div className='card'>
            <img className='card-image' alt='profilePicture' src={profilePicture} width={200} height={200}></img>
            <h2 className='card-title'>siccccccc</h2>
            <p className='card-text'>I love music.</p>
        </div>
    );
};

export default Card;