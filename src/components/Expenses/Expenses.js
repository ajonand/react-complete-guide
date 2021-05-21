import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [yearSelected, setYearSelected] = useState("2021");

  const filterSelectionHandler = (yearSelected) => {
    setYearSelected(yearSelected);
    console.log(yearSelected);
  };

  const filteredExpense = props.expense.filter(
    (item) => item.date.getFullYear().toString() === yearSelected
  );


  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={yearSelected}
          onFilterSelected={filterSelectionHandler}
        />
        <ExpensesList items={filteredExpense}/>
      </Card>
    </li>
  );
};

export default Expenses;
