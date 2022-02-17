import "./TableRow.scss";

const TableRow = ({
  transaction,
  index,
  activeRow,
  setActiveRow,
  setSelectedTransaction,
}) => {
  return (
    <tr
      className={`table-row ${index === activeRow ? "active" : ""}`}
      onClick={() => {
        setActiveRow(index);
        setSelectedTransaction(transaction);
      }}
    >
      <td className="customer-id">{transaction.customer._id}</td>
      <td>{transaction.customer.name}</td>
      <td>{transaction.customer.email}</td>
      <td>{transaction.customer.gender}</td>
      <td>{transaction.customer.country}</td>
      <td>{transaction.customer.city}</td>
      <td>{transaction.customer.street}</td>
      <td>{transaction.customer.phone}</td>
      <td>{transaction.total_price}</td>
      <td>{transaction.currency}</td>
      <td>{transaction.credit_card_type}</td>
      <td>{transaction.credit_card_number}</td>
    </tr>
  );
};

export default TableRow;
