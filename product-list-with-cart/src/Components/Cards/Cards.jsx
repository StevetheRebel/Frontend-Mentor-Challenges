import React from "react";

function Cards({ productNames, productCategory }) {
  return (
    <div>
      <ul>
        {productNames.length > 0 ? (
          productNames.map((name, id) => <li key={id}>{name}</li>)
        ) : (
          <li>No names to display</li>
        )}
      </ul>
      <hr />
      <ul>
        {
            productCategory.length > 0 ? (productCategory.map((name, id) => <li key={id}>{name}</li>)) : <li>No Categories found</li>
        }
      </ul>
    </div>
  );
}

export default Cards;
