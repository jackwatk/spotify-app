import React from 'react';

function CatergoryBox(props) {
  const {name, id, href, icons} = props.info
  const {url} = icons[0];
  
  return (
    <div style={{height: 275, width: 275, background: `url(${url})`}} onClick={()=>{props.refreshList(id)}}>
      <p>{name}</p>
    </div>
  );

  }
export default CatergoryBox;