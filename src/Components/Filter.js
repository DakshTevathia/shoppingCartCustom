import React from "react";
import "../App.css";

const Filter = () => {
  return (
    <div className="filter">
      <div className="filterContainer">
        <h3>Filter Products</h3>
        <div>
          <input
            type="radio"
            id="asc"
            name="orderAlphabetically"
            value="Ascending"
          />
          <label htmlFor="asc">Ascending</label>
        </div>
        <div>
          <input
            type="radio"
            id="dsc"
            name="orderAlphabetically"
            value="Descending"
          />
          <label htmlFor="dsc">Descending</label>
        </div>
        <div>
          <input type="checkbox" id="checkbox1" name="inStock" />
          <label htmlFor="inStock">inStock</label>
        </div>

        <div>
          <input type="checkbox" id="checkbox2" name="fastDelivery" />
          <label htmlFor="fastDelivery">fastDelivery</label>
        </div>
        <button>Clear Filters</button>
      </div>
    </div>
  );
};

export default Filter;
