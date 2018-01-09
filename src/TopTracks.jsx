import React, { Component } from 'react';
import './App.css'
import './TopTracks.css'

class TopTracks extends Component{
  render() {
    const { tracks } = this.props;
    console.log(tracks);
    return (
      <div className = "top-tracks">
        <h1>Top 10 Tracks</h1>
        {tracks.map((track, k) => {
          return(

            <div
              key = {k}
              className = "track"
            >
               <img 
                  src = {track.image[3]['#text']}
                  className = "img"
                  alt = "track"
                />
              <div className = "track-text">
                {track.name}
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default TopTracks
