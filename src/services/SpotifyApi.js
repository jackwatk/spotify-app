import axios from 'axios';

class SpotifyApi {
  constructor() {
    this.spotifyApi = axios.create({
      baseURL: `https://api.spotify.com`,
    });
  }
  
  getAlbums(accessToken, country){
    let config = { 
      headers: { Authorization: `Bearer ${accessToken}`}
      }
    return this.spotifyApi.get(`/v1/browse/categories?country=${country}`, config )
    .then(({ data }) => data);
  }
}

const spotifyApi = new SpotifyApi();

export default spotifyApi;