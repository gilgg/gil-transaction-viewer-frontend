import "./App.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import useFetchTransactions from "./hooks/useFetchTransactions";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import Pagination from "./components/Pagination/Pagination";

const App = () => {
  useFetchTransactions();
  const transactions = useSelector((state) => state.currentPageTransactions);
  const [isFirstFetch, setIsFirstFetch] = useState(true);
  const [activeRow, setActiveRow] = useState(0);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  if (transactions.length > 0 && isFirstFetch) {
    setIsFirstFetch(false);
    setSelectedTransaction(transactions[0]);
  }

  return (
    <div className="app">
      <Header selectedTransaction={selectedTransaction} />
      <Table
        transactions={transactions}
        activeRow={activeRow}
        setActiveRow={setActiveRow}
        setSelectedTransaction={setSelectedTransaction}
        isFirstFetch={isFirstFetch}
      />
      {transactions.length > 0 && !isFirstFetch && <Pagination />}
      {transactions.length === 0 && !isFirstFetch && (
        <h1 className="no-results">No results</h1>
      )}
      {transactions.length === 0 && isFirstFetch && (
        <h1 className="loading">Loading...</h1>
      )}
    </div>
  );
};

export default App;
