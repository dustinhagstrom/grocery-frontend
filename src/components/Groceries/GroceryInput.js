import React, { useState, useContext } from "react";

import { GroceryInputContext } from "../context/context";

function GroceryInput() {
  const [groceryItem, setGroceryItem] = useState("");

  const { addGrocery } = useContext(GroceryInputContext);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    addGrocery(groceryItem);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            value={groceryItem}
            onChange={(e) => setGroceryItem(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <div>{/* error message div */}</div>
      </div>
      <div>
        <button>Sort by date added - Oldest to Newest</button>
        <button>Sort by date added - Newest to Oldest</button>
        <button>Sort by Purchased</button>
        <button>Sort by Not Purchased</button>
      </div>
    </div>
  );
}

export default GroceryInput;
