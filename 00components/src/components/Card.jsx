import profilePic from '../assets/ghostRider.jpg'
import './Card.css'

function Card(){
    return (
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture" />
            <h2 className='card-title'>Eric Gardner</h2>
            <p className='card-description'>I am a Designer learning React</p>
        </div>
    );
}
export default Card
