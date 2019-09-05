import React, {useState, useEffect, useCallback} from 'react';
import spotifyApi from "../../services/SpotifyApi";


const PlaylistList = (props) => {
  const [ playlists, setPlaylists ] = useState([]);
  const {accessToken, category} = props;


const fetchPlaylists = useCallback(() => {
  spotifyApi.getPlaylists(accessToken, category)
    .then(data=>setPlaylists(data.playlists.items))
}, [accessToken, category]) 

useEffect(() => {
  fetchPlaylists();
}, [fetchPlaylists]);

/*...*/
  return (
    <div>
   { console.log(playlists)}
      
    </div>
  );

  }
export default PlaylistList;