import React, { useEffect, useState } from "react";

const Container = ({ children }) => (
  <div className="bg-white text-0d1d2c flex flex-col p-10px md:p-22px text-18px w-full gap-10px font-bold overflow-y-auto">
    {children}
  </div>
);

const Cell = ({ isExpense, children }) => (
  <div
    className={`bg-white text-0d1d2c flex flex-row p-10px md:p-15px text-14px rounded-2px border-1 border-solid border-gray-300 items-center font-normal justify-between ${
      isExpense ? "border-red-500" : "border-green-500"
    }`}
  >
    {children}
  </div>
);

const TransactionCell = (props) => {
  return (
    <Cell isExpense={props.payload?.type === "EXPENSE"}>
      <div className="mx-2  flex flex-row justify-between gap-[250px]">
        <span>{props.payload?.desc}</span>
        <span>${props.payload?.amount}</span>
      </div>
    </Cell>
  );
};

const TransactionsComponent = (props) => {
  const [searchText, updateSearchText] = useState("");
  const [filteredTransaction, updateTxn] = useState(props.transactions);

  const filterData = (searchText) => {
    if (!searchText || !searchText.trim().length) {
      updateTxn(props.transactions);
      return;
    }
    let txn = [...props.transactions];
    txn = txn.filter((payload) =>
      payload.desc.toLowerCase().includes(searchText.toLowerCase().trim())
    );
    updateTxn(txn);
  };

  useEffect(() => {
    filterData(searchText);
  }, [props.transactions]);

  return (
    <Container>
      <h3 className="mx-2">Transactions</h3>

      <input
        placeholder="Search"
        onChange={(e) => {
          updateSearchText(e.target.value);
          filterData(e.target.value);
        }}
        className="p-2 mx-2 rounded-md border border-gray-300"
      />
      {filteredTransaction?.map((payload) => (
        <TransactionCell payload={payload} key={payload.id} />
      ))}
    </Container>
  );
};

export default TransactionsComponent;
