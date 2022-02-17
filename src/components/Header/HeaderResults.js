import "./HeaderResults.scss";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { resultsOnChangeHandler } from "./handlers";

const HeaderResults = () => {
  const dispatch = useDispatch();
  const resultsRef = useRef();

  return (
    <div className="header-dashboard-results">
      <label className="results-label" htmlFor="number-of-results">
        Results per page
      </label>
      <select
        name="number-of-results"
        id="number-of-results"
        ref={resultsRef}
        onChange={() => resultsOnChangeHandler(dispatch, resultsRef)}
      >
        <option value="10" defaultValue>
          10
        </option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
  );
};

export default HeaderResults;
