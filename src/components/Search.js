//!imports
import React from "react"

//!define search and takes searchbar and setSearchbar as props 
function Search({ searchBar, setSearchBar }) {
  
  //!event handler to uodate search state
  const handleSearchChange = (e) => {

    //!setSearchBar updates the searchBar state with the new value
    setSearchBar(e.target.value)
  };

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label> 
      <input

      //!search input
      
      type="text"
      id="search"
      //!text when placeholder is empty
      placeholder="Type a name to search..." 
      //!value is a controlled component of searchBar
      value={searchBar}
      //!onchange calls handleSearchChange and uodates state when something is typed
        onChange={handleSearchChange}
      />
   </div>
  );
}

export default Search