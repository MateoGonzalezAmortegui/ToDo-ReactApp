import React from 'react';
import '../style/TodoSearch.css';

const TodoSearch = ({searchValue,setSearchValue, loading}) => {

  const onSearchValueChange = (event)=>{
    setSearchValue(event.target.value);//*see the change on input
  };


  return (
    <input className="TodoSearch" placeholder="TO DO"
          onChange={onSearchValueChange}
          value={searchValue} 
          disabled={loading}
    />
  )
}

export {TodoSearch}