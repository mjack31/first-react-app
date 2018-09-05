import React from 'react';

const SearchBar = (props) => {
  const onSearchInputChange = props.onSearchInputChange;

  return (
    <div className="input-group mb-4 w-50 mx-auto" >
      <input type="text" className="form-control" placeholder="Search..." aria-label="Search" aria-describedby="button-addon2" onChange={e => {onSearchInputChange(e.target.value)}} ></input>
    </div>
  )
}

export default SearchBar;