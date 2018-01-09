import React, { Component } from 'react';
import './SimilarArtists.css'

class SimilarArtists extends Component{
  render() {
    // console.log('similar', this.props);
    const { similars } = this.props;
    return (
      <div className = "similar-artists">
        <h1>Similar Artists</h1>
        {similars.map((similar, k) => {
          return(

            <div
              key = {k}
              className = "similar"
              onClick = {this.props.editArtist.bind(this, similar.name)}
            >
                <img 
                  src = {similar.image[4]['#text']}
                  className = "img"
                  alt = "track"
                />
              <div className = "similar-text">
                {similar.name}
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default SimilarArtists
