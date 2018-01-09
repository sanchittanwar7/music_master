import React, { Component } from 'react';
import './TopGlobalTracks.css';

class TopGlobalTracks extends Component {
	render() {
		const {globalTracks} = this.props;
		// console.log(globalTracks)
		return (
			<div className = "top-global-tracks">
	        <h1>Top Global Tracks</h1>
	        {globalTracks.map((globalTrack, k) => {
	          return(

	            <div
	              key = {k}
	              className = "global-track"
	            >
	              <img 
	              	src = {globalTrack.image[3]['#text']}
	              	className = "img"
	              	alt = "track"
	              />
	              <div className = "global-track-text">
	                {globalTrack.name}
	              </div>
	            </div>
	          )
	        })}
	      </div>
		)
	}
}

export default TopGlobalTracks