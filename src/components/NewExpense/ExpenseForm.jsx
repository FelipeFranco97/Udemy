import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [inputUser, setInputUser] = useState({
    enteredTitle:'',
    enteredAmount:'',
    enteredDate:'',
  })

  const titleChangeHandler = () => {
    setInputUser({
        ...inputUser,
        enteredTitle: '',
    });
  };

  const amountChangeHandler = () => {
    setInputUser({
        ...inputUser,
        enteredAmount: '',
    });
  };

  const dateChangeHandler = () => {
    setInputUser({
        ...inputUser,
        enteredDate: '',
    });
  };

  return (
    <form action="">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
