import React, { Component } from 'react';
import Categories from './components/Categories/Categories';
import Playlists from './components/Playlists/PlaylistList';

class App extends Component {
  state = {
    access_token: '',
    categoryId: '',
    showPlaylists: false,
  }

  componentDidMount(){
   this.getToken()
  }

  getToken = () => {
    const hash = window.location.hash
      .substring(1)
      .split('&')
      .reduce((initial, item)=> {
        if (item) {
          let parts = item.split('=');
          initial[parts[0]] = decodeURIComponent(parts[1]);
        }
      return initial;
      }, {});
    window.location.hash = '';

    // Set token
    let {access_token} = hash;
    const redirect = this.scopedRedirect();
    this.setState({access_token},()=>{ !access_token && redirect() })

   
  }

  scopedRedirect = () => {
  const clientId = '70e91d3d268c4956b152f0d204b6f806';
  const redirectUri = 'http://localhost:3000';
  const authEndpoint = 'https://accounts.spotify.com/authorize';
  return ()=>window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token`;
        
  }

  setCategoryId = (categoryId) => {
    this.setState({categoryId, showPlaylists: true});
  }

  render() {
    const {access_token, showPlaylists, categoryId} = this.state;
    return (
      <div>
        {access_token ? <Categories accessToken={access_token} setCategoryId={this.setCategoryId}/> : <h1>Log in</h1>}
        {showPlaylists && <Playlists accessToken={access_token} category={categoryId}/>}
      </div>
    );
  }
}

export default App;
