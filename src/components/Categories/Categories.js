import React, { Component } from 'react';
import spotifyApi from "../../services/SpotifyApi";
import CatergoryBox from './CatergoryBox';
import CategorySelect from '../CategorySelect';

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
    const {loading, items, } = this.state;
    return (
      <section className="categories">
        <CategorySelect categories={items} selectedId={this.props.categoryId} setCategoryId={this.props.setCategoryId}/>
        {!loading && items.map((catergory)=><CatergoryBox key={catergory.id} selectedId={this.props.categoryId} info={catergory} refreshList={this.props.setCategoryId}/>)}
      </section>
    );
  }
}

export default Categories;