import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {

    const selectionHandler = (event) => {
        props.onFilterSelected(event.target.value);
        console.log(event);
    };

  return (
      <div className="expenses-filter">
        <div className="expenses-filter__control">
          <label>Filter by year</label>
          <select value={props.selectedYear} onChange={selectionHandler}>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
      </div>
  );
};

export default ExpensesFilter;