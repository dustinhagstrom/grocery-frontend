import React, { useState, useContext } from "react";

import Button from "../common/Button";

import { GroceryContext } from "../context/context";

function Grocery() {
  const [canEdit, setCanEdit] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);

  const {
    grocery: { _id, grocery, purchased },
    index,
    handleEdit,
    handlePurchased,
    handleDelete,
  } = useContext(GroceryContext);

  const [groceryItem, setGroceryItem] = useState(grocery);

  const handleOnSubmit = () => {
    handleEdit(_id, index, groceryItem, isPurchased);
    setCanEdit(false);
  };

  const handleOnEditClick = () => {
    setCanEdit(true);
  };

  const handleOnPurchasedClick = () => {
    console.log("click");
    setIsPurchased(!isPurchased);
    handlePurchased(_id, index, groceryItem, isPurchased);
  };
  return (
    <>
      {canEdit ? (
        <td>
          <input
            type="text"
            value={groceryItem}
            onChange={(e) => setGroceryItem(e.target.value)}
            id={_id}
          />
        </td>
      ) : (
        <td style={{ textDecoration: isPurchased && "line-through" }}>
          {grocery}
        </td>
      )}
      {canEdit ? (
        <td>
          <Button
            buttonName="Submit"
            clickFunc={() => {
              handleOnSubmit();
            }}
          />
        </td>
      ) : (
        <td>
          <Button buttonName="Edit" clickFunc={handleOnEditClick} />
        </td>
      )}
      <td>
        <Button buttonName="Purchased" clickFunc={handleOnPurchasedClick} />
      </td>
      <td>
        <Button
          buttonName="Delete"
          clickFunc={() => handleDelete(_id, index)} //check upon this as well
        />
      </td>
    </>
  );
}

export default Grocery;