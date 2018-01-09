import React, { Component } from 'react';
import './TopGlobalArtist.css';

class TopGlobalArtists extends Component {
	render(){
		const { artists } = this.props;
		// console.log(artists)
	    return (
	      <div className = "top-artists">
	        <h1>Top Global Artists</h1>
	        {artists.map((artist, k) => {
	          return(

	            <div
	              key = {k}
	              className = "artist"
                  onClick = {this.props.editArtist.bind(this, artist.name)}
	            >
	              <img 
	              	src = {artist.image[3]['#text']}
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

export default TopGlobalArtists
