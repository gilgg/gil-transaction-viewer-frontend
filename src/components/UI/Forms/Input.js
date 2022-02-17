import "./Input.scss";
import { getGenderOptions } from "../../../helpers/helpers";

const Input = ({ field, val = "", setVal, addOrEdit, ref }) => {
  const getType = () => {
    switch (field) {
      case "Email":
        return "email";
      case "Total Price":
        return "number";
      default:
        return "text";
    }
  };

  if (addOrEdit === "edit" && field === "Customer Id") {
    return (
      <input
        className="read-only"
        type="text"
        placeholder="Customer Id"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        readOnly
        required
      />
    );
  } else if (field === "Gender") {
    const gender = val.toLowerCase();

    return (
      <select
        name="Gender"
        id="gender"
        value={!gender ? "Gender" : gender} // in case we're in add form -> gender = ""
        onChange={(e) => setVal(e.target.value)}
        required
      >
        {getGenderOptions(addOrEdit, gender)}
      </select>
    );
  } else {
    return (
      <input
        type={getType()}
        placeholder={field}
        value={val}
        onChange={(e) => setVal(e.target.value)}
        required
      />
    );
  }
};

export default Input;
