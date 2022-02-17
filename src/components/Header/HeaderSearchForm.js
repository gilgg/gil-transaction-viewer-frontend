import "./HeaderSearchForm.scss";
import { useRef } from "react";
import { useDispatch } from "react-redux";

const HeaderSearchForm = () => {
  const dispatch = useDispatch();
  const searchRef = useRef();
  const filterRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const query = searchRef.current.value;
    const filterBy = filterRef.current.value;
    searchRef.current.value = "";
    dispatch({ type: "FILTER_TRANSACTIONS", filterBy, query });
  };

  return (
    <form className="search-form" onSubmit={onSubmitHandler}>
      <input type="text" placeholder="Search..." ref={searchRef} />
      <button>Search</button>
      <select
        name="transaction-details"
        id="transaction-details"
        ref={filterRef}
      >
        <option value="name" defaultValue>
          Name
        </option>
        <option value="_id">Customer Id</option>
        <option value="email">Email</option>
        <option value="gender">Gender</option>
        <option value="country">Country</option>
        <option value="city">City</option>
        <option value="street">Street</option>
        <option value="phone">Phone</option>
        <option value="total_price">Total Price</option>
        <option value="currency">Currency</option>
        <option value="credit_card_type">Credit Card Type</option>
        <option value="credit_card_number">Credit Card Number</option>
      </select>
    </form>
  );
};

export default HeaderSearchForm;
