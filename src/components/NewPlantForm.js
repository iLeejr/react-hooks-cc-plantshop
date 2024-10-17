//!imports
import React, { useState } from "react"

function NewPlantForm({ addPlant }) {
  //!state to hold form data
  const [formData, setFormData] = useState({
    name: "",//!plant name
    image: "",//!image URL
    price: ""//!plant price
  });

  
  
  
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,//!spread form data
      [name]: value
    });
  };

  
  
  
  
  
  //!submission
  const handleSubmit = (e) => {
    e.preventDefault()//!prevent page refresh
    addPlant(formData);
    setFormData({ name: "", image: "", price: "" })//!reset form data
  }

  
  
  
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"//!input plant name
          name="name"
          placeholder="Plant name" 
          value={formData.name}
          onChange={handleChange}//!update state
        />
        <input
          type="text"//!input img
          name="image" 
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}//!update state 
        />
        <input
          type="number"//!input price
          name="price"
          step="0.01"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}//!update state
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm