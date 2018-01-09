import React, { Component } from 'react';
import './TopCountryArtists.css';

class TopCountryArtists extends Component {
	render(){
		const { artists, countryName } = this.props;
		// console.log(artists)
	    return (
	      <div className = "top-artists">
	        <h1>Top Artists of {countryName}</h1>
	        {artists.map((artist, k) => {
	          return(

	            <div
	              key = {k}
	              className = "artist"
                  onClick = {this.props.editArtist.bind(this, artist.name)}
	            >
	              <img 
	              	src = {artist.image[4]['#text']}
	              	className = "img"
	              	alt = "track"
	              />
	              <div className = "artist-text">
	                {artist.name}
	              </div>
	            </div>
	          )
	        })}
	      </div>
	    )
	}
}

export default TopCountryArtists
