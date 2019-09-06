import React, {useState} from 'react';

function CatergoryBox(props) {
  const {name, id, href, icons} = props.info
  const {url} = icons[0];
  const [appearing, setAppearing] = useState(true)
  
  setTimeout(() => {
    setAppearing(false)
  }, 300);

  return (
    <div className={`catergory-box ${appearing && "removed"} ${id === props.selectedId && "selected"}`} style={{backgroundImage: `url(${url})`}} onClick={()=>{props.refreshList(id)}}>
          <h2>{name}</h2>
          
    </div>
  );

  }
export default CatergoryBox;