import React, { Component } from 'react';

class CategorySelect extends Component {
    state = {
      selected: '',
    }

    componentDidUpdate(){
        const {selectedId} = this.props;
        const {selected} = this.state
      if(selectedId !== selected){
        this.setState({selected: selectedId})
      }
    }

    handleOnChange = (e) => {
      const {value: selected} = e.target;
      this.setState({selected},()=>this.props.setCategoryId(selected))
    }

  render() {
    const {categories} = this.props;
    return (
        <div className="catergory-dropdown-container">
          <select className="category-dropdown" value={this.state.selected} onChange={this.handleOnChange}>
          {categories.length && categories.map((item, index)=>
              {return index === 0 ? <><option key={item.id + "dummy"} value="" disabled>Choose A Category...</option><option key={item.id} value={item.id}>{item.name}</option></> 
              :<option key={item.id} value={item.id}>{item.name}</option>}
              
            
              )}
          </select>
        </div>

    );
  }
}

export default CategorySelect;