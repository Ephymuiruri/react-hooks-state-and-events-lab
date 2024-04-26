import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {
   const [Mode,setMode]= useState(true);
   function ChangeMode(){
     setMode((Mode) => !Mode)
    }
     console.log(Mode)
  const appClass = Mode ? "App light" : "App dark"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>

        <button onClick={ChangeMode} type="button">{Mode?"Dark":"Light"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
