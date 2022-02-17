import "./HeaderDashboard.scss";
import { useDispatch } from "react-redux";
import { showAllHandler, showMapHandler, onAddEditHandler } from "./handlers";
import HeaderSearchForm from "./HeaderSearchForm";
import HeaderBtn from "./HeaderBtn";
import HeaderResults from "./HeaderResults";

const HeaderDashboard = ({ setShowMap, setAdd, setEdit }) => {
  const dispatch = useDispatch();

  return (
    <div className="header-dashboard">
      <div className="header-dashboard-section-1">
        <HeaderBtn
          type="Add Tranaction"
          onClickHandler={(e) => onAddEditHandler(e, "add", setEdit, setAdd)}
        />
        <HeaderBtn
          type="Edit"
          onClickHandler={(e) => onAddEditHandler(e, "edit", setEdit, setAdd)}
        />
        <HeaderBtn
          type="Show on map"
          onClickHandler={(e) => showMapHandler(e, setShowMap)}
        />
        <HeaderBtn
          type="Show all"
          onClickHandler={(e) => showAllHandler(e, dispatch)}
        />
        <HeaderSearchForm />
      </div>

      <HeaderResults />
    </div>
  );
};

export default HeaderDashboard;
