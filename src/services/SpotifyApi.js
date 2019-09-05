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
    return this.spotifyApi.get(`/v1/browse/categories?country=${country}&limit=32`, config )
    .then(({ data }) => data);
  }
  getPlaylists(accessToken, categoryId){
    let config = { 
      headers: { Authorization: `Bearer ${accessToken}`}
      }
    return this.spotifyApi.get(`/v1/browse/categories/${categoryId}/playlists`, config )
    .then(({ data }) => data);
  }
}

const spotifyApi = new SpotifyApi();

export default spotifyApi;