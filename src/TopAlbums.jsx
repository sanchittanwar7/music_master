import React, { Component } from 'react';
import './App.css';
import './TopAlbums.css'

class TopAlbums extends Component {
  render() {
    const { albums } = this.props;
    console.log(albums)
    return (
      <div className = "top-albums">
        <h1>Top 10 Albums</h1>
        {albums.map((album, k) => {
          return(

            <div
              key = {k}
              className = "album"
            >
                <img 
                  src = {album.image[3]['#text']}
                  className = "img"
                  alt = "track"
                />
              <div className = "album-text">
                {album.name}
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default TopAlbums
