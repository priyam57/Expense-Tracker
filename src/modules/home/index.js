import React, { useEffect, useState } from "react";
import OverViewComponent from "./OverViewComponent";
import TransactionsComponent from "./TransactionsComponent";

const HomeComponent = (props) => {
  const [transactions, updateTransaction] = useState([]);
  const [expense, updateExpense] = useState(0);
  const [income, updateIncome] = useState(0);

  const calculateBalance = () => {
    let exp = 0;
    let inc = 0;
    transactions.map((payload) =>
      payload.type === "EXPENSE"
        ? (exp = exp + payload.amount)
        : (inc = inc + payload.amount)
    );
    updateExpense(exp);
    updateIncome(inc);
  };
  useEffect(() => calculateBalance(), [transactions]);

  const addTransaction = (payload) => {
    const transactionArray = [...transactions];
    transactionArray.push(payload);
    updateTransaction(transactionArray);
  };

  return (
    <div className="bg-white  h-[400px] text-0d1d2c flex flex-col p-10px md:p-22px text-18px w-360px items-center justify-between shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      <OverViewComponent
        expense={expense}
        income={income}
        addTransaction={addTransaction}
      />
      {transactions?.length ? (
        <TransactionsComponent transactions={transactions} />
      ) : (
        ""
      )}
    </div>
  );
};

export default HomeComponent;
