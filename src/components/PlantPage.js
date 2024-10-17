//!imports
import React, { useState, useEffect } from "react"
import NewPlantForm from "./NewPlantForm"
import PlantList from "./PlantList"
import Search from "./Search"




//!state to hold list of plants and search
function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchBar, setSearchBar] = useState("")





  useEffect(() => {
    //!fetch plant data
    fetch("http://localhost:6001/plants")
      .then(response => response.json())
      .then(data => setPlants(data))//!update state with the plant data
      .catch(error => console.error("Error", error))
  }, []);





  const addPlant = (newPlant) => {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify(newPlant)//!convert the new plant data to json
    })
      .then(response => response.json())
      .then(addedPlant => {
        setPlants([...plants, addedPlant])//!update state with new plant
      })
      .catch(error => console.error("Error adding new plant:", error))
  }



  
  //!filter plant based on serchBar
  const filteredPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(searchBar.toLowerCase())
  );



  //!passing/rendering searchBar and setSearchBar
  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search searchbar={searchBar} setSearchBar={setSearchBar} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage