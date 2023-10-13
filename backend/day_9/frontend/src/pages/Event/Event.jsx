import React, { Component } from 'react';
import './Event.css'
import Navbar from '../../Navcomponents/Navbar';
import Footer from '../../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import HackathonDetails from './HackathonDetailes'
import img1 from '../../images/00001.png'


class HackathonCard extends Component {

  render() {
    const { title, description, date, githubUrl, type, onClick } = this.props;

    return (
      <div className="hackathon-card01"  onClick={onClick}>
  <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="github-icon" />
        </a>
        <h2>{title}</h2>
        <p className='p1'>{description}</p>
        <p className='p2'>Date: {date}</p>
        <button className="card-button01">Apply now</button>
        <p className="hackathon-type-label">{type}</p>
      </div>
      
    );
  }
}

class App extends Component {
  state = {
    hackathons: [
      {
        title: 'Hack Dev',
        type: 'online',
        description: 'Join our first hackathon event!',
        date: 'October 15, 2023',
        imageUrl:'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
        para:'Presenting ACE IEEE Techithons Hack Mania, one of the biggest 24-Hour Offline Hackathon of ACE. With this event, we plan to provide a platform for students from all over Mumbai where they can learn invaluable skills about product development by building projects from scratch and competing with fellow students. Our aim is to develop applications, websites and solutions that would be of utility for the society Sandharniya Vikas Hackathon 1.0 is a hybrid hackathon that brings together students, professionals, and enthusiasts from all over the world to develop innovative solutions to real-world problems that are aligned with the Sustainable Development Goals (SDGs). We are of the belief that technology can be used to make a positive impact on the world, and we are committed to providing a platform to showcase their creativity and innovation just for that',
        location:'Goa',
      },
      {
        title: 'Hackathon 2',
        description: 'Compete in our second hackathon challenge!',
        date: 'November 5, 2023',
        type: 'online',
        imageUrl:img1,
        para:'gnfghnffbgfngfndfbfgnnhnsfbdfbfgn',
        location:'goa',
      },
      {
        title: 'Hackathon 3',
        description: 'Get ready for the third hackathon competition!',
        date: 'December 10, 2023',
        type: 'offline',
        imageUrl:img1,
        para:'gnfghnffbgfngfndfbfgnnhnsfbdfbfgn',
        location:'goa',
      },
      // Add Hackathon 4
      {
        title: 'Hackathon 4',
        description: 'The fourth exciting hackathon!',
        date: 'January 20, 2024',
        type: 'offline',
        imageUrl:img1,
        para:'gnfghnffbgfngfndfbfgnnhnsfbdfbfgn',
        location:'goa',
      },
       // Add Hackathon 5
       {
        title: 'Hackathon 5',
        description: 'The fourth exciting hackathon!',
        date: 'January 20, 2024',
        type: 'online',
        imageUrl:img1,
        para:'gnfghnffbgfngfndfbfgnnhnsfbdfbfgn',
        location:'goa',
      },
       // Add Hackathon 6
       {
        title: 'Hackathon 6',
        description: 'The fourth exciting hackathon!',
        date: 'January 20, 2024',
        type: 'offline',
        imageUrl:img1,
        para:'gnfghnffbgfngfndfbfgnnhnsfbdfbfgn',
        location:'goa',
      },
       // Add Hackathon 7
       {
        title: 'Hackathon 7',
        description: 'The fourth exciting hackathon!',
        date: 'January 20, 2024',
        type: 'offline',
        imageUrl:img1,
        para:'gnfghnffbgfngfndfbfgnnhnsfbdfbfgn',
        location:'goa',
      },
       // Add Hackathon 8
       {
        title: 'Hackathon 8',
        description: 'The fourth exciting hackathon!',
        date: 'January 20, 2024',
        type: 'offline',
        imageUrl:img1,
        para:'gnfghnffbgfngfndfbfgnnhnsfbdfbfgn',
        location:'goa',

      },
    ],
    selectedHackathon: null, // Add this state variable
  };



  handleHackathonCardClick = (hackathon) => {
    this.setState({ selectedHackathon: hackathon });
  };


  handleBackToHackathonsClick = () => {
    this.setState({ selectedHackathon: null });
  };

  
  
  render() {
    window.onscroll = function () {
      if (window.pageYOffset < 20) {
        document.querySelector(".NavbarItems").style.top = "20px";
      } else {
        document.querySelector(".NavbarItems").style.top = "-100px";
      }
    };


    const { selectedHackathon } = this.state;

    if (selectedHackathon) {
      // Render the selected hackathon's details
      return (
        <div>
          <Navbar />
          <HackathonDetails
            hackathon={selectedHackathon}
            onBackClick={this.handleBackToHackathonsClick}
          />
          < Footer />
        </div>
      );
    }

    
   // Render the list of hackathons
   return (
    <div>
      <Navbar />
      <div className="App01">
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <h1 className='head1'>Hackathons</h1><br></br><br></br>
        <div className="row01">
            {this.state.hackathons.map((hackathon, index) => (
              <HackathonCard
                key={index}
                title={hackathon.title}
                description={hackathon.description}
                date={hackathon.date}
                type={hackathon.type}
                githubUrl="https://github.com/gijendrap/App-Development"
                onClick={() => this.handleHackathonCardClick(hackathon)} // Add this click handler
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;