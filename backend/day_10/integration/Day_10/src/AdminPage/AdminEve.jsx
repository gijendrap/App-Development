

import React, { Component } from 'react';
import './AdminEve.css'
import Navbar from '../Navcomponents/Navbar';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import AdminCon from './AdminCon'
import CreateHackathon from './CreateHackathon'; // Import the CreateHackathon component
import axiosInstance from '../AxiosConfig';


class HackathonCard extends Component {

  
  render() {
    const { title, description, date, githubUrl, type, onClick, onDelete } = this.props;
    return (
      <div className="mom-hackathon-card01"  >
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="mom-github-icon" />
        </a>
        <h2>{title}</h2>
        <p className='mom-p1'>{description}</p>
        <p className='mom-p2'>Date: {date}</p>
        <button className="mom-card-button01"  onClick={onClick}>Apply now</button>
        <p className="mom-hackathon-type-label">{type}</p>
        <button className="mom-card-button02" onClick={onDelete}>delete</button> {/* Delete button */}
      </div>
    );
  }
}

class App extends Component {
  state = {
    hackathons: [
    ],
    selectedHackathon: null,
  }

  handleDeleteHackathon = (hackathon) => {
    const hackathonId = hackathon.id; 
    axiosInstance.delete(`http://localhost:8080/api/hackathon-cards/hack/${hackathonId}`)
      .then((response) => {
        if (response.status === 204) {
          const updatedHackathons = this.state.hackathons.filter((h) => h.id !== hackathonId);
          this.setState({ hackathons: updatedHackathons }, () => {
            console.log("Updated hackathons state:", this.state.hackathons);
          });
        }
      })
      .catch((error) => {
        console.error('Error deleting hackathon:', error);
      });
  };

  componentDidMount() {
    axiosInstance.get('http://localhost:8080/api/hackathon-cards/get_hackathon')
      .then((response) => {
        this.setState({ hackathons: response.data });
      })
      .catch((error) => {
        console.error('Error fetching hackathon data:', error);
      });
  }

handleCreateHackathon = (newHackathon) => {
  const updatedHackathons = [...this.state.hackathons, newHackathon];
  this.setState({ hackathons: updatedHackathons });
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
      return (
        <div>
          <Navbar />
          <AdminCon
            hackathon={selectedHackathon}
            onBackClick={this.handleBackToHackathonsClick}
          />
          <Footer />
        </div>
      );
    }

    return (
      <div>
        <Navbar />
        <div className="mom-App01">
          <h1 className="mom-head1">Hackathons</h1>
          <div className="mom-row01">
            <CreateHackathon onCreateHackathon={this.handleCreateHackathon} />
            {this.state.hackathons.map((hackathon, index) => (
              <HackathonCard
                key={index}
                title={hackathon.title}
                description={hackathon.description}
                date={hackathon.date}
                type={hackathon.type}
                githubUrl="https://github.com/gijendrap/App-Development"
                onClick={() => this.handleHackathonCardClick(hackathon)} 
                onDelete={() => this.handleDeleteHackathon(hackathon)} 
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