import "./Header.scss";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import HeaderDashboard from "./HeaderDashboard";
import Map from "../Map/Map";
import AddEditForm from "../UI/Forms/AddEditForm";
import { getCoordsFromApi } from "../../helpers/helpers";

const Header = ({ selectedTransaction }) => {
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [coords, setCoords] = useState([]);

  useEffect(() => {
    if (add || edit) {
      setShowForm(true);
    } else {
      setShowForm(false);
    }
  }, [add, edit]);

  useEffect(() => {
    if (selectedTransaction) {
      getCoordsFromApi(selectedTransaction, setCoords);
    }
  }, [selectedTransaction]);

  return (
    <div className="header">
      <div className="header-title-row">
        <h1 className="header-title">Transactions</h1>
        <img className="header-title-logo" src={logo} alt="logo" />
      </div>
      <HeaderDashboard
        setShowMap={setShowMap}
        setAdd={setAdd}
        setEdit={setEdit}
      />
      {showForm && (
        <AddEditForm
          addOrEdit={add ? "add" : "edit"}
          transaction={selectedTransaction}
          setAdd={setAdd}
          setEdit={setEdit}
        />
      )}
      {showMap && coords.length === 2 && (
        <Map transaction={selectedTransaction} coords={coords} />
      )}
      {showMap && coords.length === 1 && (
        <div className="map-unavailable">
          <h1>No map available</h1>
        </div>
      )}
    </div>
  );
};

export default Header;
