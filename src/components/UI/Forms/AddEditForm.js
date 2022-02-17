import "./AddEditForm.scss";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getDefaultValues, toTitleCase } from "../../../helpers/helpers";
import Input from "./Input";
import FormButtons from "./FormButtons";

const AddEditForm = ({ addOrEdit, transaction, setAdd, setEdit }) => {
  const dispatch = useDispatch();

  const [customerIdVal, setCustomerIdVal] = useState("");
  const [nameVal, setNameVal] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const [genderVal, setGenderVal] = useState("");
  const [cityVal, setCityVal] = useState("");
  const [countryVal, setCountryVal] = useState("");
  const [streetVal, setStreetVal] = useState("");
  const [phoneVal, setPhoneVal] = useState("");
  const [totalPriceVal, setTotalPriceVal] = useState(0);
  const [currencyVal, setCurrencyVal] = useState("");
  const [creditCardTypeVal, setCreditCardTypeVal] = useState("");
  const [creditCardNumberVal, setCreditCardNumberVal] = useState("");

  useEffect(() => {
    setCustomerIdVal(getDefaultValues(addOrEdit, transaction, "_id"));
    setNameVal(getDefaultValues(addOrEdit, transaction, "name"));
    setEmailVal(getDefaultValues(addOrEdit, transaction, "email"));
    setGenderVal(getDefaultValues(addOrEdit, transaction, "gender"));
    setCityVal(getDefaultValues(addOrEdit, transaction, "city"));
    setCountryVal(getDefaultValues(addOrEdit, transaction, "country"));
    setStreetVal(getDefaultValues(addOrEdit, transaction, "street"));
    setPhoneVal(getDefaultValues(addOrEdit, transaction, "phone"));
    setTotalPriceVal(getDefaultValues(addOrEdit, transaction, "total_price"));
    setCurrencyVal(getDefaultValues(addOrEdit, transaction, "currency"));
    setCreditCardTypeVal(
      getDefaultValues(addOrEdit, transaction, "credit_card_type")
    );
    setCreditCardNumberVal(
      getDefaultValues(addOrEdit, transaction, "credit_card_number")
    );
  }, [addOrEdit, transaction]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setAdd(false);
    setEdit(false);

    const transactions = (
      await axios({
        method: addOrEdit === "add" ? "post" : "patch",
        url: `${process.env.REACT_APP_API_URL}/transactions/${
          addOrEdit === "add" ? "new" : `edit/${transaction._id}`
        }`,
        data: {
          customer_id: customerIdVal,
          name: toTitleCase(nameVal),
          email: emailVal,
          gender: toTitleCase(genderVal),
          country: toTitleCase(countryVal),
          city: toTitleCase(cityVal),
          street: toTitleCase(streetVal),
          phone: phoneVal,
          total_price: totalPriceVal,
          currency: currencyVal.toUpperCase(),
          credit_card_type: toTitleCase(creditCardTypeVal),
          credit_card_number: creditCardNumberVal,
        },
      })
    ).data;

    dispatch({ type: "INIT_TRANSACTIONS", transactions });

    if (addOrEdit === "add") {
      setCustomerIdVal(getDefaultValues(addOrEdit, transaction, "_id"));
      setNameVal(getDefaultValues(addOrEdit, transaction, "name"));
      setEmailVal(getDefaultValues(addOrEdit, transaction, "email"));
      setGenderVal(getDefaultValues(addOrEdit, transaction, "gender"));
      setCityVal(getDefaultValues(addOrEdit, transaction, "city"));
      setCountryVal(getDefaultValues(addOrEdit, transaction, "country"));
      setStreetVal(getDefaultValues(addOrEdit, transaction, "street"));
      setPhoneVal(getDefaultValues(addOrEdit, transaction, "phone"));
      setTotalPriceVal(getDefaultValues(addOrEdit, transaction, "total_price"));
      setCurrencyVal(getDefaultValues(addOrEdit, transaction, "currency"));
      setCreditCardTypeVal(
        getDefaultValues(addOrEdit, transaction, "credit_card_type")
      );
      setCreditCardNumberVal(
        getDefaultValues(addOrEdit, transaction, "credit_card_number")
      );
    }
  };

  return (
    <form className="add-edit-form" onSubmit={onSubmitHandler}>
      <div className="add-edit-form-row-1">
        <Input
          field="Customer Id"
          val={customerIdVal}
          setVal={setCustomerIdVal}
          addOrEdit={addOrEdit}
        />
        <Input field="Name" val={nameVal} setVal={setNameVal} />
        <Input field="Email" val={emailVal} setVal={setEmailVal} />
        <Input
          field="Gender"
          val={genderVal}
          setVal={setGenderVal}
          addOrEdit={addOrEdit}
        />
      </div>
      <div className="add-edit-form-row-2">
        <Input field="Country" val={countryVal} setVal={setCountryVal} />
        <Input field="City" val={cityVal} setVal={setCityVal} />
        <Input field="Street" val={streetVal} setVal={setStreetVal} />
        <Input field="Phone" val={phoneVal} setVal={setPhoneVal} />
      </div>
      <div className="add-edit-form-row-3">
        <Input
          field="Total Price"
          val={totalPriceVal}
          setVal={setTotalPriceVal}
        />
        <Input field="Currency" val={currencyVal} setVal={setCurrencyVal} />
        <Input
          field="Credit Card Type"
          val={creditCardTypeVal}
          setVal={setCreditCardTypeVal}
        />
        <Input
          field="Credit Card Number"
          val={creditCardNumberVal}
          setVal={setCreditCardNumberVal}
        />
      </div>

      <FormButtons
        addOrEdit={addOrEdit}
        transaction={transaction}
        setAdd={setAdd}
        setEdit={setEdit}
      />
    </form>
  );
};

export default AddEditForm;
