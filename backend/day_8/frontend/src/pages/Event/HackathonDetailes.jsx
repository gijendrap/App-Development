import React from 'react';
import './Event.css'
import backup from '../../images/backup.png'
const HackathonDetails = ({ hackathon, onBackClick }) => {
  return (
    <div>
    <div className='bodyhd'>
    <div>
      <img src={backup} alt="" className="backup"/>    

    <div className="moreon">
    {/* <img className="moreon-image" alt="Card" src="https://images.squarespace-cdn.com/content/v1/6387a86cf6a0e955eea76d2e/6d0bb590-759a-407d-b346-81fdf4052094/Klever_Hackathon_v3.png" /> */}
    <div className="moreon-content">
      <h2 className="moreon-title01">runs from</h2>
      <h2 className="moreon-title">{hackathon.date}</h2>
      <h2 className="moreon-title01">happening</h2>
    <h2 className="moreon-title">{hackathon.location}</h2>
    <p className="moreon-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis ante sit amet tellus ornare tincidunt.</p>
    <div className="moreon-buttons">
    <button className="moreon-button">Learn More</button>
    </div>
    </div>
    </div>


     <img className="hakathonimage" src={hackathon.imageUrl}   alt='ima' />
      <h1 className='headhd'>{hackathon.title}</h1>
      <p className='parahd'>{hackathon.para}</p>
      <button className="card-button0">Apply now</button>
      <button onClick={onBackClick}>Back to Hackathons</button>
    </div>
    </div>
    </div>
  );
};

export default HackathonDetails;
