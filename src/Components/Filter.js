import React from "react";
import "../App.css";

const Filter = ({ selected, setSelected }) => {
  const handleCancelClicked = () => {
    //clear all set filters
    setSelected({
      ascendingChosen: false,
      descendingChosen: false,
      inStockChosen: false,
      fastDeliveryChosen: false,
    });
  };
  const ascendingSelected = (e) => {
    setSelected((selected) => {
      return {
        ...selected,
        ascendingChosen: e.target.checked,
        descendingChosen: false,
      };
    });
  };

  const descendingSelected = (e) => {
    setSelected((selected) => {
      return {
        ...selected,
        descendingChosen: e.target.checked,
        ascendingChosen: false,
      };
    });
  };

  const inStockSelected = (e) => {
    setSelected((selected) => {
      return { ...selected, inStockChosen: e.target.checked };
    });
  };

  const fastDeliverySelected = (e) => {
    setSelected((selected) => {
      return { ...selected, fastDeliveryChosen: e.target.checked };
    });
  };

  return (
    <div className="filter">
      <div className="filterContainer">
        <h3>Filter Products</h3>
        <div>
          <input
            type="radio"
            id="asc"
            name="orderAlphabetically"
            checked={selected.ascendingChosen}
            onChange={ascendingSelected}
          />
          <label htmlFor="asc">Ascending</label>
        </div>
        <div>
          <input
            type="radio"
            id="dsc"
            name="orderAlphabetically"
            checked={selected.descendingChosen}
            onChange={descendingSelected}
          />
          <label htmlFor="dsc">Descending</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="inStock"
            name="inStock"
            checked={selected.inStockChosen}
            onChange={inStockSelected}
          />
          <label htmlFor="inStock">inStock</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="fastDelivery"
            name="fastDelivery"
            checked={selected.fastDeliveryChosen}
            onChange={fastDeliverySelected}
          />
          <label htmlFor="fastDelivery">fastDelivery</label>
        </div>
        <button onClick={handleCancelClicked}>Clear Filters</button>
      </div>
    </div>
  );
};

export default Filter;
