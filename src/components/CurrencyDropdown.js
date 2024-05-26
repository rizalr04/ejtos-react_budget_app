import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const CurrencyDropdown = () => {
  const { currency, dispatch } = useContext(AppContext);

  const handleCurrencyChange = (event) => {
    const newCurrency = event.target.value;
    dispatch({ type: "CHG_CURRENCY", payload: newCurrency });
  };

  return (
    <div className="currency-dropdown">
      <select value={currency} onChange={handleCurrencyChange}>
        <option value="£">£ Pound</option>
        <option value="$">$ Dollar</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Rupee</option>
      </select>
    </div>
  );
};

export default CurrencyDropdown;
