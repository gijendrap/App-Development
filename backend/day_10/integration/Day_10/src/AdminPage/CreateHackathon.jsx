import React, { Component } from 'react';
import axios from 'axios';
import axiosInstance from '../AxiosConfig';

class CreateHackathon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      date: '', 
      type: '', 
      imageUrl: '', 
      location: '',
      para: '', 
    };
  }



  handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;
    this.setState({ [name]: inputValue });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newHackathon = {
      title: this.state.title,
      description: this.state.description,
      date: this.state.date, 
      type: this.state.type, 
      imageUrl: this.state.imageUrl,
      location: this.state.location, 
      para: this.state.para,
    };

    axiosInstance
      .post('http://localhost:8080/api/hackathon-cards/hackathon', newHackathon)
      .then((response) => {
        this.props.onCreateHackathon(response.data);




        
        this.setState({
          title: '',
          description: '',
          date: '', 
          type: '', 
          imageUrl: '',
          location: '', 
          para: '', 
        });
      })
      .catch((error) => {
        console.error('Error creating hackathon:', error);
      });
  };

  render() {
    return (
      <div className="create-hackathon-container">
        <h2>Create Hackathon</h2>
        <form onSubmit={this.handleSubmit} className="create-hackathon-form">
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea
              name="description"
              value={this.state.description}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Date:</label>
            <input
              type="text"
              name="date"
              value={this.state.date}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Type:</label>
            <input
              type="text"
              name="type"
              value={this.state.type}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Image URL:</label>
            <input
              type="text"
              name="imageUrl" 
              value={this.state.imageUrl} 
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Location:</label> 
            <input
              type="text"
              name="location" 
              value={this.state.location} 
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Para:</label>
            <input
              type="text"
              name="para" 
              value={this.state.para} 
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit" className="create-hackathon-button">Create</button>
        </form>
      </div>
    );
  }
}

export default CreateHackathon;
