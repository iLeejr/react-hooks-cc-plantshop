//!imports
import React from "react";
import PlantCard from "./PlantCard"

function PlantList({ plants }) {
  return (
    <ul className="cards">
      {plants.map(plant => (//!list of plant cards(array of plants)
        <PlantCard
          key={plant.id} 
          plants={plant.name}//!passing plant prop
          plantImgs={plant.image}
          prices={plant.price}
        />
      ))}
    </ul>
  );
}

export default PlantList