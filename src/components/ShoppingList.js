import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory,setselectedCategory]=useState("All")
    const ItemsToList=items.filter(item => {
        if (selectedCategory ==="All"){
         return true}
        else{
          return item.category === selectedCategory
        }
      })
    
    function HandleFilterEvent(event){
      setselectedCategory(event.target.value)
    }
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={HandleFilterEvent}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {ItemsToList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
