import React, { Component } from 'react';
import spotifyApi from "../services/SpotifyApi";

class Categories extends Component {
  state={

  }

  componentDidMount(){
    spotifyApi.getAlbums(this.props.accessToken, "ES")
      .then((data)=>{
        console.log(data)
      })
      .catch(error=>console.log(error.response.data))
  }
  
  render() {
    return (
      <div>
        <h2>Categories</h2>
      </div>
    );
  }
}

export default Categories;