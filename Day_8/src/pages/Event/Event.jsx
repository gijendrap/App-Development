import React, { Component } from 'react';
import './Event.css'
import Navbar from '../../Navcomponents/Navbar';
import Footer from '../../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


class HackathonCard extends Component {

  render() {
    const { title, description, date, githubUrl, type,  } = this.props;

    return (
      <div className="hackathon-card01">
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
        title: 'Hackathon 1',
        type: 'online',
        description: 'Join our first hackathon event!',
        date: 'October 15, 2023',
        
        
      },
      {
        title: 'Hackathon 2',
        description: 'Compete in our second hackathon challenge!',
        date: 'November 5, 2023',
        type: 'online',
      },
      {
        title: 'Hackathon 3',
        description: 'Get ready for the third hackathon competition!',
        date: 'December 10, 2023',
        type: 'offline',
      },
      // Add Hackathon 4
      {
        title: 'Hackathon 4',
        description: 'The fourth exciting hackathon!',
        date: 'January 20, 2024',
        type: 'offline',
      },
       // Add Hackathon 5
       {
        title: 'Hackathon 5',
        description: 'The fourth exciting hackathon!',
        date: 'January 20, 2024',
        type: 'online',
      },
       // Add Hackathon 6
       {
        title: 'Hackathon 6',
        description: 'The fourth exciting hackathon!',
        date: 'January 20, 2024',
        type: 'offline',
      },
       // Add Hackathon 7
       {
        title: 'Hackathon 7',
        description: 'The fourth exciting hackathon!',
        date: 'January 20, 2024',
        type: 'offline',
      },
       // Add Hackathon 8
       {
        title: 'Hackathon 8',
        description: 'The fourth exciting hackathon!',
        date: 'January 20, 2024',
        type: 'offline',

      },
    ],
  };

  render() {
    window.onscroll = function () {
      if (window.pageYOffset < 20) {
        document.querySelector(".NavbarItems").style.top = "20px";
      } else {
        document.querySelector(".NavbarItems").style.top = "-100px";
      }
    };

    return (
      <div>
       
          <Navbar />
          <div className="App01"><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <h1 className='head1'>Hackathons</h1><br></br><br></br>
          <div className="row01">
            {this.state.hackathons.map((hackathon, index) => (
              <HackathonCard
                key={index}
                title={hackathon.title}
                description={hackathon.description}
                date={hackathon.date}
                type={hackathon.type}
                githubUrl="https://github.com/your-username/your-repo" // Replace with your GitHub URL

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
