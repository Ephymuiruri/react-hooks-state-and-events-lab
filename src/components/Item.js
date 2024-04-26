import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [buy, Setbuy]=useState("Add to Cart")
   function ChangeState () {
    if (buy==="Add to Cart"){
    Setbuy("Remove From Cart")
   }
   else {
    Setbuy("Add to Cart")
   }}
  return (
    <li className={buy==="Add to Cart"? "":"in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" type="button" onClick={ChangeState}>{buy}</button>
    </li>
  );
}

export default Item;
