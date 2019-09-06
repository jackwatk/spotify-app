import React, {useState, useEffect, useCallback} from 'react';
import spotifyApi from "../../services/SpotifyApi";
import PlaylistTable from './PlaylistTable';

const PlaylistList = (props) => {
  const [ playlists, setPlaylists ] = useState([]);
  const {accessToken, category} = props;
  const [appearing, setAppearing] = useState(true)
  
  setTimeout(() => {
    setAppearing(false)
  }, 300);

const fetchPlaylists = useCallback(() => {
  setAppearing(true)
  spotifyApi.getPlaylists(accessToken, category)
    .then(data=>{setPlaylists(data.playlists.items);  
      setTimeout(() => {
        setAppearing(false)
   
      }, 300);})
}, [accessToken, category]) 

useEffect(() => {
  fetchPlaylists();
}, [fetchPlaylists]);


  return (
    <div className={`table-container ${!appearing && "appear"}`}>
     
   {playlists.length && <PlaylistTable playlists={playlists}/>}
      
    </div>
  );

  }
export default PlaylistList;