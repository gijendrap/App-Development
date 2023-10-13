// Profile.js

import React, { Component } from 'react';
import Navbar from '../../Navcomponents/Navbar';
import './Dashboard.css';
import { connect } from 'react-redux';


class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Gijugj',
            fullName: 'John Doe',
            bio: 'Software Developer | Web Designer',
            followersCount: 1000,
            followingCount: 500,
        };
    }

    render() {
        const { username, fullName, bio, followersCount,  followingCount } = this.state;
        const { email } = this.props; // Access the user's email from props

        return (
            <div>
                <Navbar/>
            <div className="profile-container">
                <div className="profile-header">
                    <div className="profile-avatar">
                        <img src="https://via.placeholder.com/150" alt="Profile Avatar" />
                    </div>
                    <div className="profile-info">
                        <h1>{username}</h1>
                        <p>{fullName}</p>
                        <p>Email: {email}</p> {/* Display the user's email */}

                        <p className="bio">{bio}</p>
                    </div>
                </div>
                <div className="profile-stats">
                    <div className="stat">
                        <strong>{followersCount}</strong>
                        <span>Followers</span>
                    </div>
                    <div className="stat">
                        <strong>{followingCount}</strong>
                        <span>Following</span>
                    </div>
                </div>
                {/* Add other content and sections as needed */}
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    userEmail: state.user.email, // Assuming your user's email is stored in the Redux store under 'user.email'
});

export default connect(mapStateToProps)(UserProfile);