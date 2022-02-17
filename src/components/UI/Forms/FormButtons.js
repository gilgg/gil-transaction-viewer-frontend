import "./FormButtons.scss";
import { useDispatch } from "react-redux";
import axios from "axios";

const FormButtons = ({
  addOrEdit,
  transaction,
  setAdd,
  setEdit,
}) => {
  const dispatch = useDispatch();

  const onDeleteHandler = async (e, type) => {
    e.preventDefault();
    setAdd(false);
    setEdit(false);

    const id =
      type === "transactions" ? transaction._id : transaction.customer._id;
    const transactions = (
      await axios.delete(`${process.env.REACT_APP_API_URL}/${type}/${id}`)
    ).data;

    dispatch({ type: "INIT_TRANSACTIONS", transactions });
  };

  const editButtons = () => {
    if (addOrEdit === "edit") {
      return (
        <>
          <button
            className="btn-delete-transaction"
            onClick={(e) => onDeleteHandler(e, "transactions")}
          >
            Delete Transaction
          </button>
          <button
            className="btn-delete-customer"
            onClick={(e) => onDeleteHandler(e, "customers")}
          >
            Delete Customer
          </button>
        </>
      );
    } else {
      return;
    }
  };

  return (
    <div className="add-edit-form-buttons">
      <button className="btn-save" type="submit">
        Save
      </button>
      {editButtons()}
    </div>
  );
};

export default FormButtons;
