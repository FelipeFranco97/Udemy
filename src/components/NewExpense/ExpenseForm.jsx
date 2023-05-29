import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //   const [inputUser, setInputUser] = useState({
  //     enteredTitle:'',
  //     enteredAmount:'',
  //     enteredDate:'',
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //     ...inputUser,
    //     enteredTitle: '',
    // });
    // setInputUser((prevState) => {
    //     return {...prevState, enteredTitle: event.target.value};
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    //     ...inputUser,
    //     enteredAmount: '',
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    //     ...inputUser,
    //     enteredDate: '',
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
    };

    console.log(expenseData);
  };

  return (
    <form action="" onSubmit={submitHandler}>
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
