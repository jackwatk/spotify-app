import React, { Component } from 'react';
import spotifyApi from "../../services/SpotifyApi";
import CatergoryBox from './CatergoryBox';

class Categories extends Component {
  state={
    items: [],
    loading: true,
    error: false,
    errorMessage: "",
  }

  componentDidMount(){
    spotifyApi.getAlbums(this.props.accessToken, "ES")
      .then(({categories: {items}})=>{
        this.setState({items, loading: false})
      })
      .catch(error=>this.setState({error: true, errorMessage: error.response.error}));
  }
  
  render() {
    const {loading, items} = this.state;
    return (
      <div>
        <h2>Categories</h2>
        {!loading && items.map((catergory)=><CatergoryBox key={catergory.id} info={catergory} refreshList={this.props.setCategoryId}/>)}
      </div>
    );
  }
}

export default Categories;