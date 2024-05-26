import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, expenses, currency, dispatch } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

  const handleBudgetChange = (event) => {
    const newBudgetValue = parseInt(event.target.value);

    if (newBudgetValue < totalExpenses) {
      alert("Budget cannot be lower than total spending!");
      return;
    } else if (newBudgetValue > 20000) {
      alert("Budget cannot exceed £20,000!");
      return;
    }

    setNewBudget(newBudgetValue);
    dispatch({ type: "SET_BUDGET", payload: newBudgetValue });
  };

  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};

export default Budget;
