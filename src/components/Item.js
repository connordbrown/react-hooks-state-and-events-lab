import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false);
  const liClass = inCart ? "in-cart" : "";

  function handleAdd() {
    setInCart(inCart => !inCart);
  }

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAdd}>Add to Cart</button>
    </li>
  );
}

export default Item;
