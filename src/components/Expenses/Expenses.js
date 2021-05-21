import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
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

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpense.length > 0) {
    expensesContent = filteredExpense.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={yearSelected}
          onFilterSelected={filterSelectionHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
