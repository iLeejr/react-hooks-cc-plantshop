//!imports
import React, { useState } from "react"



//!making function for plantCard and setting up in/out of stock state
function PlantCard({ plants, plantImgs, prices }) {
  const [inStock, setInStock] = useState(true)

  
  
  
  //!toggle for in/out of stock
  const toggleStock = () => {
    setInStock(!inStock)
  };


  
  const plant = plants
  const plantImg = plantImgs //!assign value of props
  const price = prices


  
  
  
  
  //!display plant img & price & in/out of stock
  //!toggle button in/out of stock
  return (
    <li className="card" data-testid="plant-item">
      <img src={plantImg} alt={plant} />
      <h4>{plant}</h4>
      <p>Price: {price}</p>
      <button className={inStock ? "primary" : ""} onClick={toggleStock}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard