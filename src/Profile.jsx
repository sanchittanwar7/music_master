import React, { Component } from 'react';
import './App.css';
import './Profile.css'

class Profile extends Component {
  render() {
    // console.log('this.props', this.props);
    let artist = {name: '', bio: null};
    let stats = {listeners: '', playcount: ''};
    
    let bio = {summary: ''};
    let image = []
    if(this.props.artist !== null){
      artist = this.props.artist;
      stats = this.props.stats;
      bio = this.props.bio;
      image = this.props.images;
    }
    return(
      <div>
      <div className = "profile">
        
          <img 
            className="profile-pic"
            src = {image[5]['#text']}
            alt = "track"
          />
        
        <div className="profile-info">
          <div className = "artist-name">{artist.name}</div>
          <div className = "listeners-count">{stats.listeners} listeners</div>
          <div className = "play-count">{stats.playcount} playcount</div>
          <div className = "artist-bio">{bio.summary}</div>
          </div>
        </div>
      </div>

    )
  }
}

export default Profile
