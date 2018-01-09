import React, { Component } from 'react';
import './TopCountryTracks.css';

class TopCountryTracks extends Component {
	render() {
		const {countryTracks, countryName} = this.props;
		// console.log(countryTracks)
		return (
			<div className = "top-country-tracks">
	        <h1>Top Tracks of {countryName}</h1>
	        {countryTracks.map((countryTrack, k) => {
	          return(

	            <div
	              key = {k}
	              className = "country-track"
	            >
	              <img 
	              	src = {countryTrack.image[3]['#text']}
	              	className = "img"
	              	alt = "track"
	              />
	              <div className = "country-track-text">
	                {countryTrack.name}
	              </div>
	            </div>
	          )
	        })}
	      </div>
		)
	}
}

export default TopCountryTracks