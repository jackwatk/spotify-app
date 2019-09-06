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
    renderOption = (item) => {
      return <option key={item.id} value={item.id}>{item.name}</option>
    }

  render() {
    const {categories} = this.props;
    return (
          <select className="category-dropdown" value={this.state.selected} onChange={this.handleOnChange}>
            <option key={"dummy"} value="" disabled>Choose A Category...</option>
            {categories.length && categories.map(item=>this.renderOption(item))}
          </select>

    );
  }
}

export default CategorySelect;