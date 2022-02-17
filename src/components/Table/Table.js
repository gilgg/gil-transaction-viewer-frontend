import "./Table.scss";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = ({
  transactions,
  activeRow,
  setActiveRow,
  setSelectedTransaction,
}) => {
  return (
    <>
      <table className="table">
        <TableHeader />
        <tbody>
          {transactions.map((transaction, index) => (
            <TableRow
              key={index}
              index={index}
              transaction={transaction}
              activeRow={activeRow}
              setActiveRow={setActiveRow}
              setSelectedTransaction={setSelectedTransaction}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
