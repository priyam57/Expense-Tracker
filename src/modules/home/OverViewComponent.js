import React, { useState } from "react";

const ExpenseBox = ({ isIncome, children }) => (
  <div
    className={`border-1 border-solid border-gray-300 rounded-md p-4 text-center w-full text-sm  shadow-2xl bg-slate-50 mx-2 ${
      isIncome ? "text-green-500" : "text-red-500"
    }`}
  >
    {children}
  </div>
);

const AddTransactionView = (props) => {
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("EXPENSE");

  return (
    <div className={`p-[40px] ${props.isAddTxnVisible ? "block" : "hidden"}`}>
      <input
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full rounded-md border border-gray-300 p-2"
      />
      <input
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className="w-full rounded-md border border-gray-300 p-2 mt-2"
      />
      <div className="flex items-center mt-2">
        <label className="mr-2">
          <input
            type="radio"
            id="expense"
            name="type"
            value="EXPENSE"
            checked={type === "EXPENSE"}
            onChange={() => setType("EXPENSE")}
          />
          Expense
        </label>
        <label>
          <input
            type="radio"
            id="income"
            name="type"
            value="INCOME"
            checked={type === "INCOME"}
            onChange={() => setType("INCOME")}
          />
          Income
        </label>
      </div>
      <button
        onClick={() =>
          props.addTransaction({
            id: Date.now(),
            amount: Number(amount),
            desc,
            type,
          })
        }
        className="bg-blue-700 text-white py-2 px-4 rounded-md mt-4"
      >
        Add Transaction
      </button>
    </div>
  );
};

const OverViewComponent = (props) => {
  const [isAddTxnVisible, toggleAddTXn] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white text-0d1d2c flex flex-row items-center p-4 text-18 font-bold w-360px justify-between gap-4">
        Balance: ${props.income - props.expense}
        <button
          onClick={() => toggleAddTXn(!isAddTxnVisible)}
          className="bg-blue-700 text-white py-2 px-4 rounded-md"
        >
          {isAddTxnVisible ? "CANCEL" : "ADD"}
        </button>
      </div>
      <AddTransactionView
        isAddTxnVisible={isAddTxnVisible}
        addTransaction={(payload) => {
          props.addTransaction(payload);
          toggleAddTXn(!isAddTxnVisible);
        }}
      />
      <div className="flex gap-12 mt-4">
        <ExpenseBox >
          Expense<span>${props.expense}</span>
        </ExpenseBox>
        <ExpenseBox isIncome>
          Income<span>${props.income}</span>
        </ExpenseBox>
      </div>
    </div>
  );
};

export default OverViewComponent;
