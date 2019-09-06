import React, {useState, useEffect, useCallback} from 'react';
import spotifyApi from "../../services/SpotifyApi";
import PlaylistTable from './PlaylistTable';

const PlaylistList = (props) => {
  const [ playlists, setPlaylists ] = useState([]);
  const {accessToken, category} = props;
  const [appearing, setAppearing] = useState(true)
  
  let appear =()=> {
    setTimeout(() => {
      setAppearing(false)
    }, 300);
  }
  appear()
  

const fetchPlaylists = useCallback(() => {
  setAppearing(true)
  spotifyApi.getPlaylists(accessToken, category)
    .then(data=>{
      const {items} = data.playlists;
      setPlaylists(items);
      appear();
    })
}, [accessToken, category]) 

useEffect(() => {
  fetchPlaylists();
}, [fetchPlaylists]);


  return (
    <article className={`table-container ${!appearing && "appear"}`}>
     
   {playlists.length && <PlaylistTable playlists={playlists}/>}
      
    </article>
  );

  }
export default PlaylistList;